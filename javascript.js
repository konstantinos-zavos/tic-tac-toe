/* eslint-disable no-console */
// GameBoard Module (one of something)

const gameBoard = (() => {
  const board = ["X", "O", "X", "O", "X", "X", "O", "X", "x"];
  const generateBoard = () => {
    
let i = 0;
while (i < board.length) {
    console.log(board[i]);
    const container = document.querySelector(".game-container");
    const block = document.createElement("div");
    block.id = "block";
    block.setAttribute("class", `block-${i}`);
    container.appendChild(block);
    i++;
}
  };
  return {
    board,
    generateBoard,
  };
})();

function startGenerate() {
  return gameBoard.generateBoard();
}

startGenerate();

//  same idea from below : (First create loop that generates a div from each array string) then --I want to generate grid on DOM from array, I already have the CSS ready)
// idea : if player1 click gameboard.board[3] then show X on DOM-box-[3] then change turn to player 2

const game = () => {};

// Player Factory function (multiple of something)
const Player = (name) => {
  const getName = () => name;
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName, getName };
};

// const jim = Player("Jim");
// jim.sayName();

function test() {
  const testArray = "1";
  gameBoard.gameBoard.push(testArray);
  document.getElementById("arrPrint").innerHTML = JSON.stringify(
    gameBoard.gameBoard,
    null,
    2
  );
}

function addMarkToBlockOne() {
  const block1 = document.querySelector(".block-1");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = "X";
  block1.appendChild(content);
}

// Show grid generated from the array
