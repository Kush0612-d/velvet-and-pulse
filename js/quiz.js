// VELVET & PULSE - Pleasure Finder Quiz
// Interactive questionnaire matching users with their ideal body-safe pleasure companion

import { PRODUCTS } from './data.js';

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: "What is your familiarity with intimate pleasure devices?",
    subtitle: "There are no wrong answers. Every body is unique.",
    options: [
      { text: "Curious Beginner", desc: "First time exploring or prefer gentle, intuitive toys", score: { "pure-bliss-starter-kit": 3, "whisper-pebble": 3, "aurora-air-wave": 2 } },
      { text: "Experienced Explorer", desc: "Know what feels good, seeking refined quality & new tech", score: { "aurora-air-wave": 3, "solstice-g-curve": 3, "silhouette-wand": 2 } },
      { text: "Sensation Connoisseur", desc: "Looking for high-power rumble, dual motors, or app control", score: { "duet-eclipse": 3, "silhouette-wand": 3, "horizon-bluetooth-wand": 3 } }
    ]
  },
  {
    id: 2,
    title: "What sensation or anatomical focus are you most drawn to?",
    subtitle: "Select the primary zone of erotic focus.",
    options: [
      { text: "External Clitoral & Contactless", desc: "Gentle sonic air pulses or targeted vibration without friction", score: { "aurora-air-wave": 4, "whisper-pebble": 3 } },
      { text: "Internal G-Spot Fullness", desc: "Curved anatomical pressure with deep rumbling resonance", score: { "solstice-g-curve": 4, "duet-eclipse": 3 } },
      { text: "Both Simultaneously (Dual)", desc: "Synchronized internal and external stimulation", score: { "duet-eclipse": 5 } },
      { text: "Couples & Partnered Play", desc: "Designed for hands-free lovemaking or prostate exploration", score: { "embrace-ring": 4, "vector-prime": 4, "horizon-bluetooth-wand": 3 } },
      { text: "Sensual Body Rituals", desc: "Intimate massage, warm botanical oils, and silky hydration", score: { "silk-warming-candle": 4, "velvet-glide-lube": 4 } }
    ]
  },
  {
    id: 3,
    title: "What is your motor & sound preference?",
    subtitle: "How would you like the device to sound and feel?",
    options: [
      { text: "Whisper-Quiet & Discreet", desc: "Under 35 dB so nobody in the house or next room hears a thing", score: { "whisper-pebble": 4, "aurora-air-wave": 3 } },
      { text: "Deep, Heavy-Rumble Bass", desc: "Low-frequency pulses that penetrate deep without surface buzzing", score: { "silhouette-wand": 4, "solstice-g-curve": 3 } },
      { text: "Air-Pulse Waves", desc: "Aerodynamic suction feeling without direct rubbing", score: { "aurora-air-wave": 5 } }
    ]
  },
  {
    id: 4,
    title: "Which luxury feature excites you most?",
    subtitle: "Choose the feature you'd appreciate the most.",
    options: [
      { text: "Gentle Thermo-Warming (38°C)", desc: "Heats naturally to body temperature for lifelike warmth", score: { "duet-eclipse": 4 } },
      { text: "100% Bath & Shower Waterproof", desc: "Submersible for steamy tub relaxation", score: { "aurora-air-wave": 3, "whisper-pebble": 3, "solstice-g-curve": 3 } },
      { text: "Smart Long-Distance & Music App", desc: "Partner control from anywhere across the globe", score: { "horizon-bluetooth-wand": 5 } },
      { text: "Complete Curated Set with Guide", desc: "Includes toy, premium lube, cleaner, and silky pouch", score: { "pure-bliss-starter-kit": 5 } }
    ]
  }
];

export class PleasureQuiz {
  constructor(containerId, onComplete) {
    this.container = document.getElementById(containerId);
    this.onComplete = onComplete;
    this.currentStep = 0;
    this.scores = {};
    this.userAnswers = [];
    this.init();
  }

  init() {
    this.reset();
  }

  reset() {
    this.currentStep = 0;
    this.scores = {};
    this.userAnswers = [];
    this.render();
  }

  selectOption(optionIndex) {
    const question = QUIZ_QUESTIONS[this.currentStep];
    const option = question.options[optionIndex];
    this.userAnswers.push({ questionId: question.id, optionIndex });

    // Aggregate score
    for (const [prodId, val] of Object.entries(option.score)) {
      this.scores[prodId] = (this.scores[prodId] || 0) + val;
    }

    if (this.currentStep < QUIZ_QUESTIONS.length - 1) {
      this.currentStep++;
      this.render();
    } else {
      this.finish();
    }
  }

  finish() {
    // Find highest scoring product
    let highestScore = -1;
    let bestProductId = "aurora-air-wave";

    for (const [id, score] of Object.entries(this.scores)) {
      if (score > highestScore) {
        highestScore = score;
        bestProductId = id;
      }
    }

    const matchedProduct = PRODUCTS.find(p => p.id === bestProductId) || PRODUCTS[0];
    this.renderResult(matchedProduct);

    if (typeof this.onComplete === 'function') {
      this.onComplete(matchedProduct);
    }
  }

