// VELVET & PULSE - Interactive Pulse & Vibration Frequency Simulator
// Visualizes waveforms, simulates whisper-quiet decibel levels, and uses Web Audio / Vibration API

export class VibrationSimulator {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.isPlaying = false;
    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;
    this.soundEnabled = false;
    this.pattern = 'wave';
    this.intensity = 60; // 0-100%
    this.currentDb = 32;
    this.animationFrame = null;
    this.phase = 0;
    this.targetProduct = null;

    this.patterns = {
      wave: { name: "Ocean Wave", baseHz: 55, speed: 0.05, label: "Cyclic rising and falling surge" },
      pulse: { name: "Rhythmic Pulse", baseHz: 65, speed: 0.08, label: "Tidal staccato pulses" },
      rumble: { name: "Deep Resonance", baseHz: 45, speed: 0.03, label: "Sub-bass low rumbling" },
      crescendo: { name: "Crescendo Escalation", baseHz: 75, speed: 0.06, label: "Progressive peak building" }
    };

    this.init();
  }

  init() {
    if (!this.canvas || !this.ctx) return;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    this.drawIdle();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = 140 * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  setProduct(product) {
    this.targetProduct = product;
    if (product && product.vibrationProfile) {
      this.updateStatusText(`Loaded profile: ${product.name} (${product.vibrationProfile.style})`);
    }
  }

  setPattern(patternKey) {
    if (this.patterns[patternKey]) {
      this.pattern = patternKey;
      this.updateAudioParams();
    }
  }

  setIntensity(val) {
    this.intensity = Math.max(10, Math.min(100, parseInt(val, 10)));
    this.currentDb = Math.round(28 + (this.intensity / 100) * 12); // Realistic 28dB to 40dB whisper quiet
    const dbDisplay = document.getElementById('simulator-db');
    if (dbDisplay) {
      dbDisplay.textContent = `${this.currentDb} dB`;
      const meterFill = document.getElementById('simulator-db-bar');
      if (meterFill) {
        meterFill.style.width = `${((this.currentDb - 20) / 25) * 100}%`;
      }
    }
    this.updateAudioParams();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (this.soundEnabled && this.isPlaying) {
      this.startAudio();
    } else {
      this.stopAudio();
    }
    return this.soundEnabled;
  }

  start() {
    this.isPlaying = true;
    if (this.soundEnabled) {
      this.startAudio();
    }
    this.triggerHaptic();
    this.animate();
  }

  stop() {
    this.isPlaying = false;
    this.stopAudio();
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.drawIdle();
    if (navigator.vibrate) {
      navigator.vibrate(0);
    }
  }

  startAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator.disconnect();
      }

      this.oscillator = this.audioCtx.createOscillator();
      this.gainNode = this.audioCtx.createGain();

      this.oscillator.type = 'sine'; // Soft, warm sine tone mimicking motor resonance
      this.updateAudioParams();

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);
      this.oscillator.start();
    } catch (e) {
      console.warn("Web Audio not permitted until user gesture", e);
    }
  }

  stopAudio() {
    if (this.oscillator) {
      try {
        this.oscillator.stop();
        this.oscillator.disconnect();
      } catch (e) {}
      this.oscillator = null;
    }
  }

  updateAudioParams() {
    if (!this.audioCtx || !this.oscillator || !this.gainNode) return;
    const pat = this.patterns[this.pattern] || this.patterns.wave;
    const baseFreq = pat.baseHz + (this.intensity * 0.3);
    this.oscillator.frequency.setTargetAtTime(baseFreq, this.audioCtx.currentTime, 0.05);

    // Keep sound very gentle, whisper quiet
    const gainVal = (this.intensity / 100) * 0.04;
    this.gainNode.gain.setTargetAtTime(this.soundEnabled ? gainVal : 0, this.audioCtx.currentTime, 0.05);
  }

  triggerHaptic() {
    if ('vibrate' in navigator) {
      try {
        // Pattern of subtle pulses
        navigator.vibrate([100, 50, 150, 50, 200]);
      } catch (e) {}
    }
  }

  animate() {
    if (!this.isPlaying) return;
    this.drawWave();
    this.phase += (this.patterns[this.pattern].speed * (this.intensity / 50));
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  drawWave() {
    if (!this.canvas || !this.ctx) return;
    const width = this.canvas.parentElement.clientWidth;
    const height = 140;

    this.ctx.clearRect(0, 0, width, height);

    // Background gradient
    const bgGrad = this.ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, 'rgba(23, 19, 33, 0.95)');
    bgGrad.addColorStop(1, 'rgba(13, 13, 17, 0.98)');
    this.ctx.fillStyle = bgGrad;
    this.ctx.fillRect(0, 0, width, height);

    // Center baseline
    const centerY = height / 2;
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(0, centerY);
    this.ctx.lineTo(width, centerY);
    this.ctx.stroke();

    // Wave calculation
    const amp = (this.intensity / 100) * 45;
    const pat = this.patterns[this.pattern] || this.patterns.wave;

    // Glowing wave line
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    const waveGrad = this.ctx.createLinearGradient(0, 0, width, 0);
    waveGrad.addColorStop(0, '#E07A8A');
    waveGrad.addColorStop(0.5, '#DFB275');
    waveGrad.addColorStop(1, '#9F496E');
    this.ctx.strokeStyle = waveGrad;

    for (let x = 0; x < width; x++) {
      let modulation = 1;
      if (this.pattern === 'pulse') {
        modulation = Math.sin(x * 0.015 + this.phase * 0.5) > 0 ? 1.2 : 0.2;
      } else if (this.pattern === 'crescendo') {
        modulation = 0.3 + 0.7 * (x / width);
      } else if (this.pattern === 'rumble') {
        modulation = 0.8 + 0.3 * Math.sin(x * 0.005);
      }

      const y = centerY + Math.sin(x * 0.025 + this.phase) * amp * modulation * Math.sin((x / width) * Math.PI);
      if (x === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.stroke();

    // Secondary harmonic wave (subtle ambient trace)
    this.ctx.beginPath();
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = 'rgba(224, 122, 138, 0.35)';
    for (let x = 0; x < width; x += 2) {
      const y = centerY + Math.sin(x * 0.045 - this.phase * 1.3) * (amp * 0.5) * Math.sin((x / width) * Math.PI);
      if (x === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.stroke();
  }

  drawIdle() {
    if (!this.canvas || !this.ctx) return;
    const width = this.canvas.parentElement.clientWidth;
    const height = 140;
    this.ctx.clearRect(0, 0, width, height);

    this.ctx.fillStyle = 'rgba(20, 18, 28, 0.95)';
    this.ctx.fillRect(0, 0, width, height);

    const centerY = height / 2;
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(224, 122, 138, 0.25)';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([6, 6]);
    this.ctx.moveTo(20, centerY);
    this.ctx.lineTo(width - 20, centerY);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    this.ctx.font = '12px Inter, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Press "Test Sensation Pulse" to activate wave resonance', width / 2, centerY + 24);
  }

  updateStatusText(msg) {
    const el = document.getElementById('simulator-status');
    if (el) el.textContent = msg;
  }
}

