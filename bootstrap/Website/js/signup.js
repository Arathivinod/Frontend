function redirectToLogin() {
    // Redirect to the login page
    window.location.href = "login.html";
}

if (localStorage.getItem("theme") === "enabled") {
    document.body.classList.add('bg')
}
else {
    document.body.classList.remove('bg')
}