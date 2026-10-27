#!/usr/bin/env python3
"""
VELVET & PULSE - Resilient Local Server
- Auto-detects free port if 8000 is occupied
- Automatically launches your default web browser
- Compatible with Windows console encodings (ASCII-safe)
- Serves assets with correct MIME types
- Handles mock order and status REST APIs
"""

import http.server
import socketserver
import os
import sys
import json
import mimetypes
import webbrowser
import threading
import time
from urllib.parse import urlparse

# Ensure Windows console doesn't crash on unicode characters
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Ensure JavaScript ES modules and standard assets have proper MIME types
mimetypes.init()
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("application/json", ".json")

class VelvetHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            response = {
                "brand": "VELVET & PULSE",
                "status": "online",
                "discreet_billing": "VP COMMERCE",
                "mode": "discreet-intimate-wellness"
            }
            self.wfile.write(json.dumps(response).encode("utf-8"))
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/orders":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                order_data = json.loads(body.decode("utf-8")) if body else {}
            except Exception:
                order_data = {}

            order_id = f"VP-{os.urandom(3).hex().upper()}"
            tracking = f"TRK-{os.urandom(4).hex().upper()}"

            self.send_response(201)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            result = {
                "success": True,
                "order_id": order_id,
                "tracking_number": tracking,
                "statement_descriptor": "VP COMMERCE 800-555-0199",
                "message": "Order processed discreetly."
            }
            self.wfile.write(json.dumps(result).encode("utf-8"))
            return

        self.send_error(404, "Endpoint not found")

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def log_message(self, format, *args):
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def find_available_port(preferred_port=8000, max_tries=50):
    for offset in range(max_tries):
        port = preferred_port + offset
        try:
            with socketserver.TCPServer(("", port), None) as test_sock:
                return port
        except OSError:
            continue
    for port in [8080, 8081, 3000, 5000, 9000]:
        try:
            with socketserver.TCPServer(("", port), None) as test_sock:
                return port
        except OSError:
            continue
    return preferred_port

def auto_launch_browser(url):
    time.sleep(0.7)
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"Tip: Open your browser and navigate to {url}")

def run_server():
    os.chdir(DIRECTORY)
    port = find_available_port(8000)
    url = f"http://localhost:{port}"

    class ReusableTCPServer(socketserver.TCPServer):
        allow_reuse_address = True

    try:
        with ReusableTCPServer(("", port), VelvetHandler) as httpd:
            print("=" * 68)
            print("  VELVET & PULSE | Luxury Sexual Wellness & Intimate E-Commerce")
            print("=" * 68)
            print(f"  [OK] Storefront LIVE at:  {url}")
            print("  [OK] Opening storefront in your default web browser automatically...")
            print("  [OK] Medical-grade body-safe silicone catalog active (12 products)")
            print("  [OK] Interactive Wave Frequency & Decibel Simulator active")
            print("  [OK] Confidential Age Gate & Stealth Billing preview enabled")
            print("=" * 68)
            print("  Press Ctrl+C to stop the server at any time.\n")
            sys.stdout.flush()

            threading.Thread(target=auto_launch_browser, args=(url,), daemon=True).start()

            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[VELVET & PULSE] Server stopped gracefully.")
    except Exception as err:
        print(f"\n[Error starting server]: {err}")
        print("Falling back to opening index.html directly...")
        try:
            webbrowser.open(f"file://{os.path.abspath('index.html')}")
        except Exception:
            pass

if __name__ == "__main__":
    run_server()
