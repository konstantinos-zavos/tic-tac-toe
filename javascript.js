/* eslint-disable no-unused-vars */
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
  const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
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
  const player = ["X", "O"];
  const names = ["Jim", "Bob"];
  let activePlayer = player[0];
  let activePlayerName = names[0];
  const container = document.querySelector("body");
  const block = document.createElement("div");
  block.id = "active-player";
  const changeTurn = () => {
    activePlayer = activePlayer === player[0] ? player[1] : player[0];
    activePlayerName = activePlayerName === names[0] ? names[1] : names[0];
    block.textContent = `${activePlayerName}'s turn`;
    container.appendChild(block);
    console.log(`${activePlayer}`);
  };
  const getActivePlayer = () => activePlayer;

  const ShowActivePlayerName = () => {
    block.textContent = `${activePlayerName}'s turn`;
    container.appendChild(block);
    console.log("Active player successfully shown on DOM");
  };
  return {
    ShowActivePlayerName,
    changeTurn,
    getActivePlayer,
  };
})();

gameController.ShowActivePlayerName();

function test0() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[0] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test1() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[1] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test2() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[2] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test3() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[3] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test4() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[4] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test5() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[5] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test6() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[6] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test7() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[7] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}

function test8() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[8] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
}
