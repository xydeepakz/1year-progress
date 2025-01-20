let player1 = "X";
let player2 = "O";
let turn = "X";

let box = document.querySelectorAll('.box');


box.forEach((btn) => {
    btn.onclick = () => {
        if (btn.innerText == "") {
            btn.innerText = turn;
            turn = turn === "X" ? "O" : "X";
            if(box[0].innerText == "X" && box[1].innerText == "X" && box[2].innerText == "X" || box[3].innerText == "X" && box[4].innerText == "X" && box[5].innerText == "X" || box[6].innerText == "X" && box[7].innerText == "X" && box[8].innerText == "X" || box[0].innerText == "X" && box[3].innerText == "X" && box[6].innerText == "X" || box[1].innerText == "X" && box[4].innerText == "X" && box[7].innerText == "X" || box[2].innerText == "X" && box[5].innerText == "X" && box[8].innerHTML == "X" || box[0].innerText == "X" && box[4].innerText == "X" && box[8].innerText == "X" || box[2].innerText == "X" && box[4].innerText == "X" && box[6].innerText == "X") {
                setTimeout(() => {
                    alert("Winner: " + player1);
                    location.reload();
                },10);
            } else if(box[0].innerText == "O" && box[1].innerText == "O" && box[2].innerText == "O" || box[3].innerText == "O" && box[4].innerText == "O" && box[5].innerText == "O" || box[6].innerText == "O" && box[7].innerText == "O" && box[8].innerText == "O" || box[0].innerText == "O" && box[3].innerText == "O" && box[6].innerText == "O" || box[1].innerText == "O" && box[4].innerText == "O" && box[7].innerText == "O" || box[2].innerText == "O" && box[5].innerText == "O" && box[8].innerHTML == "O" || box[0].innerText == "O" && box[4].innerText == "O" && box[8].innerText == "O" || box[2].innerText == "O" && box[4].innerText == "O" && box[6].innerText == "O") {
                setTimeout(() => {
                alert("Winner: " + player2);
                location.reload();
                },10);
            } else if(box[0].innerHTML != "" && box[1].innerHTML != "" && box[2].innerHTML != "" && box[3].innerHTML != "" && box[4].innerHTML != "" && box[5].innerHTML != "" && box[6].innerHTML != "" && box[7].innerHTML != "" && box[8].innerHTML != ""){
                setTimeout(() => {
                alert("Match Draw");
                location.reload();
                },10);
            }
        }
    };
});
