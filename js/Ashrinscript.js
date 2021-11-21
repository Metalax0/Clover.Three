
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");
var p5 = document.querySelector("#p5");
var p6 = document.querySelector("#p6");
var p7 = document.querySelector("#p7");
var p8 = document.querySelector("#p8");
var p9 = document.querySelector("#p9");
var flag = true;
p1.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p1").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p1").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p2.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p2").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p2").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p3.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p3").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p3").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p4.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p4").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p4").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p5.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p5").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p5").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p6.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p6").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p6").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p7.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p7").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p7").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p8.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p8").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p8").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})
p9.addEventListener('click', (e) => {
    if (flag == true) {
        document.getElementById("p9").innerHTML = "X";
        flag = false;
        document.getElementById("p10").innerHTML = "0's turn";
    }
    else {
        document.getElementById("p9").innerHTML = "O";
        flag = true;
        document.getElementById("p10").innerHTML = "X's turn";
    }
    gameover();
})

function gameover() {
    var p1 = document.getElementById("p1").innerHTML;
    var p2 = document.getElementById("p2").innerHTML;
    var p3 = document.getElementById("p3").innerHTML;
    var p4 = document.getElementById("p4").innerHTML;
    var p5 = document.getElementById("p5").innerHTML;
    var p6 = document.getElementById("p6").innerHTML;
    var p7 = document.getElementById("p7").innerHTML;
    var p8 = document.getElementById("p8").innerHTML;
    var p9 = document.getElementById("p9").innerHTML;
    if ((p1 == 'X' && p2 == 'X' && p3 == 'X') || (p1 == 'O' && p2 == "O" && p3 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p4 == 'X' && p5 == 'X' && p6 == 'X') || (p4 == 'O' && p5 == "O" && p6 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p7 == 'X' && p8 == 'X' && p9 == 'X') || (p7 == 'O' && p8 == "O" && p9 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p1 == 'X' && p5 == 'X' && p9 == 'X') || (p1 == 'O' && p5 == "O" && p9 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p1 == 'X' && p4 == 'X' && p7 == 'X') || (p1 == 'O' && p4 == "O" && p7 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p2 == 'X' && p5 == 'X' && p8 == 'X') || (p2 == 'O' && p5 == "O" && p8 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p3 == 'X' && p6 == 'X' && p9 == 'X') || (p3 == 'O' && p6 == "O" && p9 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";
    }
    if ((p3 == 'X' && p5 == 'X' && p7 == 'X') || (p3 == 'O' && p5 == "O" && p7 == 'O')) {
        document.getElementById("p10").innerHTML = "You win";

    }
}