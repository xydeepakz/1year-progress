let namE = "Deepak_Rajput";
let game = document.getElementById("result");
let count = 0;
let interval;
let oji;
let time;
game.style.borderRight = "1px solid rgba(0, 0, 0, 1)";

window.onload = function() {
    interval = setInterval(ok, 200);
}

function ok() {
    game.innerHTML += namE[count];
    count++;
    if (namE.length == count) {
        clearInterval(interval);
        oji = setInterval(reverse, 100);
    }
}

function reverse() {
    count--;
    game.innerHTML = namE.substring(0, count);
    if (count == 0) {
        clearInterval(oji);
        interval = setInterval(ok, 200);
    }
}
