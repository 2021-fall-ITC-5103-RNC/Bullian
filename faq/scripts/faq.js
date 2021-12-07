var faq = document.getElementsByClassName("faq");
var i;

for (var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    });
}

const searchForm = document.getElementById('form');
const searchInput = document.getElementById('searchbar');
let questions = document.getElementsByClassName('faq');
searchForm.addEventListener('
', (event) => {
const { value } = searchInput;

// get user search input converted to lowercase
const searchQuery = value.toLowerCase();

for (const element of questions) {
    let qn = element.textContent.toLowerCase();

    if (qn.includes(searchQuery)) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener("click", () => {
    document.getElementById('searchbar').value = "";
});