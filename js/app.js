let arrOfProduct = [];

if (window.localStorage.getItem("products")) {
    arrOfProduct = JSON.parse(window.localStorage.getItem("products"));
}

// Add Product Form Variable
let pdtName = document.querySelector("form #pdt-name");
let pdtDesc = document.querySelector("form #pdt-desc");
let pdtImage = document.querySelector("#pdt-image");
let pdtPrice = document.querySelector("form #pdt-price");
let pdtCtg = document.querySelector("form #pdt-ctg");
let saveBtn = document.querySelector("form #save-product");
let addPdt = document.querySelector("#add-product")



saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    addProductToArray(pdtName.value, pdtDesc.value, pdtImage.value, pdtPrice.value, pdtCtg.value);

    addPdt.classList.remove("open");
    pdtName.value = "";
    pdtDesc.value = "";
    pdtImage.value = "";
    pdtPrice.value = "";
    pdtCtg.value = "";
})


function addProductToArray(name, dsec, img, price, ctg) {
    const product = {
        id: Date.now(),
        name: name,
        desc: dsec,
        price: price,
        img: img,
        category: ctg
    }

    // Push Product To Array
    arrOfProduct.push(product);

    // Add The Array To Local Storage
    addToLocalStorage(arrOfProduct);

    // Update The List Of Product On Page
    addProductToPage(arrOfProduct)

    return arrOfProduct;
}

function getProductsFromLocalStorage() {
    let data = window.localStorage.getItem("products");
    if (data) {
        let productData = JSON.parse(data);
        addProductToPage(productData);
    }
}
let listOfProduct = document.querySelector(".seller .product-list");
listOfProduct.addEventListener("click", (e) => {
    if (e.target.dataset.id === "delete") {
        e.target.parentElement.parentElement.remove();
        arrOfProduct = arrOfProduct.filter(product => product.id != e.target.parentElement.parentElement.dataset.id)
        addToLocalStorage(arrOfProduct);
    }

})


module.exports = {
    addProductToArray
}