  render() {
    if (!this.container) return;
    const question = QUIZ_QUESTIONS[this.currentStep];
    const progressPercent = Math.round(((this.currentStep + 1) / QUIZ_QUESTIONS.length) * 100);

    this.container.innerHTML = `
      <div class="p-6 md:p-8">
        <!-- Progress Header -->
        <div class="flex items-center justify-between text-xs font-medium text-stone-400 mb-3 uppercase tracking-wider">
          <span>Question ${this.currentStep + 1} of ${QUIZ_QUESTIONS.length}</span>
          <span class="text-rose-400">${progressPercent}% Completed</span>
        </div>
        <div class="w-full bg-stone-800 rounded-full h-1.5 mb-6 overflow-hidden">
          <div class="bg-gradient-to-r from-rose-400 to-amber-300 h-1.5 transition-all duration-300" style="width: ${progressPercent}%"></div>
        </div>

        <h3 class="font-serif text-2xl md:text-3xl text-stone-100 font-normal mb-2 leading-tight">${question.title}</h3>
        <p class="text-stone-400 text-sm mb-6">${question.subtitle}</p>

        <!-- Options Grid -->
        <div class="space-y-3">
          ${question.options.map((opt, idx) => `
            <button type="button" data-quiz-option="${idx}" class="w-full text-left p-4 rounded-xl border border-stone-800 bg-stone-900/60 hover:border-rose-400/50 hover:bg-stone-800/80 transition-all duration-200 group flex items-start gap-4">
              <span class="w-6 h-6 rounded-full border border-stone-700 flex items-center justify-center text-xs text-stone-400 group-hover:border-rose-400 group-hover:text-rose-400 shrink-0 mt-0.5">
                ${String.fromCharCode(65 + idx)}
              </span>
              <div>
                <div class="font-medium text-stone-200 text-base group-hover:text-rose-300 transition-colors">${opt.text}</div>
                <div class="text-xs text-stone-400 mt-0.5">${opt.desc}</div>
              </div>
            </button>
          `).join('')}
        </div>

        <!-- Back Button -->
        ${this.currentStep > 0 ? `
          <button type="button" id="quiz-back-btn" class="mt-6 text-xs text-stone-400 hover:text-stone-200 flex items-center gap-1.5 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Previous Question
          </button>
        ` : ''}
      </div>
    `;

    // Event listeners
    this.container.querySelectorAll('[data-quiz-option]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-quiz-option'), 10);
        this.selectOption(idx);
      });
    });

    const backBtn = this.container.querySelector('#quiz-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.userAnswers.pop();
          this.render();
        }
      });
    }
  }

  renderResult(product) {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="p-6 md:p-8 text-center animate-fadeIn">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium uppercase tracking-wider mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          98% Match Recommended For You
        </div>

        <h3 class="font-serif text-3xl text-stone-100 font-normal mb-2">Meet Your Match</h3>
        <p class="text-stone-400 text-sm max-w-md mx-auto mb-6">Based on your preferences for sensation, decibel comfort, and design, our intimacy algorithm selected:</p>

        <div class="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 text-left max-w-xl mx-auto mb-6 shadow-2xl">
          <div class="flex flex-col sm:flex-row gap-5 items-center">
            <div class="w-32 h-32 rounded-xl overflow-hidden shrink-0 bg-stone-800">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <span class="text-xs uppercase tracking-wider text-rose-400 font-medium">${product.category}</span>
              <h4 class="font-serif text-2xl text-stone-100 font-normal">${product.name}</h4>
              <p class="text-xs text-stone-300 mt-1 line-clamp-2">${product.tagline}</p>
              
              <div class="flex items-center gap-3 mt-3">
                <span class="text-xl font-medium text-amber-200 font-serif">$${product.price.toFixed(2)}</span>
                <span class="text-xs text-stone-400 line-through">$${product.originalPrice.toFixed(2)}</span>
                <span class="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-medium">In Stock</span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-stone-800 text-xs text-stone-400 space-y-1">
            <div class="flex items-center gap-2"><span class="text-rose-400">✓</span> ${product.features[0]}</div>
            <div class="flex items-center gap-2"><span class="text-rose-400">✓</span> ${product.specs.soundLevel}</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <button type="button" id="quiz-add-to-cart" class="flex-1 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-rose-900/30 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            Add Match to Bag ($${product.price.toFixed(2)})
          </button>
          <button type="button" id="quiz-view-details" class="py-3 px-6 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-sm transition-colors">
            Full Specs
          </button>
        </div>

        <button type="button" id="quiz-retake-btn" class="mt-5 text-xs text-stone-500 hover:text-stone-300 underline">
          Retake Intimacy Quiz
        </button>
      </div>
    `;

    this.container.querySelector('#quiz-add-to-cart')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('velvet:add-cart', { detail: { product, quantity: 1 } }));
      const modal = document.getElementById('quiz-modal');
      if (modal) modal.classList.add('hidden');
    });

    this.container.querySelector('#quiz-view-details')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('velvet:view-product', { detail: { productId: product.id } }));
      const modal = document.getElementById('quiz-modal');
      if (modal) modal.classList.add('hidden');
    });

    this.container.querySelector('#quiz-retake-btn')?.addEventListener('click', () => {
      this.reset();
    });
  }
}

