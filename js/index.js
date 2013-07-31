var username = document.getElementById("user");
var password = document.getElementById("pass");
var submit = document.getElementById("sub");
var error = document.getElementById("hacker");

username.addEventListener("click", function () {
    username.value = '';
}, false);

password.addEventListener("click", function () {
    password.value = '';
}, false);
submit.addEventListener("click", function () {
    if ((username.value == "Sprout" || username.value == "sprout") && (password.value == "Gentech" || password.value == "gentech" || password.value == "GenTech")) {
        window.location.assign("home/home.html")
    } else {
        error.style.webkitTransform = "scale(1.5)";
        setTimeout(function(){
            error.style.webkitTransform = "scale(0)";
        }, 2500);
    }
}, false);