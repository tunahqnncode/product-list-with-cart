const productCards = document.querySelectorAll(".product-card");
const cartCountEl = document.querySelector(".cart-count");
const cartEmptyEl = document.querySelector(".cart-empty");
const cartFilledEl = document.querySelector(".cart-filled");
const cartListEl = document.querySelector(".cart-list");
const cartTotalPriceEl = document.querySelector(".cart-total-price");

let cart = [];

productCards.forEach((card) => {
    const name = card.querySelector(".product-name").textContent.trim();
    const priceText = card.querySelector(".product-price").textContent.replace("$", "");
    const price = parseFloat(priceText);

    const addBtn = card.querySelector(".add-btn");
    const quantityBox = card.querySelector(".quantity-box");
    const quantityCountEl = card.querySelector(".quantity-count");
    const minusBtn = card.querySelector(".minus-btn");
    const plusBtn = card.querySelector(".plus-btn");

    addBtn.addEventListener("click", () => {
        cart.push({ name, price, quantity: 1 });
        syncCardUI(card, 1);
        renderCart();
    });

    plusBtn.addEventListener("click", () => {
        const item = cart.find((product) => product.name === name);
        if (!item) return;

        item.quantity += 1;
        syncCardUI(card, item.quantity);
        renderCart();
    });

    minusBtn.addEventListener("click", () => {
        const item = cart.find((product) => product.name === name);
        if (!item) return;

        item.quantity -= 1;

        if (item.quantity <= 0) {
            cart = cart.filter((product) => product.name !== name);
            syncCardUI(card, 0);
        } else {
            syncCardUI(card, item.quantity);
        }

        renderCart();
    });
});

function syncCardUI(card, quantity) {
    const addBtn = card.querySelector(".add-btn");
    const quantityBox = card.querySelector(".quantity-box");
    const quantityCountEl = card.querySelector(".quantity-count");

    if (quantity > 0) {
        addBtn.hidden = true;
        quantityBox.hidden = false;
        quantityCountEl.textContent = quantity;
        card.classList.add("is-selected");
    } else {
        addBtn.hidden = false;
        quantityBox.hidden = true;
        quantityCountEl.textContent = 1;
        card.classList.remove("is-selected");
    }
}

function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartCountEl.textContent = totalItems;
    cartTotalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartEmptyEl.hidden = false;
        cartFilledEl.hidden = true;
        cartListEl.innerHTML = "";
        return;
    }

    cartEmptyEl.hidden = true;
    cartFilledEl.hidden = false;
    cartListEl.innerHTML = "";

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <div class="cart-item-pricing">
                    <span class="cart-item-qty">${item.quantity}x</span>
                    <span class="cart-item-price">@ $${item.price.toFixed(2)}</span>
                    <span class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button type="button" class="remove-btn" aria-label="Remove item">
                <img src="assets/images/icon-remove-item.svg" alt="">
            </button>
        `;

        const removeBtn = li.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            cart = cart.filter((product) => product.name !== item.name);
            resetCardByName(item.name);
            renderCart();
        });

        cartListEl.appendChild(li);
    });
}

function resetCardByName(productName) {
    productCards.forEach((card) => {
        const name = card.querySelector(".product-name").textContent.trim();
        if (name === productName) {
            syncCardUI(card, 0);
        }
    });
}