/* eslint-disable no-console */

// Factory function

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const saySymbol = () => console.log(`${name}'s symbol is ${symbol}`);
  const sayName = () => console.log(`Player ${name} is ready!`);
  return { sayName, getName, getSymbol, saySymbol };
};

const jim = Player("Jim", "X");
const bob = Player("Bob", "O");
jim.sayName();
jim.saySymbol();
bob.sayName();
bob.saySymbol();

// GameBoard Module (one of something)

const gameBoard = (() => {
  const board = [" ", " ", "X", " ", " ", " ", "X", " ", " "];
  const generateBoard = () => {
    let i = 0;
    while (i < board.length) {
      const container = document.querySelector(".game-container");
      const block = document.createElement("div");
      block.id = "block";
      block.setAttribute("class", `block-${i}`);
      block.textContent = board[i];
      block.setAttribute("onclick", `test${i}()`);
      container.appendChild(block);
      i += 1;
    }
  };
  return {
    board,
    generateBoard,
  };
})();

gameBoard.generateBoard();

// Game flow module (one of something)
// Figure out where each piece of logic fits

const gameController = (() => {
  const activePlayer = () =>{
    console.log("Working function which shows activePlayer")
  };
return {
  activePlayer,
};
})();



function test0() {
  // Find way to change to active player instead of jim.getSymbol();
  const playerToken = gameController.getActivePlayer;
  // jim.getSymbol();
  gameBoard.board[0] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test1() {
  const playerToken = jim.getSymbol();
  gameBoard.board[1] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test2() {
  const playerToken = jim.getSymbol();
  gameBoard.board[2] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test3() {
  const playerToken = jim.getSymbol();
  gameBoard.board[3] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test4() {
  const playerToken = jim.getSymbol();
  gameBoard.board[4] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test5() {
  const playerToken = jim.getSymbol();
  gameBoard.board[5] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test6() {
  const playerToken = jim.getSymbol();
  gameBoard.board[6] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test7() {
  const playerToken = jim.getSymbol();
  gameBoard.board[7] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

function test8() {
  const playerToken = jim.getSymbol();
  gameBoard.board[8] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}


