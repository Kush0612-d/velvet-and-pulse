// VELVET & PULSE - Shopping Cart & Discreet Checkout Module
import { PRODUCTS, STORE_CONFIG, PROMO_CODES } from './data.js';

export class ShoppingCart {
  constructor() {
    this.items = [];
    this.appliedPromo = null;
    this.promoDiscount = 0;
    this.load();
    this.bindEvents();
  }

  load() {
    try {
      const saved = localStorage.getItem('vp_cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
      const savedPromo = localStorage.getItem('vp_promo');
      if (savedPromo && PROMO_CODES[savedPromo]) {
        this.appliedPromo = savedPromo;
        this.promoDiscount = PROMO_CODES[savedPromo].discount;
      }
    } catch (e) {
      this.items = [];
    }
  }

  save() {
    try {
      localStorage.setItem('vp_cart', JSON.stringify(this.items));
      if (this.appliedPromo) {
        localStorage.setItem('vp_promo', this.appliedPromo);
      } else {
        localStorage.removeItem('vp_promo');
      }
    } catch (e) {}
    this.updateBadges();
  }

  addItem(product, quantity = 1, selectedColor = null) {
    const existingIndex = this.items.findIndex(
      item => item.id === product.id && item.color === (selectedColor || (product.colorOptions ? product.colorOptions[0]?.name : 'Standard'))
    );

    const colorName = selectedColor || (product.colorOptions ? product.colorOptions[0]?.name : 'Standard');

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        color: colorName,
        quantity: quantity,
        category: product.category
      });
    }

    this.save();
    this.renderDrawer();
    this.openDrawer();
    this.showNotification(`Added "${product.name}" to your discreet bag.`);
  }

  removeItem(index) {
    if (this.items[index]) {
      this.items.splice(index, 1);
      this.save();
      this.renderDrawer();
    }
  }

  updateQuantity(index, newQty) {
    if (newQty <= 0) {
      this.removeItem(index);
    } else {
      this.items[index].quantity = newQty;
      this.save();
      this.renderDrawer();
    }
  }

  clear() {
    this.items = [];
    this.appliedPromo = null;
    this.promoDiscount = 0;
    this.save();
    this.renderDrawer();
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getDiscountAmount() {
    return this.getSubtotal() * this.promoDiscount;
  }

  getShippingCost() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= STORE_CONFIG.freeShippingThreshold ? 0 : 7.95;
  }

  getTotal() {
    const sub = this.getSubtotal();
    if (sub === 0) return 0;
    const disc = this.getDiscountAmount();
    const ship = this.getShippingCost();
    return Math.max(0, sub - disc + ship);
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  applyPromo(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (PROMO_CODES[cleanCode]) {
      this.appliedPromo = cleanCode;
      this.promoDiscount = PROMO_CODES[cleanCode].discount;
      this.save();
      this.renderDrawer();
      return { success: true, message: `Promo "${cleanCode}" applied: ${PROMO_CODES[cleanCode].description}` };
    }
    return { success: false, message: "Invalid promotional code. Try 'PLEASURE15' for 15% off." };
  }

  removePromo() {
    this.appliedPromo = null;
    this.promoDiscount = 0;
    this.save();
    this.renderDrawer();
  }

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('translate-x-full');
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  updateBadges() {
    const count = this.getItemCount();
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    });
  }

  renderDrawer() {
    const container = document.getElementById('cart-items-container');
    const footer = document.getElementById('cart-footer-container');
    const freeShippingEl = document.getElementById('cart-free-shipping');

    if (!container || !footer) return;

    this.updateBadges();

    const subtotal = this.getSubtotal();
    const threshold = STORE_CONFIG.freeShippingThreshold;

    // Free shipping tracker
    if (freeShippingEl) {
      if (subtotal === 0) {
        freeShippingEl.innerHTML = `<span class="text-stone-400 text-xs">Free discreet express shipping over $${threshold.toFixed(2)}</span>`;
      } else if (subtotal >= threshold) {
        freeShippingEl.innerHTML = `
          <div class="flex items-center gap-2 text-emerald-400 text-xs font-medium">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>You've unlocked <strong>FREE Discreet Express Shipping</strong>!</span>
          </div>
          <div class="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div class="bg-emerald-400 h-full w-full"></div>
          </div>
        `;
      } else {
        const remaining = (threshold - subtotal).toFixed(2);
        const percent = Math.min(100, Math.round((subtotal / threshold) * 100));
        freeShippingEl.innerHTML = `
          <div class="flex justify-between items-center text-xs text-stone-300">
            <span>Add <strong class="text-rose-400">$${remaining}</strong> for <strong>Free Discreet Shipping</strong></span>
            <span class="text-stone-400">${percent}%</span>
          </div>
          <div class="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div class="bg-gradient-to-r from-rose-400 to-amber-300 h-full transition-all duration-300" style="width: ${percent}%"></div>
          </div>
        `;
      }
    }

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="py-16 text-center text-stone-400 px-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <h4 class="font-serif text-xl text-stone-200 mb-1">Your bag is empty</h4>
          <p class="text-xs text-stone-400 mb-6">Explore our body-safe collections and find your personal resonance.</p>
          <button type="button" id="cart-start-shopping" class="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium uppercase tracking-wider transition-colors">
            Explore All Products
          </button>
        </div>
      `;

      container.querySelector('#cart-start-shopping')?.addEventListener('click', () => {
        this.closeDrawer();
        document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
      });

      footer.innerHTML = '';
      return;
    }

    // Render Items
    container.innerHTML = `
      <div class="divide-y divide-stone-800/80">
        ${this.items.map((item, idx) => `
          <div class="py-4 flex gap-4 items-center">
            <div class="w-20 h-20 rounded-xl overflow-hidden bg-stone-900 border border-stone-800 shrink-0">
              <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start gap-2">
                <h5 class="text-sm font-medium text-stone-200 truncate">${item.name}</h5>
                <button type="button" data-remove-item="${idx}" class="text-stone-500 hover:text-rose-400 transition-colors p-1" title="Remove item">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div class="text-xs text-stone-400 mt-0.5">Color: ${item.color}</div>
              
              <div class="flex justify-between items-center mt-3">
                <div class="flex items-center border border-stone-800 rounded-lg bg-stone-900">
                  <button type="button" data-qty-dec="${idx}" class="px-2 py-1 text-stone-400 hover:text-stone-200 text-xs transition-colors">-</button>
                  <span class="px-2 text-xs font-medium text-stone-200">${item.quantity}</span>
                  <button type="button" data-qty-inc="${idx}" class="px-2 py-1 text-stone-400 hover:text-stone-200 text-xs transition-colors">+</button>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-amber-200 font-serif">$${(item.price * item.quantity).toFixed(2)}</div>
                  ${item.quantity > 1 ? `<div class="text-[10px] text-stone-500">$${item.price.toFixed(2)} each</div>` : ''}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Quick Add-On Upsell -->
      <div class="mt-4 p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-stone-800 overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1608248597359-33560f7813a3?auto=format&fit=crop&w=150&q=80" alt="Lube" class="w-full h-full object-cover">
          </div>
          <div>
            <div class="text-xs font-medium text-stone-200">The Velvet Glide Serum</div>
            <div class="text-[11px] text-stone-400">100ml Organic Aloe • $24.00</div>
          </div>
        </div>
        <button type="button" id="cart-quick-add-lube" class="text-xs py-1.5 px-3 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white transition-all font-medium shrink-0">
          + Add
        </button>
      </div>
    `;

    // Render Footer
    const discountAmt = this.getDiscountAmount();
    const shipping = this.getShippingCost();
    const total = this.getTotal();

    footer.innerHTML = `
      <div class="space-y-3 pt-4 border-t border-stone-800">
        <!-- Promo Code Input -->
        <div class="flex gap-2">
          <input type="text" id="promo-input" placeholder="Promo code (e.g. PLEASURE15)" value="${this.appliedPromo || ''}" class="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-rose-400 uppercase">
          <button type="button" id="apply-promo-btn" class="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors">
            ${this.appliedPromo ? 'Applied' : 'Apply'}
          </button>
        </div>
        ${this.appliedPromo ? `
          <div class="flex items-center justify-between text-xs text-rose-400 bg-rose-950/30 px-3 py-1.5 rounded-lg border border-rose-900/40">
            <span>Coupon "${this.appliedPromo}" applied</span>
            <button type="button" id="remove-promo-btn" class="text-stone-400 hover:text-stone-200 underline text-[11px]">Remove</button>
          </div>
        ` : ''}

        <!-- Breakdown -->
        <div class="space-y-1.5 text-xs text-stone-400 pt-2">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span class="text-stone-200 font-medium">$${subtotal.toFixed(2)}</span>
          </div>
          ${discountAmt > 0 ? `
            <div class="flex justify-between text-rose-400">
              <span>Discount</span>
              <span>-$${discountAmt.toFixed(2)}</span>
            </div>
          ` : ''}
          <div class="flex justify-between">
            <span class="flex items-center gap-1.5">
              Discreet Shipping
              <span class="text-[10px] bg-stone-800 px-1.5 py-0.5 rounded text-stone-400">Tracked</span>
            </span>
            <span class="text-stone-200">${shipping === 0 ? '<span class="text-emerald-400 font-medium">FREE</span>' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div class="flex justify-between items-baseline pt-2 border-t border-stone-800 text-stone-100 font-medium">
            <span class="text-sm">Estimated Total</span>
            <span class="text-lg font-serif text-amber-200">$${total.toFixed(2)}</span>
          </div>
        </div>

        <!-- Discreet Billing Guarantee -->
        <div class="p-3 bg-stone-900/80 rounded-xl border border-stone-800/80 text-[11px] text-stone-400 space-y-1">
          <div class="flex items-center gap-1.5 font-medium text-stone-300">
            <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Discreet Billing & Packaging Guarantee
          </div>
          <div>Statement reads: <strong class="text-stone-200">${STORE_CONFIG.discreetBillingName}</strong></div>
          <div class="text-[10px] text-stone-500">Zero brand names or toy references appear on your package exterior or bank log.</div>
        </div>

        <!-- Checkout Button -->
        <button type="button" id="open-checkout-modal-btn" class="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          Proceed to Discreet Checkout
        </button>
      </div>
    `;

    // Bind footer actions
    container.querySelectorAll('[data-remove-item]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-remove-item'), 10);
        this.removeItem(idx);
      });
    });

    container.querySelectorAll('[data-qty-dec]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-qty-dec'), 10);
        this.updateQuantity(idx, this.items[idx].quantity - 1);
      });
    });

    container.querySelectorAll('[data-qty-inc]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-qty-inc'), 10);
        this.updateQuantity(idx, this.items[idx].quantity + 1);
      });
    });

    container.querySelector('#cart-quick-add-lube')?.addEventListener('click', () => {
      const lube = PRODUCTS.find(p => p.id === 'velvet-glide-lube');
      if (lube) this.addItem(lube, 1);
    });

    footer.querySelector('#apply-promo-btn')?.addEventListener('click', () => {
      const input = footer.querySelector('#promo-input');
      if (input) {
        const res = this.applyPromo(input.value);
        this.showNotification(res.message);
      }
    });

    footer.querySelector('#remove-promo-btn')?.addEventListener('click', () => {
      this.removePromo();
      this.showNotification("Promotional discount removed.");
    });

    footer.querySelector('#open-checkout-modal-btn')?.addEventListener('click', () => {
      this.closeDrawer();
      window.dispatchEvent(new CustomEvent('velvet:open-checkout'));
    });
  }

  showNotification(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 z-50 bg-stone-900 border border-stone-700 text-stone-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs animate-slideUp';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-rose-400"></span>
      <span>${msg}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'transition-opacity');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  bindEvents() {
    window.addEventListener('velvet:add-cart', (e) => {
      if (e.detail && e.detail.product) {
        this.addItem(e.detail.product, e.detail.quantity || 1, e.detail.color || null);
      }
    });

    document.querySelectorAll('.open-cart-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        this.renderDrawer();
        this.openDrawer();
      });
    });

    document.getElementById('cart-close-btn')?.addEventListener('click', () => this.closeDrawer());
    document.getElementById('cart-backdrop')?.addEventListener('click', () => this.closeDrawer());
  }
}

