window.onload = function() {
    var name = sessionStorage.getItem("name");
    var email = sessionStorage.getItem("email");
    var password = sessionStorage.getItem("password");
    document.getElementById('name').innerHTML= 'Name: ' + name;
    document.getElementById('email').innerHTML= 'Email: ' + email;
    document.getElementById('password').innerHTML= 'Password: ' + password;
}