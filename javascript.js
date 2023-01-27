// GameBoard Module (one of something)
const gameBoard = (() => {
  const board = ["X", "O", "X", "another one?", "another one"];
  return {
    board,
  };
})();

const game = () => {};

// Player Factory function (multiple of something)
const Player = (name) => {
  const getName = () => name;
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName, getName };
};

const jim = Player("Jim");
jim.sayName();

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


// I want to create functions that insert X or O on DOM elements
// Game should start with player 1 and X (white piece) and then O (black pieces)




// In short, break the big problem down and solve each of the smaller problems
//  until you’ve solved the big problem.

// Show player's turn
// Object has player's names
// Function acesses object and prints player's name on screen depending on turn

// Show which player's turn it is in the top of the game board
// PLayer 1 clicks on the board
// X mark appears on the gameboard
// Now it is player's 2 turn
// Change active player's name on top of screen
// Player 2 inputs his mark into the desired space and it appears
// Now its players 1 turn again
// Repeat until victory

// Make sure only 1 spot is able to used per mark