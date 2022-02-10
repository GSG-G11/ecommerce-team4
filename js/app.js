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
    addProductToCustomerPage(arrOfProduct)

    return arrOfProduct;
}

let listOfProduct = document.querySelector(".seller .product-list");
listOfProduct.addEventListener("click", (e) => {
    if (e.target.dataset.id === "delete") {
        e.target.parentElement.parentElement.remove();
        arrOfProduct = arrOfProduct.filter(product => product.id != e.target.parentElement.parentElement.dataset.id)
        addToLocalStorage(arrOfProduct);
    } 
    else if (e.target.dataset.id === "edit"){
        // Edit Form Variables
        let editName = document.querySelector("form #edit-name");
        let editDesc = document.querySelector("form #edit-desc");
        let editImage = document.querySelector("form #edit-image");
        let editPrice = document.querySelector("form #edit-price");
        let editCtg = document.querySelector("form #edit-ctg");
        let editForm = document.querySelector("#edit-form");
        let editBtn = document.querySelector("form #edit-product");
        
        let thisProduct = arrOfProduct.filter (product => product.id == e.target.parentElement.parentElement.dataset.id);
        
        // Open Edit Form
        editForm.classList.add("open");

        // Pass Edit Form Value From This Product
        editName.value = thisProduct[0].name;
        editDesc.value = thisProduct[0].desc;
        editImage.value = thisProduct[0].img;
        editPrice.value = thisProduct[0].price;
        editCtg.value = thisProduct[0].category;

        editBtn.addEventListener("click", (e) => {
            e.preventDefault();

            // Replace Input Data
            thisProduct[0].name = editName.value;
            thisProduct[0].desc = editDesc.value;
            thisProduct[0].img = editImage.value;
            thisProduct[0].price = editPrice.value;
            thisProduct[0].category = editCtg.value;

            editForm.classList.remove("open");
            
            addToLocalStorage(arrOfProduct);
            addProductToPage(arrOfProduct);
            addProductToCustomerPage(arrOfProduct)
        
        })
    }

})


if (typeof module !== "undefined") {
        module.exports = {
        addProductToArray 
        };
}