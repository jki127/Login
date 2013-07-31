function checkPassConfirm() {
    var pass = document.getElementById("pass");
    var conpass = document.getElementById("conpass");
    var mismatch = document.getElementById("mismatch");

    if (conpass.value != "" && conpass.value != pass.value) {
        mismatch.innerHTML = "The passwords don't match!";
        return false;
    } else {
        mismatch.innerHTML = "";
        return true;
    }
}

function validate() {
    validateUsername();
    validatePassword();
    validateSchool();
    if (validateUsername() && validatePassword() && validateSchool()) {
        addUser();
        return true;
    }
}


function validateUsername() {
    var uwarn = document.getElementById("uwarn"); //Spaces to tell user of error
    var username = document.getElementById("user").value;
    //true means the username contains a space
    if (/\s/g.test(username)) {
        uwarn.innerHTML = "Your username cannot contain any spaces";
        return false;
    } else if (username == "") {
        uwarn.innerHTML = "Your username cannot be black";
        return false;
    } else if (username.length < 5) {
        uwarn.length = "Your username must be atleast 4 characters";
        return false;
    } else {
        return true;
    }
}

function validatePassword() {
    var pwarn = document.getElementById("pwarn");
    var password = document.getElementById("pass").value;

    if (password == "") {
        pwarn.innerHTML = "Your password cannot be empty";
        return false;
    } else if (password.length < 6) {
        pwarn.length = "Your username must be atleast 6 characters";
        return false;
    } else {
        return true;
    }
}

function validateSchool() {
    var swarn = document.getElementById("swarn");
    var school = document.getElementById("school").value;

    if (school == "") {
        swarn.innerHTML = "You need to include your school";
    } else {
        return true;
    }
}

function addUser() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var school = document.getElementById("school").value;

    xml = new XMLHttpRequest();
    xml.open("POST", "http://yoface-jki127.rhcloud.com/SQL/main.php", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("user=" + username + "&pass=" + password + "&school" + school);
xml.onreadystatechange = function(){
        var txt = xml.responseText;
        alert(txt);
    }
}