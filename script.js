/* ==========================================
   1. بيانات الدراجات النارية
========================================== */

const motorcycles = [
  {
    id: 1,
    name: "c50",
    category: "Naked",
    price: 10000,
    image: "https://www.moteur.ma/storage/media/images/models/nouvelle-c100-980.jpg",
    description: "دراجة رياضية بتصميم عصري"
  },
  {
    id: 2,
    name: "Yamaha R7",
    category: "Sport",
    price: 195000,
    image: "https://www.motoplanete.com/yamaha/zoom-700px/11723-R7-700-2026-1000px.webp",
    description: "أداء رياضي قوي وسرعة عالية"
  },
  {
    id: 3,
    name: "Kawasaki Ninja 650",
    category: "Sport",
    price: 95000,
    image: "https://www.barracudamoto.fr/media/wysiwyg/categorie/ninja650-2017-3-4.jpg",
    description: "مناسبة للمدينة والطرق الطويلة"
  },
  {
    id: 4,
    name: "Kawasaki Z900",
    category: "Naked",
    price: 125000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrncz0aa7KwxT3KfR0uC0xdVJiQh58OqqaOqJqdpZY49K-1FK3qRWAlQ&s=10",
    description: "قوة وتصميم جريء"
  },
  {
    id: 5,
    name: "Honda CBR650R",
    category: "Sport",
    price: 110000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLulLdfMgMrdonl5Ny4QSx5kdwnuIGbyViACfMYd9QrFHT5y1nzXImvJml&s=10",
    description: "دراجة رياضية مريحة وعملية"
  },
  {
    id: 6,
    name: "Honda Africa Twin",
    category: "Adventure",
    price: 165000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w432hqdBrvlbQ_oHu-_586i6-PwBrpPk6LVNVaxuIA&s=10",
    description: "للمغامرات والطرق الوعرة"
  },
  {
    id: 7,
    name: "BMW S1000RR",
    category: "Sport",
    price: 230000,
    image: "https://www.lerepairedesmotards.com/img/technique/fiches/tech-bmw-s1000-rr-2019_hd.jpg",
    description: "تقنيات متطورة وأداء احترافي"
  },
  {
    id: 8,
    name: "BMW R1250 GS",
    category: "Adventure",
    price: 220000,
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfw21Gi_KTIbv21cpYDM5jOV6g3E7pzqXZma91u4OYAkKaoIXxaS9XCF6JljMuFqCXlMufjD6IwSdHQyH3SkD_KJpc3MUg7QTr92kmmdlaNZ9T-4l72866Rsk04uiDwinb4xzqc?key=3ylV1t78nNXWWaIovU6WLQ ",
    description:"رحلات طويلة وراحة ممتازة"
  },
  {
    id: 9,
    name: "Ducati Panigale V4",
    category: "Sport",
    price: 280000,
    image: "https://www.ducatiworcester.co.uk/img/ducati/2026-ducati-panigale-v4-lamborghini-lg.jpg",
    description: "تصميم إيطالي وأداء مميز"
  },
  {
    id: 10,
    name: "Ducati Monster",
    category: "Naked",
    price: 135000,
    image: "https://cdpcdn.dx1app.com/products/USA/DU/2027/MC/SPORT/MONSTER_-/50/SPORT_LIVERY/2000000023_480px.jpg",
    description: "خفيفة وعصرية"
  },
  {
    id: 11,
    name: "KTM Duke 390",
    category: "Naked",
    price: 58000,
    image: "https://www.ktm.ma/wp-content/uploads/2025/08/560530_MY24-KTM-390-DUKE_Orange_EU_Front-Right_Studio_GLOBAL_EUROPE_03_STUDIO_EU_GLOBAL.jpg",
    description: "ممتعة في القيادة داخل المدينة"
  },
  {
    id: 12,
    name: "KTM Adventure 890",
    category: "Adventure",
    price: 120000,
    image: "https://www.ktm.ma/wp-content/uploads/2025/08/663132_MY25-KTM-390-Adventure-R-White-45-right_04_STUDIO_EUROPE-_-GLOBAL.jpg",
    description: "مناسبة للمغامرات والسفر"
  },
  {
    id: 13,
    name: "Suzuki GSX-R750",
    category: "Sport",
    price: 115000,
    image: "https://www.lerepairedesmotards.com/img/actu/2020/nouveaute/coloris-suzuki-gsx-s-750-jaune_hd.jpg",
    description: "دراجة رياضية كلاسيكية"
  },
  {
    id: 14,
    name: "Suzuki V-Strom 650",
    category: "Adventure",
    price: 85000,
    image: "https://www.suzuki.ca/wp-content/uploads/DL650XAM4_JWN_Right.jpg",
    description: "عملية للرحلات اليومية"
  },
  {
    id: 15,
    name: "Royal Enfield Classic 350",
    category: "Classic",
    price: 42000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FOx8Nzy6919qe6nDlojh-EpirWztlXaqR8otQCk1nQ&s=10",
    description: "مظهر كلاسيكي وأنيق"
  },
  
  {
    id: 16,
    name: "Honda Gold Wing",
    category: "touring",
    price: 360000,
    image: "https://www.lerepairedesmotards.com/img/dossiers/motos/generation-honda-goldwing-1200_hd.jpg",
    description: "راحة وتجهيزات للرحلات الطويلة.",
    badge: "فاخرة"
  }, 
  {
    id: 17,
    name: "yamaha Xmax",
    category: "scooter",
    price: 250000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bDMhTVhRbPvoe3M2TeW60voYcq-ucbNGWnHXLCkpfRU4QMaMbIpxPfY&s=10",
    description: "راحة وتجهيزات للرحلات الطويلة.",
    badge: "فاخرة"
  }, 
  {
    id: 18,
    name: "honda scooter",
    category: "scooter",
    price: 200000,
    image: "https://moto-station.com/wp-content/uploads/2026/01/07/HONDA_Forza-750_2025-scaled.jpg",
    description: "راحة وتجهيزات للرحلات الطويلة.",
    badge: "فاخرة"
  },
  {
    id: 19,
    name: "honda cruiser bike",
    category: "cruiser",
    price: 30000,
    image: "https://cdn.bikedekho.com/processedimages/honda/rebel-300/source/rebel-3006a8d8abcbdbf9.jpg",
    description: "راحة وتجهيزات للرحلات الطويلة.",
    badge: "فاخرة"
  },
  {
    id: 20,
    name: "BMW cruiser bike",
    category: "cruiser",
    price: 12000,
    image: "https://b1944490.assetcdn.net/2.0/1944490/wp-content/uploads/sites/46/2016/04/2001-BMW-R1200Cc.jpg?lossy=2&strip=1&webp=1",
    description: "راحة وتجهيزات للرحلات الطويلة.",
    badge: "فاخرة"
  }
];

