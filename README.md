# VELVET & PULSE — Modern Sexual Wellness & Intimate E-Commerce

A luxury, body-safe adult pleasure & intimate self-care e-commerce platform built with modern HTML5, Tailwind CSS, and ES Modules.

Designed with an aesthetic, body-positive editorial atmosphere inspired by leading sexual wellness innovators (such as Lelo, Dame, and Maude). It includes end-to-end discreet shopping features, whisper-quiet motor engineering specs, an interactive wave simulator, and an anatomy-matching quiz.

---

## 🌟 Key Features

### 1. 🛡️ Discretion & Privacy First
* **18+ Age Verification Gate**: Legal compliance modal on initial load with *"Remember on this device"* setting.
* **Quick Exit Privacy Button (ESC key)**: Immediate one-click privacy escape that replaces the screen with a realistic neutral weather radar dashboard and redirects to Google/Weather.
* **Discreet Packaging Guarantee**: Explains and previews plain unbranded brown kraft cartons, neutral return address (*"VP Logistics LLC"*), and tamper-evident Kraft tape.
* **Stealth Billing Descriptor**: Live previews showing how credit card charges appear as `VP COMMERCE - 800-555-0199` on statements and mobile banking apps.

### 2. 🌊 Interactive Pulse & Resonance Simulator
* **Interactive Wave Canvas**: Visualizes sonic air-pulses, rhythmic waveforms, deep rumbling frequencies, and crescendo surges in real-time.
* **Whisper-Quiet Decibel Meter**: Dynamic dB meter showing realistic motor sound levels (28 dB to 40 dB) comparing them against room ambient whisper noise.
* **Web Audio Synthesis**: Gentle low-frequency sine wave tone generator mimicking motor hum.
* **Mobile Haptic Feedback**: Triggers real hardware vibration pulses via `navigator.vibrate` on supported devices.

### 3. 🎯 The Intimacy Finder Quiz
* A 4-step interactive questionnaire matching users with their ideal device based on:
  - Experience level (Curious Beginner, Experienced, Connoisseur)
  - Anatomical sensation focus (Air-Pulse clitoral, G-spot, Dual stimulation, Couples/Men, Sensual rituals)
  - Motor & sound preference (< 35 dB whisper vs. deep low rumble)
  - Desired features (Thermo-warming 38°C, bath waterproof, smart app control)
* Dynamically calculates scores and outputs the top recommended product with instant one-click checkout.

### 4. 🛍️ Dynamic Product Catalog & Filtering
* **12 Comprehensive Products**: Air-pulse clitoral stimulators, body wands, dual G-spot massagers, prostate stimulators, organic water-based serums (pH 4.2), vibrating couples rings, antimicrobial toy cleansers, and beginner bundles.
* **Real-time Live Search**: Instant multi-attribute search across sensation, anatomy focus, decibels, and materials.
* **Category Filters & Sorting**: Filter by collection, sort by rating, price, or review count.
* **Quick Preview & Color Swatches**: Interactive shade selection and visual zoom.

### 5. 🛒 Smart Slide-Out Cart & Discreet Checkout
* **Free Discreet Shipping Progress Bar**: Calculates amount remaining towards the \$69 threshold.
* **Promo Code Engine**: Supports `PLEASURE15` (15% off), `AURA20` (20% off), and `DISCREET10`.
* **One-Click Impulse Cross-Sell**: Quick-add for organic lubricant or sanitizing mist.
* **Multi-Step Discreet Checkout**:
  - Discreet recipient naming
  - Stealth packaging level choice
  - Encrypted card payment simulation
  - Order confirmation screen generating realistic reference codes, tracking IDs, and receipt summaries.

### 6. 📖 Clinical & Educational Journal
* Medically reviewed guides on:
  - *"Air-Pulse vs. Traditional Vibrations: The Science of Sensation"*
  - *"Silicone vs. Water-Based Lubes: What You Need to Know"*
  - *"How to Clean, Sanitize & Preserve Your Devices for Longevity"*

---

## 🚀 How to Run Locally

### Option 1: One-Click Windows Launcher (Easiest)
Simply double-click **`run.bat`** (or `start.bat`) in this folder.
- Detects Python automatically.
- Launches the local server on an available port (auto-detects if 8000 is occupied).
- Automatically opens your default web browser to the live storefront!

### Option 2: Python Command Line
Open PowerShell or Command Prompt in this folder and run:
```bash
python server.py
```
This automatically starts the server and opens the storefront in your browser.

### Option 3: Direct File Open (Zero Server Required)
You can directly double-click **`index.html`** in Windows Explorer. Thanks to the universal self-contained bundle, all features (product catalog, 18+ age gate, cart, vibration frequency simulator, intimacy quiz, and discreet checkout) run natively with **zero CORS issues**.

---

## 📂 Project Structure

```text
├── index.html          # Main storefront, modals, drawers & layout
├── run.bat             # 1-click Windows launcher (starts server + opens browser)
├── start.bat           # Alias launcher
├── server.py           # Auto-port detecting HTTP server + auto-browser launcher
├── css/
│   └── styles.css      # Luxury typography, glassmorphism & custom sliders
├── js/
│   ├── app.bundle.js   # Universal self-contained application bundle
│   ├── data.js         # Curated product catalog, reviews, FAQs & promo codes
│   ├── simulator.js    # Waveform canvas, decibel meter & audio engine
│   ├── quiz.js         # Interactive anatomy-matching quiz engine
│   ├── cart.js         # Shopping cart state, drawer & promo code logic
│   └── app.js          # Core application controller
└── README.md           # Documentation
```

---

## 🔒 Safety & Standards
- Devices comply with **CE**, **RoHS**, and **FDA biocompatible silicone** standards.
- 100% Phthalate-free, BPA-free, and latex-free.
- IPX7 waterproof rating (submersible up to 1 meter for 30 minutes).

