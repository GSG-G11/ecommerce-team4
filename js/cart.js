// Add Products to Cart Page
function addProductToCartPage(cartProduct) {
  let cartList = document.querySelector(".cart .cart-list");
  cartList.innerHTML = "";
  cartProduct.forEach((product) => {
    cartList.innerHTML += `<div class="product-list" data-id="${product.id}">
                <div class="img-with-product">
                    <img class="img-of-product" src="${product.img}" alt="image of the product" />
                    <div class="title-of-product-and-description">
                        <h5 class="title-of-the-product">${product.name}</h5>
                        <p class="description-of-the-product">
                        ${product.desc}
                        </p>
                    </div>
                </div>
                <div class="delete-and-price">
                    <button class="icon-button" data-id="delete">
                        <i class="ri-close-circle-line"></i>
                    </button>
                    <h5 class="price-of-product">$${product.price}</h5>
                </div>
            </div>`;
  });
}

const cartProductList = document.querySelector(".cart .cart-list");

cartProductList.addEventListener("click", (e) => {
  let thisIs = e.target;

  if (thisIs.dataset.id === "delete") {
    thisIs.parentElement.parentElement.remove();
    cartProduct = cartProduct.filter(
      (product) => product.id != thisIs.parentElement.parentElement.dataset.id
    );
    addCartToLocalStorage(cartProduct);
  }
});

const deleteBtn = document.querySelector(".delete-all-items");

deleteBtn.addEventListener("click", () => {
  cartProduct = [];
  addCartToLocalStorage(cartProduct);
  addProductToCartPage(cartProduct);
});

const totalPrice = document.querySelector(".total-price");

function getTotalPrice(cartProduct) {
  let sum = 0;
  cartProduct.forEach((product) => {
    sum += parseInt(product.price);
  });

  totalPrice.innerHTML = `$ ${sum}`;
}
getTotalPrice(cartProduct);
