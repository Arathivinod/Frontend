document.addEventListener("scroll", function () {
    var footer = document.getElementById("page-footer");
    if (window.scrollY > 100) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});
const togle = document.getElementById('change')
function bgchange() {
    if (togle.checked) {
        document.body.classList.add('bg')
        localStorage.setItem("theme", 'enabled')
    }
    else {
        document.body.classList.remove('bg')
        localStorage.setItem("theme", 'disabled')
    }
}