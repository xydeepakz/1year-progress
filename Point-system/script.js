let apple = 1;
let bodyWidth = document.querySelector('#game-board').clientWidth - 50;
let gameboard = document.querySelector('#game-board').clientHeight;
console.log(gameboard);
setInterval(
    ()=>{
        let newApple = document.createElement('div');
        newApple.className = 'apple';
        newApple.id = 'apple' + apple;
        let place = Math.random() * bodyWidth;
        console.log(place);
        newApple.style.translate = `${place}px`;
        newApple.onmousemove = function() {
            newApple.style.display = 'none';
            let pointElement = document.getElementById('point');
            let point = Number(pointElement.textContent);
            point += 1;
            pointElement.textContent = point;
        };            
        document.getElementById('game-board').appendChild(newApple);
            let previousApple = document.getElementById('apple' + (apple - 1));
            if (previousApple) {
                previousApple.style.display = "none";
            }
        apple++;
    }, 2000);
