let productMatched = [];

const searchInput = document.querySelector("#search-input");
const seaerchBtn = document.querySelector(".search-form #search-btn");
const productList = document.querySelector(".product-list");

seaerchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let keyWorld = searchInput.value.toUpperCase();
    productMatched = arrOfProduct.filter(product => product.name.toUpperCase() == keyWorld);
    
    addMatchedToPage(productMatched);
});

function addMatchedToPage(productMatched) {
    productList.innerHTML = "";
    if (productList.parentElement.className === "seller"){
        productMatched.forEach(product => {
            productList.innerHTML += `
            <div class="card" data-id="${product.id}">
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
        </div>
        `
        })
    }
    else if (productList.parentElement.className === "customer"){
        productMatched.forEach(product => {
            productList.innerHTML += `
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
        `
        })
    }
    else if (productList.parentElement.className === "cart"){
        productMatched.forEach((product) => {
            productList.innerHTML += 
            `<div class="cart-product" data-id="${product.id}">
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
}