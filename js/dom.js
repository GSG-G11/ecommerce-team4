// Add Products to Page
function addProductToPage(arrOfProduct) {
    let listOfProduct = document.querySelector(".seller .product-list");

    listOfProduct.innerHTML = "";
    arrOfProduct.forEach(product => {
        listOfProduct.innerHTML +=
            `<div class="card" data-id="${product.id}">
            <div class="card-img">
                <img src="${product.img}" alt="product-image">
            </div>
            <div class="card-body">
                <h3 class="card-title">
                    ${product.name}
                    <span>${product.category} Category</span>
                </h3>
                <span class="card-price">${product.price} $</span>
                <p class="card-text">${product.desc}</p>

                <br>
                <button class="card-edit" data-id="edit"><i class="ri-edit-circle-line"></i></button>
                <button class="card-delete" data-id="delete"><i class="ri-delete-bin-6-line"></i></button>
            </div>
        </div>`;
    });
}

// Add Products to customer Page
function addProductToCustomerPage(arrOfProduct) {
    let listOfProductCustomer = document.querySelector(".customer .product-list");

    listOfProductCustomer.innerHTML = "";
    arrOfProduct.forEach(product => {
        listOfProductCustomer.innerHTML +=
            `
            <div class="card" data-id="${product.id}">
            <div class="card-img">
                <img src="${product.img}" alt="product-image" />
            </div>
            <div class="card-body">
                <h3 class="card-title">
                ${product.name}
                    <span>${product.category} Category</span>
                </h3>
                <span class="card-price">${product.price}$</span>
                <span class="card-star"><i class="ri-star-half-line"></i></span>
                <span class="card-star"><i class="ri-star-half-line"></i></span>
                <span class="card-star"><i class="ri-star-half-line"></i></span>
                <span class="card-star"><i class="ri-star-half-line"></i></span>
                <span class="card-star"><i class="ri-star-half-line"></i></span>
                <p class="card-text">
                ${product.desc}
                </p>

                <br />
                <button class="card-edit" data-id="add-cart">
                    <i class="ri-shopping-cart-line"></i>
                </button>
                <button class="card-delete">
                    <i class="ri-heart-line"></i>
                </button>
            </div>
        </div>
        `;
    });
}

// Add Array Of Products to Local Storage
function addToLocalStorage(arrOfProduct) {
    window.localStorage.setItem("products", JSON.stringify(arrOfProduct));
}

addToLocalStorage(arrOfProduct);


// Get Array From Local Storage
function getProductsFromLocalStorage() {
    let data = window.localStorage.getItem("products");
    if (data) {
        let productData = JSON.parse(data);
        addProductToPage(productData);
        addProductToCustomerPage(productData);
    }
}

getProductsFromLocalStorage();
