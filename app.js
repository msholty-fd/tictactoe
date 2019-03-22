var currentPlayer = document.getElementById("currentPlayer");
var currentPlayerPiece = document.getElementById("currentPlayerPiece");

function checkWinner() {
    var cell0 = document.getElementById("0").className;
    var cell1 = document.getElementById("1").className;
    var cell2 = document.getElementById("2").className;
    var cell3 = document.getElementById("3").className;
    var cell4 = document.getElementById("4").className;
    var cell5 = document.getElementById("5").className;
    var cell6 = document.getElementById("6").className;
    var cell7 = document.getElementById("7").className;
    var cell8 = document.getElementById("8").className;

    var realCurrentPlayer;
    if (currentPlayer.innerHTML === "2") {
        realCurrentPlayer = "1";
    } else {
        realCurrentPlayer = "2";
    }
    var message = `Player ${realCurrentPlayer} you won!`;

    if (
        cell0 === cell1 &&
        cell1 === cell2 &&
        cell0 !== "cell" &&
        cell1 !== "cell" &&
        cell2 !== "cell"
    ) {
        alert(message);
    }
    if (
        cell3 === cell4 &&
        cell4 === cell5 &&
        cell3 !== "cell" &&
        cell4 !== "cell" &&
        cell5 !== "cell"
    ) {
        alert(message);
    }
    if (
        cell6 === cell7 &&
        cell7 === cell8 &&
        cell6 !== "cell" &&
        cell7 !== "cell" &&
        cell8 !== "cell"
    ) {
        alert(message);
    }
    if (
        cell0 === cell3 &&
        cell3 === cell6 &&
        cell0 !== "cell" &&
        cell3 !== "cell" &&
        cell6 !== "cell"
    ) {
        alert(message);
    }
    if (
        cell1 === cell4 &&
        cell4 === cell7 &&
        cell1 !== "cell" &&
        cell4 !== "cell" &&
        cell7 !== "cell"
    ) {
    }
    if (
        cell2 === cell5 &&
        cell5 === cell8 &&
        cell2 !== "cell" &&
        cell5 !== "cell" &&
        cell8 !== "cell"
    ) {
        alert(message);
    }
    if (
        cell0 === cell4 &&
        cell4 === cell8 &&
        cell0 !== "cell" &&
        cell4 !== "cell" &&
        cell8 !== "cell"
    ) {
        alert(message);
    }
    if (
        cell2 === cell4 &&
        cell4 === cell6 &&
        cell2 !== "cell" &&
        cell4 !== "cell" &&
        cell6 !== "cell"
    ) {
        alert(message);
    }
}

function placePiece(id) {
    var cell = document.getElementById(id);
    if (currentPlayer.innerHTML === "1") {
        cell.classList.add("x");
        currentPlayer.innerHTML = "2";
        currentPlayerPiece.innerHTML = "o";
    } else {
        cell.classList.add("o");
        currentPlayer.innerHTML = "1";
        currentPlayerPiece.innerHTML = "x";
    }

    checkWinner();
}
