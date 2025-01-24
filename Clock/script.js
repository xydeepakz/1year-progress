let current = new Date();
console.log(current);
window.onload = function() {
    get();
};
setInterval(get, 1000);
function get() {
    current = new Date();
    let hour = document.getElementById("H");
    let minute = document.getElementById("M");
    let second = document.getElementById("S");
    let ampm = document.getElementById("AMPM");
    let real$hour = current.getHours() % 12 || 12;
    hour.innerHTML = real$hour < 10 ? "0" + real$hour : real$hour;
    minute.innerHTML = current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes();
    second.innerHTML = current.getSeconds() < 10 ? "0" + current.getSeconds() : current.getSeconds();
    ampm.innerHTML = current.getHours() >= 12 ? "PM" : "AM";
};