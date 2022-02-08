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