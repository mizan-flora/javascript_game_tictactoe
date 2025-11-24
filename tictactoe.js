let playerO = "O";
let playerX = "X";
let currPlayer = playerO;

let gameBoard = ["","","","","","","","",""];
let gameCells;

window.onload = function(){
    gameCells = document.getElementsByClassName("game-cell");
    for(let cell of gameCells){
        cell.addEventListener("click", placeCell);
    }
}

function placeCell(){

    const index = parseInt(this.getAttribute('data-cell-index'));
    if(gameBoard[index] != ""){
        return;
    }
    gameBoard[index] = currPlayer;
    this.innerText = currPlayer;
    currPlayer = (currPlayer == playerO)? playerX : playerO;
}