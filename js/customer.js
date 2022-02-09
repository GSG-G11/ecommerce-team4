let cartProduct = JSON.parse(window.localStorage.getItem("cart")) || [];

window.addEventListener("DOMContentLoaded", () => {
    addProductToCartPage(cartProduct);
})

// Add To Cart Function
const productsList = document.querySelector(".customer .product-list");

productsList.addEventListener("click", (e) => {
    let thisIs = e.target;

    if (thisIs.dataset.id === "add-cart"){
        let productId = thisIs.parentElement.parentElement.dataset.id;
        let thisProduct = arrOfProduct.filter(product => product.id == productId);
        
        cartProduct.push(thisProduct[0]);

        // Add Array To Local Storage
        addCartToLocalStorage(cartProduct);
        addProductToCartPage(cartProduct);
    }
});


// Add Cart To Local Storage
function addCartToLocalStorage(cartProduct) {
    window.localStorage.setItem("cart", JSON.stringify(cartProduct));
}

addCartToLocalStorage(cartProduct);
