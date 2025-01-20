function password() {
    var key = document.getElementById("eye");
    var password = document.getElementById('password');
    if (key.src.endsWith('eye.png')){
        key.src = 'hidden.png';
        password.type = 'text';
    } else {
        key.src = 'eye.png';
        password.type = 'password';
    }
}
function form() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var checkbox = document.getElementById('checkbox').checked;
    if (name === "") {
        alert("Please enter your name.");
        return false;
    } else if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (password === "") {
        alert("Please enter your password.");
        return false;
    } else if (!checkbox) {
        alert("You must agree to the terms and conditions.");
        return false;
    } else {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        return true;
    }
}