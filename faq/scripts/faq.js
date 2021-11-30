var faq = document.getElementsByClassName("faq");
var i;

for (var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    });
}