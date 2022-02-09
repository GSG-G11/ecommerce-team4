// Signup Form
let sellerBtn = document.getElementById("seller-acc");
let customerBtn = document.getElementById("customer-acc");
let mainForm = document.querySelector(".form.singup-form");

sellerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let checkForm = mainForm.classList.contains("seller");

    checkForm ? true : mainForm.classList.add("seller");
});

customerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let checkForm = mainForm.classList.contains("seller");

    checkForm ? mainForm.classList.remove("seller") : true;
});


// Search Function
let toggleSearch = document.querySelectorAll(".btn.toggle-search");
let searchForm = document.querySelector("#search-form");

toggleSearch.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        let contain = searchForm.classList.contains('open');
        contain ? searchForm.classList.remove("open") : searchForm.classList.add("open");
    })
})