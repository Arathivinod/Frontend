document.addEventListener("scroll", function () {
    var footer = document.getElementById("page-footer");
    if (window.scrollY > 100) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});


if (localStorage.getItem("theme") === "enabled") {
    document.body.classList.add('bg')
}
else {
    document.body.classList.remove('bg')
}