/* =========================================
   2. تجهيز السلة وحفظها
========================================= */

let cart = [];

try {
  const savedCart = localStorage.getItem("motoProCartV1");
  cart = savedCart ? JSON.parse(savedCart) : [];

  if (!Array.isArray(cart)) {
    cart = [];
  }
} catch (error) {
  cart = [];
}

function saveCart() {
  localStorage.setItem("motoProCartV1", JSON.stringify(cart));
}

function formatPrice(price) {
  return new Intl.NumberFormat("fr-MA").format(price) + "DH";
}
/* =========================================
   3. عناصر الصفحة
========================================= */

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

const cartButton = document.getElementById("openCart");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItems =document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");

const closeCart = document.getElementById("closeCart");
const closeCheckout = document.getElementById("closeCheckout");
const continueShopping = document.getElementById("continueShopping");
const checkoutButton = document.getElementById("checkoutButton");
const toast = document.getElementById("toast");
/* =========================================
   4. عرض الدراجات
========================================= */

function renderProducts(list = motorcycles) {
  if (!productsGrid) return;

  if (list.length === 0) {
    productsGrid.innerHTML = `
      <p class="no-products">
        لم نجد أي دراجة مطابقة لبحثك.
      </p>
    `;
    return;
  }

  productsGrid.innerHTML = list.map((bike) => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${bike.image}"
          alt="${bike.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=Motorcycle';"
        >
        <span class="product-badge">${bike.badge}</span>
      </div>

      <div class="product-info">
        <p class="product-category">${bike.category}</p>
        <h3 class="product-title">${bike.name}</h3>
        <p class="product-description">${bike.description}</p>

        <div class="product-bottom">
         <span class="product-price">${formatPrice(bike.price)}</span>

          <button
            class="add-to-cart"
            type="button"
            data-add="${bike.id}"
          >
            🛒 أضف للسلة
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* =========================================
   5. البحث والتصفية والترتيب
========================================= */

function filterProducts() {
  const searchText = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const sortValue = sortFilter
    ? sortFilter.value
    : "default";

  let result = motorcycles.filter((bike) => {
    const matchesSearch =
      bike.name.toLowerCase().includes(searchText) ||
      bike.description.toLowerCase().includes(searchText) ||
      bike.category.toLowerCase().includes(searchText);

    const bikeCat = (bike.category || "").toLowerCase();
    const selCat = (selectedCategory || "").toLowerCase();

    const matchesCategory =
      selCat === "all" ||
      bikeCat === selCat ||
      bikeCat.includes(selCat) ||
      (selCat === "sport" && (bikeCat.includes("sport") || bikeCat.includes("رياضية"))) ||
      (selCat === "street" && (bikeCat.includes("street") || bikeCat.includes("طرقات") || bikeCat.includes("naked"))) ||
      (selCat === "adventure" && (bikeCat.includes("adventure") || bikeCat.includes("مغامرات"))) ||
      (selCat === "scooter" && (bikeCat.includes("scooter") || bikeCat.includes("سكوتر"))) ||
      (selCat === "cruiser" && (bikeCat.includes("cruiser") || bikeCat.includes("كروزر")));

    return matchesSearch && matchesCategory;
  });

  if (sortValue === "price-low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sortValue === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderProducts(result);
}
if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterProducts);
}

if (sortFilter) {
  sortFilter.addEventListener("change", filterProducts);
}
/* =========================================
   6. عرض إشعارات للمستخدم
========================================= */

function showToast(message) {
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================================
   7. تحديث عدد المنتجات في السلة
========================================= */

function updateCartCount() {
  if (!cartCount) return;

  const totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  cartCount.textContent = totalQuantity;
}

/* =========================================
   8. إضافة دراجة إلى السلة
========================================= */

function addToCart(productId) {
  const bike = motorcycles.find(
    (item) => item.id === Number(productId)
  );

  if (!bike) return;

  const existingItem = cart.find(
    (item) => item.id === bike.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: bike.id,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  renderCart();

  showToast(`تمت إضافة ${bike.name} إلى السلة`);
}

/* =========================================
   9. عرض محتويات السلة
========================================= */

function renderCart() {
  if (!cartItems || !cartTotal) return;

  // إزالة أي منتج لم يعد موجودًا في قائمة الدراجات
  cart = cart.filter((item) => {
    return motorcycles.some((bike) => bike.id === item.id);
  });

  cart = cart.map((item) => ({
    id: item.id,
    quantity: Math.max(1, Math.floor(Number(item.quantity) || 1))
  }));

  saveCart();

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-cart">
        🛒 سلة المشتريات فارغة.
      </p>
    `;

    cartTotal.textContent = formatPrice(0);

    if (checkoutTotal) {
      checkoutTotal.textContent = formatPrice(0);
    }

    updateCartCount();
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map((item) => {
    const bike = motorcycles.find(
      (product) => product.id === item.id
    );

    if (!bike) return "";

    const subtotal = bike.price * item.quantity;
    total += subtotal;

    return `
      <div class="cart-item">
        <img
          src="${bike.image}"
          alt="${bike.name}"
          class="cart-item-image"
          onerror="this.onerror=null;this.src='https://placehold.co/100x80?text=Moto';"
        >

        <div class="cart-item-info">
          <h3>${bike.name}</h3>

          <p class="cart-item-price">
            ${formatPrice(bike.price)}
          </p>

          <div class="cart-quantity">
            <button
              type="button"
              data-decrease="${bike.id}"
              aria-label="تقليل الكمية"
            >−</button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-increase="${bike.id}"
              aria-label="زيادة الكمية"
            >+</button>
          </div>

          <p>
            المجموع: <strong>${formatPrice(subtotal)}</strong>
          </p>
        </div>

        <button
          type="button"
          class="remove-cart-item"
          data-remove="${bike.id}"
          aria-label="حذف الدراجة"
        >
          🗑️ حذف
        </button>
      </div>
    `;
  }).join("");

  cartTotal.textContent = formatPrice(total);

  if (checkoutTotal) {
    checkoutTotal.textContent = formatPrice(total);
  }

  updateCartCount();
}

/* =========================================
   10. زيادة أو تقليل الكمية وحذف المنتجات
========================================= */

function changeQuantity(productId, change) {
  const item = cart.find(
    (product) => product.id === Number(productId)
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(
      (product) => product.id !== Number(productId)
    );
  }

  saveCart();
  renderCart();
  updateCartCount();
}

function removeFromCart(productId) {
  const bike = motorcycles.find(
    (item) => item.id === Number(productId)
  );

  cart = cart.filter(
    (item) => item.id !== Number(productId)
  );

  saveCart();
  renderCart();
  updateCartCount();

  if (bike) {
    showToast(`تم حذف ${bike.name} من السلة`);
  }
}

/* =========================================
   11. فتح وإغلاق سلة المشتريات
========================================= */

function openCart() {
  if (!cartModal) {
    alert("لم يتم العثور على نافذة السلة في HTML");
    return;
  }

  renderCart();

  cartModal.classList.remove("hidden");
  cartModal.classList.add("active");
  cartModal.style.display = "flex";
  cartModal.setAttribute("aria-hidden", "false");
}

function closeCartModal() {
  if (!cartModal) return;

  cartModal.classList.remove("active");
  cartModal.classList.add("hidden");
  cartModal.style.display = "none";
  cartModal.setAttribute("aria-hidden", "true");
}

if (cartButton) {
  cartButton.addEventListener("click", openCart);
}

if (closeCart) {
  closeCart.addEventListener("click", closeCartModal);
}

if (continueShopping) {
  continueShopping.addEventListener("click", closeCartModal);
}

/* =========================================
   12. ربط أزرار الدراجات والسلة
========================================= */

// استخدام تفويض الأحداث حتى تعمل الأزرار
// حتى بعد إعادة عرض المنتجات أو محتويات السلة.

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }

  const increaseButton = event.target.closest(
    "[data-increase]"
  );

  if (increaseButton) {
    changeQuantity(increaseButton.dataset.increase, 1);
    return;
  }

  const decreaseButton = event.target.closest(
    "[data-decrease]"
  );

  if (decreaseButton) {
    changeQuantity(decreaseButton.dataset.decrease, -1);
    return;
  }

  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    removeFromCart(removeButton.dataset.remove);
  }
});
/* =========================================
   13. فتح نافذة إتمام الطلب
========================================= */

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("السلة فارغة! أضف دراجة أولاً");
      return;
    }
    
    // استدعاء دالة الواتساب مباشرة
    checkoutViaWhatsApp();
  });
}

if (closeCheckout) {
  closeCheckout.addEventListener("click", () => {
    if (!checkoutModal) return;

    checkoutModal.classList.remove("active");
    checkoutModal.setAttribute("aria-hidden", "true");
  });
}

/* =========================================
   14. حساب المجموع النهائي
========================================= */

function calculateCartTotal() {
  return cart.reduce((total, item) => {
    const bike = motorcycles.find(
      (product) => product.id === item.id
    );

    return total + (bike ? bike.price * item.quantity : 0);
  }, 0);
}

/* =========================================
   15. تأكيد الطلب
========================================= */

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      showToast("لا يمكن إتمام طلب بسلة فارغة.");
      return;
    }
    if (!checkoutForm.checkValidity()) {
      checkoutForm.reportValidity();
      return;
    }

    const formData = new FormData(checkoutForm);

    const customer = Object.fromEntries(
      formData.entries()
    );

    const order = {
      orderNumber: "MOTO-" + Date.now(),
      customer: customer,
      items: cart.map((item) => {
        const bike = motorcycles.find(
          (product) => product.id === item.id
        );

        return {
          name: bike.name,
          price: bike.price,
          quantity: item.quantity,
          subtotal: bike.price * item.quantity
        };
      }),
      total: calculateCartTotal(),
      date: new Date().toISOString()
    };

    // حفظ الطلب على هذا الجهاز فقط.
    // لا يُرسل إلى متجر أو خادم خارجي.
    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("motoProOrdersV1") || "[]"
      );

      if (!Array.isArray(savedOrders)) {
        throw new Error("بيانات الطلبات غير صالحة");
      }

      savedOrders.push(order);

      localStorage.setItem(
        "motoProOrdersV1",
        JSON.stringify(savedOrders)
      );
    } catch (error) {
      showToast("تعذر حفظ الطلب. حاول مرة أخرى.");
      return;
    }

    // تجهيز رسالة الواتساب الشاملة (بيانات الزبون + المنتجات)
  let message = `🛒 *طلب جديد من متجر MotoProSalim*\n\n`;
  message += `👤 *معلومات الزبون*:\n`;
  message += `- الاسم: ${customer.name || 'غير محدد'}\n`;
  message += `- الهاتف: ${customer.phone || 'غير محدد'}\n`;
  message += `- العنوان: ${customer.address || 'غير محدد'}\n\n`;

  message += `📦 *تفاصيل الدراجات المطلوبة*:\n`;
  cart.forEach((item, index) => {
    const bike = motorcycles.find(m => m.id === item.id);
    const bikeName = bike ? bike.name : "دراجة نارية";
    let itemTotal = (bike?bike.price :0)*item.quantity;
    message += `${index + 1}. *${bikeName}*\n`;
    message += `   - الكمية: ${item.quantity}\n`;
    message += `   - المجموع: ${formatPrice(itemTotal)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━\n`;
  message += `💰 *المجموع الإجمالي:* ${formatPrice(order.total)}`;

  // رقم هاتفك الشخصي (استبدله برقمك الحقيقي بالمغرب)
  const phoneNumber = "212617870584"; 
  
  // فتح واتساب بالرسالة الجاهزة
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    checkoutForm.reset();
    checkoutModal.classList.remove("active");
    checkoutModal.setAttribute("aria-hidden", "true");
  });
}

/* =========================================
   16. إغلاق النوافذ عند الضغط خارجها
========================================= */

[cartModal, checkoutModal].forEach((modal) => {
  if (!modal) return;

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });
});

/* =========================================
   17. تشغيل الموقع عند تحميل الصفحة
========================================= */

renderProducts();
renderCart();
updateCartCount();
function checkoutViaWhatsApp() {
  // التأكد من أن السلة تحتوي على دراجات
  if (
    typeof cart === "undefined" ||
    !Array.isArray(cart) ||
    cart.length === 0
  ) {
    if (typeof showToast === "function") {
      showToast("السلة فارغة! أضف دراجة أولاً 🛒");
    } else {
      alert("السلة فارغة! أضف دراجة أولاً 🛒");
    }
    return;
  }

  const phoneNumber = "212617870584";

  let message = "🏍️ *طلب جديد من متجر MOTO PRO*\n\n";
  message += "📦 *تفاصيل الطلب:*\n\n";

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const bike = motorcycles.find(
      m => String(m.id) === String(item.id)
    );

    if (!bike) {
      alert("تعذر العثور على الدراجة. حاول تحديث الصفحة.");
      return;
    }

    const quantity = Number(item.quantity);
    const price = Number(bike.price);

    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      !Number.isFinite(price) ||
      price < 0
    ) {
      alert("بيانات الدراجة أو الكمية غير صحيحة.");
      return;
    }

    const subtotal = price * quantity;
    total += subtotal;

    const priceText =
      typeof formatPrice === "function"
        ? formatPrice(subtotal)
        : subtotal.toLocaleString("fr-MA") + " DH";

    message += `${i + 1}. ${bike.name}\n`;
    message += `الكمية: ${quantity}\n`;
    message += `المجموع: ${priceText}\n\n`;
  }

  const totalText =
    typeof formatPrice === "function"
      ? formatPrice(total)
      : total.toLocaleString("fr-MA") + " DH";

  message += "━━━━━━━━━━━━━━\n";
  message += `💰 *المجموع الإجمالي: ${totalText}*\n\n`;
  message += "شكراً لاختياركم MOTO PRO 🏍️";

  const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);

  // فتح واتساب دون التأثير على السلة
  const newWindow = window.open(
    whatsappURL,
    "_blank"
  );

  if (!newWindow) {
    alert("تعذر فتح واتساب. تحقق من إعدادات النوافذ المنبثقة في المتصفح.");
  }
}
document.addEventListener('DOMContentLoaded', function () {

  // ===== زر متوافق مع الهاتف =====
  const btn = document.getElementById('mobileToggleBtn');

  if (btn) {
    btn.addEventListener('click', function () {
      const isMobile = document.body.classList.toggle('mobile-mode');

      if (isMobile) {
        // ترتيب السلة والعنوان في سطر واحد
        const header = document.querySelector('header') || document.querySelector('.header');
        const logo = document.querySelector('.logo') || document.querySelector('[class*="logo"]');
        const cart = document.querySelector('.cart-btn') || document.querySelector('[class*="cart"]');

        if (header && logo && cart) {
          let topRow = document.getElementById('mobile-top-row');

          if (!topRow) {
            topRow = document.createElement('div');
            topRow.id = 'mobile-top-row';
            topRow.style.cssText = `
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              width: 100% !important;
              margin-bottom: 10px !important;
            `;

            topRow.appendChild(cart);
            topRow.appendChild(logo);
            header.insertBefore(topRow, header.firstChild);
          }
        }

        btn.innerHTML = '🖥️ العودة للكمبيوتر';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        location.reload();
      }
    });
  }
});  
const mobileToggleBtn = document.getElementById('mobileToggleBtn');
const desktopViewBtn = document.getElementById('desktop-view-btn');

if (mobileToggleBtn && desktopViewBtn) {

  // تفعيل وضع الهاتف
  mobileToggleBtn.addEventListener('click', () => {
    document.body.classList.add('is-mobile-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // العودة إلى وضع الكمبيوتر
  desktopViewBtn.addEventListener('click', () => {
    document.body.classList.remove('is-mobile-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

}
// فتح النافذة المنبثقة الخاصّة بضمان الجودة
function showQualityGuarantee() {
  document.getElementById("qualityModal").style.display = "flex";
}

// إغلاق النافذة المنبثقة
function closeQualityGuarantee() {
  document.getElementById("qualityModal").style.display = "none";
}

// إغلاق النافذة عند الضغط في أي مكان خارج الصندوق
window.onclick = function(event) {
  const modal = document.getElementById("qualityModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
