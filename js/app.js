// VELVET & PULSE - Main Application Logic
import { STORE_CONFIG, CATEGORIES, PRODUCTS, EDUCATIONAL_ARTICLES, TESTIMONIALS, FAQS } from './data.js';
import { ShoppingCart } from './cart.js';
import { VibrationSimulator } from './simulator.js';
import { PleasureQuiz } from './quiz.js';

class VelvetApp {
  constructor() {
    this.cart = new ShoppingCart();
    this.simulator = null;
    this.quiz = null;
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.sortBy = 'featured';
    this.wishlist = this.loadWishlist();
    this.currentModalProduct = null;

    this.init();
  }

  init() {
    this.initAgeGate();
    this.initQuickExit();
    this.initCategories();
    this.initProductCatalog();
    this.initSimulator();
    this.initQuiz();
    this.initEducationalArticles();
    this.initTestimonials();
    this.initFaq();
    this.initSearchAndSort();
    this.initModals();
    this.initCheckout();
    this.initNewsletter();
    this.updateWishlistCount();

    // Listen for custom global events
    window.addEventListener('velvet:view-product', (e) => {
      const prod = PRODUCTS.find(p => p.id === e.detail.productId);
      if (prod) this.openProductModal(prod);
    });

    window.addEventListener('velvet:open-checkout', () => {
      this.openCheckoutModal();
    });
  }

  // --- AGE GATE VERIFICATION ---
  initAgeGate() {
    const isVerified = localStorage.getItem('vp_age_verified');
    const modal = document.getElementById('age-gate-modal');
    if (!modal) return;

    if (!isVerified) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      modal.classList.add('hidden');
    }

