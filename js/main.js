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
})