    document.getElementById('age-confirm-btn')?.addEventListener('click', () => {
      const remember = document.getElementById('age-remember-checkbox')?.checked;
      if (remember) {
        localStorage.setItem('vp_age_verified', 'true');
      } else {
        sessionStorage.setItem('vp_age_verified', 'true');
      }
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    document.getElementById('age-exit-btn')?.addEventListener('click', () => {
      window.location.href = 'https://www.google.com';
    });
  }

  // --- DISCREET QUICK EXIT / PRIVACY ESCAPE ---
  initQuickExit() {
    const triggerExit = () => {
      // Instantly cloak or redirect to neutral page
      document.title = "Weather Radar - Live Local Forecast";
      const favicon = document.querySelector("link[rel*='icon']");
      if (favicon) favicon.href = "https://www.google.com/favicon.ico";
      
      // Neutral disguise content
      document.body.innerHTML = `
        <div style="font-family: system-ui, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #333;">
          <h1 style="color: #2c5282;">National Weather Service - Local Forecast</h1>
          <p style="color: #666;">Current Conditions: 68°F / 20°C - Partly Cloudy. Humidity: 45%. Wind: NW at 6 mph.</p>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;">
          <p><a href="https://www.google.com" style="color: #3182ce;">Continue searching on Google</a></p>
        </div>
      `;
      window.location.replace("https://weather.com");
    };

    document.querySelectorAll('.quick-exit-btn').forEach(btn => {
      btn.addEventListener('click', triggerExit);
    });

    // Press Escape twice rapidly to trigger quick exit
    let lastEsc = 0;
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const now = Date.now();
        if (now - lastEsc < 600) {
          triggerExit();
        }
        lastEsc = now;
      }
    });
  }

  // --- CATEGORIES NAV ---
  initCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
      <button type="button" data-category-id="${cat.id}" class="category-pill whitespace-nowrap px-4 py-2.5 rounded-full border text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
        this.activeCategory === cat.id 
          ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-950/40' 
          : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
      }">
        <span>${cat.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('[data-category-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeCategory = btn.getAttribute('data-category-id');
        this.initCategories();
        this.renderCatalog();
      });
    });
  }

  // --- CATALOG & FILTERING ---
  initProductCatalog() {
    this.renderCatalog();
  }

  renderCatalog() {
    const grid = document.getElementById('products-grid');
    const countEl = document.getElementById('catalog-count');
    if (!grid) return;

    let filtered = PRODUCTS.filter(p => {
      const matchCat = this.activeCategory === 'all' || p.category === this.activeCategory;
      const q = this.searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        p.name.toLowerCase().includes(q) || 
        p.tagline.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.bestFor.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    // Sorting
    if (this.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'reviews') {
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} intimate wellness products`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-stone-400">
          <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h4 class="font-serif text-xl text-stone-200 mb-1">No products found</h4>
          <p class="text-xs text-stone-500 max-w-sm mx-auto mb-4">Try clearing filters or searching for terms like "air-pulse", "organic lube", "wand", or "dual".</p>
          <button type="button" id="reset-catalog-filters" class="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium uppercase tracking-wider">
            Reset Filters
          </button>
        </div>
      `;

      grid.querySelector('#reset-catalog-filters')?.addEventListener('click', () => {
        this.activeCategory = 'all';
        this.searchQuery = '';
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';
        this.initCategories();
        this.renderCatalog();
      });
      return;
    }

    grid.innerHTML = filtered.map(product => {
      const isFav = this.wishlist.includes(product.id);
      return `
        <div class="group product-card bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-stone-950/80">
          <!-- Card Media Wrapper -->
          <div class="relative aspect-square overflow-hidden bg-stone-950 cursor-pointer" data-view-product="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            
            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              ${product.badge ? `
                <span class="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider backdrop-blur-md ${
                  product.badgeType === 'hot' ? 'bg-rose-500/90 text-white' :
                  product.badgeType === 'luxury' ? 'bg-amber-500/90 text-stone-950' :
                  product.badgeType === 'organic' ? 'bg-emerald-600/90 text-white' :
                  'bg-stone-900/80 text-stone-200 border border-stone-700/60'
                }">
                  ${product.badge}
                </span>
              ` : ''}
              ${product.specs.waterproof ? `
                <span class="px-2 py-0.5 rounded-full text-[9px] font-medium bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 backdrop-blur-sm w-fit">
                  ${product.specs.waterproof.split(' ')[0]}
                </span>
              ` : ''}
            </div>

            <!-- Wishlist Heart Button -->
            <button type="button" data-toggle-wishlist="${product.id}" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 border border-stone-700/60 flex items-center justify-center text-stone-300 hover:text-rose-400 transition-colors z-10 backdrop-blur-sm" title="Add to Wishlist">
              <svg class="w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-stone-300'}" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>

            <!-- Quick Specs Overlay at bottom of image -->
            <div class="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-800/60 text-[10px] text-stone-300 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>${product.specs.soundLevel || 'Discreet'}</span>
              <span>•</span>
              <span>${product.specs.battery ? 'Rechargeable' : 'Skin Safe'}</span>
              <span>•</span>
              <span class="text-rose-300 font-medium">Quick Preview</span>
            </div>
          </div>

          <!-- Content Wrapper -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-stone-400 mb-1">
                <span class="uppercase tracking-wider text-[10px] text-rose-400/90 font-medium">${product.category}</span>
                <div class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-amber-300 fill-amber-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span class="font-medium text-stone-300">${product.rating}</span>
                  <span class="text-stone-500 text-[11px]">(${product.reviewCount})</span>
                </div>
              </div>

              <h3 class="font-serif text-lg text-stone-100 font-normal hover:text-rose-300 cursor-pointer transition-colors" data-view-product="${product.id}">
                ${product.name}
              </h3>
              <p class="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                ${product.tagline}
              </p>

              <!-- Color Swatches preview if available -->
              ${product.colorOptions ? `
                <div class="flex items-center gap-1.5 mt-3">
                  ${product.colorOptions.map(c => `
                    <span class="w-3.5 h-3.5 rounded-full border border-stone-700/80 shadow-inner" style="background-color: ${c.hex}" title="${c.name}"></span>
                  `).join('')}
                  <span class="text-[10px] text-stone-500 ml-1">${product.colorOptions.length} shades</span>
                </div>
              ` : ''}
            </div>

            <!-- Price and Action Row -->
            <div class="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between gap-2">
              <div>
                <div class="text-base font-serif text-amber-200 font-normal">$${product.price.toFixed(2)}</div>
                ${product.originalPrice > product.price ? `
                  <div class="text-[10px] text-stone-500 line-through">$${product.originalPrice.toFixed(2)}</div>
                ` : ''}
              </div>

              <div class="flex items-center gap-1.5">
                ${product.vibrationProfile ? `
                  <button type="button" data-test-vibe="${product.id}" class="p-2 rounded-xl bg-stone-800/80 hover:bg-rose-500/20 text-stone-300 hover:text-rose-300 border border-stone-700/60 transition-colors" title="Test Vibration Frequency">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </button>
                ` : ''}
                <button type="button" data-add-to-cart="${product.id}" class="py-2 px-3.5 rounded-xl bg-stone-800 hover:bg-rose-600 text-stone-200 hover:text-white text-xs font-medium transition-all duration-200 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind event listeners on grid
    grid.querySelectorAll('[data-view-product]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-view-product');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) this.openProductModal(prod);
      });
    });

    grid.querySelectorAll('[data-add-to-cart]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-add-to-cart');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) this.cart.addItem(prod, 1);
      });
    });

    grid.querySelectorAll('[data-toggle-wishlist]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-toggle-wishlist');
        this.toggleWishlist(id);
      });
    });

    grid.querySelectorAll('[data-test-vibe]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-test-vibe');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod && this.simulator) {
          this.simulator.setProduct(prod);
          this.simulator.start();
          document.getElementById('simulator-section')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // --- WISHLIST MANAGEMENT ---
  loadWishlist() {
    try {
      const saved = localStorage.getItem('vp_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem('vp_wishlist', JSON.stringify(this.wishlist));
    } catch (e) {}
    this.updateWishlistCount();
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.cart.showNotification(`Removed "${prod ? prod.name : 'Item'}" from saved favorites.`);
    } else {
      this.wishlist.push(productId);
      this.cart.showNotification(`Saved "${prod ? prod.name : 'Item'}" to favorites.`);
    }
    this.saveWishlist();
    this.renderCatalog();
  }

  updateWishlistCount() {
    document.querySelectorAll('.wishlist-badge').forEach(b => {
      b.textContent = this.wishlist.length;
      if (this.wishlist.length > 0) {
        b.classList.remove('hidden');
      } else {
        b.classList.add('hidden');
      }
    });
  }

  // --- INTERACTIVE SIMULATOR ---
  initSimulator() {
    this.simulator = new VibrationSimulator('simulator-canvas', 'simulator-section');

    const toggleBtn = document.getElementById('simulator-toggle-btn');
    const soundBtn = document.getElementById('simulator-sound-btn');
    const intensitySlider = document.getElementById('simulator-intensity-slider');

    toggleBtn?.addEventListener('click', () => {
      const active = this.simulator.togglePlay();
      toggleBtn.innerHTML = active 
        ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Stop Frequency`
        : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Test Sensation Pulse`;
      toggleBtn.classList.toggle('bg-rose-500', active);
      toggleBtn.classList.toggle('bg-stone-800', !active);
    });

    soundBtn?.addEventListener('click', () => {
      const isMuted = !this.simulator.toggleSound();
      soundBtn.innerHTML = isMuted
        ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg> Sound: Muted`
        : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg> Sound: Whisper Active`;
      soundBtn.classList.toggle('text-rose-400', !isMuted);
    });

    intensitySlider?.addEventListener('input', (e) => {
      this.simulator.setIntensity(e.target.value);
    });

    document.querySelectorAll('[data-pattern-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-pattern-btn]').forEach(b => b.classList.remove('bg-rose-500/20', 'border-rose-400', 'text-rose-300'));
        btn.classList.add('bg-rose-500/20', 'border-rose-400', 'text-rose-300');
        this.simulator.setPattern(btn.getAttribute('data-pattern-btn'));
      });
    });
  }

  // --- QUIZ ---
  initQuiz() {
    this.quiz = new PleasureQuiz('quiz-content-container', (product) => {
      console.log('Quiz recommendation ready:', product.name);
    });

    document.querySelectorAll('.open-quiz-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        this.quiz.reset();
        document.getElementById('quiz-modal')?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });

    document.getElementById('quiz-modal-close')?.addEventListener('click', () => {
      document.getElementById('quiz-modal')?.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // --- SEARCH AND SORT ---
  initSearchAndSort() {
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');

    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderCatalog();
    });

    sortSelect?.addEventListener('change', (e) => {
      this.sortBy = e.target.value;
      this.renderCatalog();
    });
  }

  // --- PRODUCT MODAL ---
  openProductModal(product) {
    this.currentModalProduct = product;
    const modal = document.getElementById('product-detail-modal');
    const container = document.getElementById('product-modal-content');
    if (!modal || !container) return;

    let selectedColor = product.colorOptions ? product.colorOptions[0].name : 'Standard';

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
        <!-- Gallery Column -->
        <div class="space-y-4">
          <div class="aspect-square rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl relative">
            <img id="modal-main-image" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            
            ${product.badge ? `
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider backdrop-blur-md bg-rose-500 text-white">
                ${product.badge}
              </span>
            ` : ''}
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-3">
            <button type="button" class="w-16 h-16 rounded-xl overflow-hidden border-2 border-rose-400 bg-stone-900 focus:outline-none modal-thumb" data-thumb="${product.image}">
              <img src="${product.image}" alt="View 1" class="w-full h-full object-cover">
            </button>
            ${product.secondaryImage ? `
              <button type="button" class="w-16 h-16 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 focus:outline-none modal-thumb" data-thumb="${product.secondaryImage}">
                <img src="${product.secondaryImage}" alt="View 2" class="w-full h-full object-cover">
              </button>
            ` : ''}
          </div>

          <!-- Trust Badges -->
          <div class="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] text-stone-400">
            <div class="p-2 rounded-xl bg-stone-900/60 border border-stone-800">
              <div class="font-medium text-stone-200">100% Silicone</div>
              <div>Medical Grade</div>
            </div>
            <div class="p-2 rounded-xl bg-stone-900/60 border border-stone-800">
              <div class="font-medium text-stone-200">${product.specs.soundLevel || '< 35 dB'}</div>
              <div>Whisper Silent</div>
            </div>
            <div class="p-2 rounded-xl bg-stone-900/60 border border-stone-800">
              <div class="font-medium text-stone-200">2-Year</div>
              <div>Warranty Care</div>
            </div>
          </div>
        </div>

        <!-- Details Column -->
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span class="text-rose-400 uppercase tracking-wider font-medium">${product.category}</span>
              <div class="flex items-center gap-1 text-amber-300">
                <span>★</span>
                <span class="font-medium text-stone-200">${product.rating}</span>
                <span class="text-stone-500">(${product.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h2 class="font-serif text-3xl text-stone-100 font-normal mb-2">${product.name}</h2>
            <p class="text-sm text-rose-300 font-medium mb-4">${product.tagline}</p>

            <div class="flex items-baseline gap-3 mb-6">
              <span class="text-3xl font-serif text-amber-200">$${product.price.toFixed(2)}</span>
              ${product.originalPrice > product.price ? `
                <span class="text-sm text-stone-500 line-through">$${product.originalPrice.toFixed(2)}</span>
                <span class="text-xs text-rose-400 font-medium bg-rose-950/40 border border-rose-900/50 px-2 py-0.5 rounded-full">Save $${(product.originalPrice - product.price).toFixed(2)}</span>
              ` : ''}
            </div>

            <p class="text-xs text-stone-300 leading-relaxed mb-6">
              ${product.description}
            </p>

            <!-- Color Selection -->
            ${product.colorOptions ? `
              <div class="mb-6">
                <label class="block text-xs font-medium text-stone-300 mb-2">
                  Select Shade: <span id="modal-selected-color-label" class="text-rose-300">${selectedColor}</span>
                </label>
                <div class="flex gap-2.5">
                  ${product.colorOptions.map((c, i) => `
                    <button type="button" data-modal-color="${c.name}" class="w-8 h-8 rounded-full border-2 transition-transform ${i === 0 ? 'border-rose-400 scale-110' : 'border-stone-700 hover:border-stone-500'} flex items-center justify-center" style="background-color: ${c.hex}">
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Key Features -->
            <div class="mb-6 space-y-2 text-xs text-stone-300">
              ${product.features.map(f => `
                <div class="flex items-start gap-2.5">
                  <span class="text-rose-400 mt-0.5">✓</span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>

            <!-- Specs Grid -->
            <div class="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs space-y-2 mb-6">
              <div class="text-xs font-medium uppercase tracking-wider text-stone-400 mb-2">Technical Specifications</div>
              ${Object.entries(product.specs).map(([key, val]) => `
                <div class="flex justify-between border-b border-stone-800/60 pb-1.5 last:border-0 last:pb-0">
                  <span class="text-stone-400 capitalize">${key.replace(/([A-Z])/g, ' $1')}</span>
                  <span class="text-stone-200 font-medium text-right max-w-[65%]">${val}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Purchase Row -->
          <div class="pt-4 border-t border-stone-800 space-y-3">
            <div class="flex gap-3">
              <div class="flex items-center border border-stone-700 rounded-xl bg-stone-900">
                <button type="button" id="modal-qty-minus" class="px-3.5 py-3 text-stone-300 hover:text-white">-</button>
                <span id="modal-qty-display" class="px-3 text-sm font-medium text-stone-100">1</span>
                <button type="button" id="modal-qty-plus" class="px-3.5 py-3 text-stone-300 hover:text-white">+</button>
              </div>

              <button type="button" id="modal-add-cart-btn" class="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-lg shadow-rose-950/40 flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Add to Bag • $${product.price.toFixed(2)}
              </button>
            </div>

            <!-- Discreet Shipping Note -->
            <div class="flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
              <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Discreet plain packaging guaranteed • Return label: "VP Logistics"</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind Modal interactions
    let qty = 1;
    const qtyDisplay = container.querySelector('#modal-qty-display');
    container.querySelector('#modal-qty-minus')?.addEventListener('click', () => {
      if (qty > 1) {
        qty--;
        if (qtyDisplay) qtyDisplay.textContent = qty;
      }
    });
    container.querySelector('#modal-qty-plus')?.addEventListener('click', () => {
      qty++;
      if (qtyDisplay) qtyDisplay.textContent = qty;
    });

    container.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        container.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('border-rose-400'));
        thumb.classList.add('border-rose-400');
        const mainImg = container.querySelector('#modal-main-image');
        if (mainImg) mainImg.src = thumb.getAttribute('data-thumb');
      });
    });

    container.querySelectorAll('[data-modal-color]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedColor = btn.getAttribute('data-modal-color');
        container.querySelectorAll('[data-modal-color]').forEach(b => {
          b.classList.remove('border-rose-400', 'scale-110');
          b.classList.add('border-stone-700');
        });
        btn.classList.add('border-rose-400', 'scale-110');
        const label = container.querySelector('#modal-selected-color-label');
        if (label) label.textContent = selectedColor;
      });
    });

    container.querySelector('#modal-add-cart-btn')?.addEventListener('click', () => {
      this.cart.addItem(product, qty, selectedColor);
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  initModals() {
    document.getElementById('product-modal-close')?.addEventListener('click', () => {
      document.getElementById('product-detail-modal')?.classList.add('hidden');
      document.body.style.overflow = '';
    });

    document.getElementById('product-detail-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'product-detail-modal') {
        document.getElementById('product-detail-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // --- DISCREET CHECKOUT MODAL FLOW ---
  initCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (!modal) return;

    document.getElementById('checkout-modal-close')?.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const container = document.getElementById('checkout-modal-content');
    if (!modal || !container) return;

    const items = this.cart.items;
    const subtotal = this.cart.getSubtotal();
    const discount = this.cart.getDiscountAmount();
    const shipping = this.cart.getShippingCost();
    const total = this.cart.getTotal();

    container.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
          <div>
            <h3 class="font-serif text-2xl text-stone-100">Discreet Checkout</h3>
            <p class="text-xs text-stone-400">100% Confidential • End-to-End Encrypted</p>
          </div>
          <div class="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-900/40">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            SSL 256-Bit Protection
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Form Steps (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Step 1: Shipping & Discreet Recipient -->
            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4">
              <div class="flex items-center gap-2 text-sm font-medium text-stone-200">
                <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">1</span>
                Shipping Address
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">First Name (or Initial)</label>
                  <input type="text" id="chk-fname" value="Alex" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">Last Name</label>
                  <input type="text" id="chk-lname" value="Taylor" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
              </div>

              <div>
                <label class="block text-[11px] text-stone-400 mb-1">Street Address / Apt / Suite / PO Box</label>
                <input type="text" id="chk-addr" value="742 Evergreen Terrace, Apt 4B" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">City</label>
                  <input type="text" id="chk-city" value="Springfield" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">State / Region</label>
                  <input type="text" id="chk-state" value="OR" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">Postal Code</label>
                  <input type="text" id="chk-zip" value="97477" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
              </div>
            </div>

            <!-- Step 2: Packaging Option -->
            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3">
              <div class="flex items-center gap-2 text-sm font-medium text-stone-200">
                <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">2</span>
                Packaging Stealth Level
              </div>

              <div class="space-y-2">
                <label class="p-3 rounded-xl border border-rose-500/50 bg-rose-950/20 flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="packaging" checked class="mt-1 text-rose-500">
                  <div>
                    <div class="text-xs font-medium text-stone-200 flex items-center gap-2">
                      Standard Plain Brown Corrugated Box (Free)
                      <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Included</span>
                    </div>
                    <div class="text-[11px] text-stone-400 mt-0.5">Completely plain carton with tamper-evident Kraft tape. Return address reads: <em>"VP Logistics Inc."</em></div>
                  </div>
                </label>

                <label class="p-3 rounded-xl border border-stone-800 bg-stone-950/40 flex items-start gap-3 cursor-pointer hover:border-stone-700">
                  <input type="radio" name="packaging" class="mt-1 text-rose-500">
                  <div>
                    <div class="text-xs font-medium text-stone-300">Ultra-Stealth Double Bagged Mailer (Free)</div>
                    <div class="text-[11px] text-stone-400 mt-0.5">Heavy-duty opaque polybag inside neutral cardboard with shock absorption.</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Step 3: Payment Simulation -->
            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-sm font-medium text-stone-200">
                  <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">3</span>
                  Discreet Payment Method
                </div>
                <div class="flex gap-1.5 opacity-70">
                  <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-300">Visa</span>
                  <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-300">MC</span>
                  <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-300">Amex</span>
                </div>
              </div>

              <div>
                <label class="block text-[11px] text-stone-400 mb-1">Card Number</label>
                <input type="text" id="chk-card" value="•••• •••• •••• 4242" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">Expiration (MM/YY)</label>
                  <input type="text" id="chk-exp" value="12/28" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
                <div>
                  <label class="block text-[11px] text-stone-400 mb-1">CVV Security Code</label>
                  <input type="text" id="chk-cvv" value="882" class="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-rose-400">
                </div>
              </div>

              <!-- Statement Appearance Notice -->
              <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 flex items-start gap-2.5">
                <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <div>
                  <strong>Card Statement Notice:</strong> This transaction will appear on your bank statement strictly as <code class="bg-black/40 px-1.5 py-0.5 rounded font-mono text-amber-100 font-bold">${STORE_CONFIG.discreetBillingName}</code>.
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            <div class="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4 sticky top-6">
              <h4 class="font-serif text-lg text-stone-200">Order Summary (${items.length} items)</h4>

              <div class="max-h-56 overflow-y-auto divide-y divide-stone-800/80 pr-1">
                ${items.map(it => `
                  <div class="py-2.5 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg overflow-hidden bg-stone-800 shrink-0">
                        <img src="${it.image}" alt="${it.name}" class="w-full h-full object-cover">
                      </div>
                      <div>
                        <div class="font-medium text-stone-200 truncate max-w-[140px]">${it.name}</div>
                        <div class="text-[10px] text-stone-400">Qty: ${it.quantity} • ${it.color}</div>
                      </div>
                    </div>
                    <div class="text-right font-medium text-amber-200 font-serif">
                      $${(it.price * it.quantity).toFixed(2)}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="space-y-1.5 text-xs text-stone-400 pt-3 border-t border-stone-800">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span class="text-stone-200">$${subtotal.toFixed(2)}</span>
                </div>
                ${discount > 0 ? `
                  <div class="flex justify-between text-rose-400">
                    <span>Discount</span>
                    <span>-$${discount.toFixed(2)}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between">
                  <span>Discreet Shipping</span>
                  <span class="text-stone-200">${shipping === 0 ? '<span class="text-emerald-400 font-medium">FREE</span>' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div class="flex justify-between items-baseline pt-2 border-t border-stone-800 text-stone-100 font-medium">
                  <span class="text-sm">Total Due</span>
                  <span class="text-2xl font-serif text-amber-200">$${total.toFixed(2)}</span>
                </div>
              </div>

              <button type="button" id="chk-submit-btn" class="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-xl shadow-rose-950/60 flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Place Confidential Order ($${total.toFixed(2)})
              </button>

              <div class="text-center text-[10px] text-stone-500">
                🔒 256-bit encrypted checkout. Your intimate privacy is our primary covenant.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#chk-submit-btn')?.addEventListener('click', () => {
      this.completeOrder(total);
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  completeOrder(total) {
    const container = document.getElementById('checkout-modal-content');
    if (!container) return;

    const orderNumber = `VP-${Math.floor(100000 + Math.random() * 900000)}`;
    const trackingId = `TRK-${Math.floor(10000000 + Math.random() * 90000000)}`;

    // Clear cart
    this.cart.clear();

    container.innerHTML = `
      <div class="p-8 md:p-12 text-center animate-fadeIn max-w-xl mx-auto">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </div>

        <span class="text-xs uppercase tracking-wider text-rose-400 font-medium">Order Confirmed</span>
        <h3 class="font-serif text-3xl text-stone-100 font-normal mt-1 mb-2">Thank You For Your Order</h3>
        <p class="text-xs text-stone-400 mb-6">Your order has been safely placed. We are preparing your plain, discreet package now.</p>

        <div class="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 text-left text-xs space-y-3 mb-6 shadow-xl">
          <div class="flex justify-between border-b border-stone-800 pb-2">
            <span class="text-stone-400">Order Reference</span>
            <span class="font-mono text-stone-200 font-medium">${orderNumber}</span>
          </div>
          <div class="flex justify-between border-b border-stone-800 pb-2">
            <span class="text-stone-400">Discreet Tracking ID</span>
            <span class="font-mono text-stone-200 font-medium">${trackingId}</span>
          </div>
          <div class="flex justify-between border-b border-stone-800 pb-2">
            <span class="text-stone-400">Card Statement Line</span>
            <span class="font-mono text-amber-200 font-medium">${STORE_CONFIG.discreetBillingName}</span>
          </div>
          <div class="flex justify-between border-b border-stone-800 pb-2">
            <span class="text-stone-400">Estimated Delivery</span>
            <span class="text-stone-200 font-medium">2 - 3 Business Days (Discreet Express)</span>
          </div>
          <div class="flex justify-between pt-1">
            <span class="text-stone-400">Total Charged</span>
            <span class="text-base font-serif text-amber-200 font-medium">$${total.toFixed(2)}</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-stone-900/50 border border-stone-800/80 text-[11px] text-stone-400 text-left mb-6">
          <div class="font-medium text-stone-300 mb-1">📦 What happens next:</div>
          <ul class="list-disc list-inside space-y-1">
            <li>Packaged in an unbranded, generic brown carton sealed with tamper tape.</li>
            <li>Sender label shows strictly "VP Logistics".</li>
            <li>Delivered straight to your doorstep without signature required.</li>
          </ul>
        </div>

        <button type="button" id="order-done-btn" class="w-full py-3 px-6 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs uppercase tracking-wider transition-colors">
          Return to Storefront
        </button>
      </div>
    `;

    container.querySelector('#order-done-btn')?.addEventListener('click', () => {
      document.getElementById('checkout-modal')?.classList.add('hidden');
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- EDUCATIONAL ARTICLES ---
  initEducationalArticles() {
    const container = document.getElementById('articles-container');
    if (!container) return;

    container.innerHTML = EDUCATIONAL_ARTICLES.map(art => `
      <div class="bg-stone-900/60 border border-stone-800/80 rounded-2xl overflow-hidden hover:border-stone-700 transition-all duration-300 group cursor-pointer flex flex-col" data-view-article="${art.id}">
        <div class="aspect-video overflow-hidden bg-stone-950">
          <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-wider mb-2">
              <span class="text-rose-400 font-medium">${art.category}</span>
              <span>•</span>
              <span>${art.readTime}</span>
            </div>
            <h4 class="font-serif text-xl text-stone-100 font-normal group-hover:text-rose-300 transition-colors leading-snug">
              ${art.title}
            </h4>
            <p class="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
              ${art.excerpt}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-800/80 text-xs text-rose-400 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Read Clinical Guide →
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-view-article]').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-view-article');
        const art = EDUCATIONAL_ARTICLES.find(a => a.id === id);
        if (art) this.openArticleModal(art);
      });
    });
  }

  openArticleModal(article) {
    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('generic-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="p-6 md:p-10 max-w-2xl mx-auto">
        <div class="aspect-video rounded-2xl overflow-hidden mb-6 bg-stone-900 border border-stone-800">
          <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
        </div>
        <div class="flex items-center gap-2 text-xs text-stone-400 uppercase tracking-wider mb-2">
          <span class="text-rose-400 font-medium">${article.category}</span>
          <span>•</span>
          <span>${article.readTime}</span>
          <span>•</span>
          <span>Medically Reviewed</span>
        </div>
        <h2 class="font-serif text-3xl text-stone-100 font-normal mb-4">${article.title}</h2>
        <div class="prose prose-invert text-stone-300 text-sm leading-relaxed space-y-4">
          <p class="text-base text-stone-200 font-serif italic">${article.excerpt}</p>
          <p>${article.content}</p>
          <p>Scientific research into erotic arousal has confirmed that pleasure devices significantly improve pelvic floor microcirculation, relieve systemic stress via endorphin and oxytocin release, and promote restorative sleep.</p>
          <h4 class="font-serif text-lg text-stone-100 pt-2">Tips from Certified Intimacy Counselors:</h4>
          <ul class="list-disc list-inside space-y-1.5 text-xs text-stone-400">
            <li>Always apply a generous dollop of body-safe water-based lubricant like The Velvet Glide Serum.</li>
            <li>Begin at the lowest decibel speed to allow natural pelvic blood flow to elevate before escalating intensity.</li>
            <li>Clean thoroughly after each session with an alcohol-free antimicrobial mist.</li>
          </ul>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    document.getElementById('generic-modal-close')?.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // --- TESTIMONIALS ---
  initTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    container.innerHTML = TESTIMONIALS.map(t => `
      <div class="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1 text-amber-300 mb-3 text-sm">
            ${'★'.repeat(t.rating)}
          </div>
          <h5 class="font-serif text-base text-stone-100 font-normal mb-2">"${t.title}"</h5>
          <p class="text-xs text-stone-300 leading-relaxed italic">"${t.comment}"</p>
        </div>
        <div class="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
          <div>
            <div class="font-medium text-stone-200 flex items-center gap-1.5">
              ${t.name}
              ${t.verified ? `<span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded">Verified Customer</span>` : ''}
            </div>
            <div class="text-[11px] text-stone-500">Purchased ${t.product}</div>
          </div>
          <div class="text-[11px] text-stone-500">${t.date}</div>
        </div>
      </div>
    `).join('');
  }

  // --- FAQ ACCORDION ---
  initFaq() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = FAQS.map((faq, idx) => `
      <div class="border border-stone-800 rounded-2xl bg-stone-900/40 overflow-hidden">
        <button type="button" data-faq-toggle="${idx}" class="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-lg text-stone-200 hover:text-rose-300 transition-colors">
          <span>${faq.q}</span>
          <svg class="w-5 h-5 text-stone-400 transform transition-transform duration-200 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div data-faq-content="${idx}" class="hidden p-5 pt-0 text-xs text-stone-400 leading-relaxed border-t border-stone-800/40">
          ${faq.a}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-faq-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-faq-toggle');
        const content = container.querySelector(`[data-faq-content="${idx}"]`);
        const icon = btn.querySelector('.faq-icon');
        const isClosed = content.classList.contains('hidden');

        // Close all
        container.querySelectorAll('[data-faq-content]').forEach(c => c.classList.add('hidden'));
        container.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

        if (isClosed) {
          content.classList.remove('hidden');
          icon.classList.add('rotate-180');
        }
      });
    });
  }

  // --- NEWSLETTER ---
  initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        this.cart.showNotification("Welcome to the Velvet Circle! Promo 'PLEASURE15' unlocked.");
        input.value = '';
      }
    });
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.velvetApp = new VelvetApp();
});

