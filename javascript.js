/* eslint-disable no-console */
// GameBoard Module (one of something)

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const saySymbol = () => console.log(`my symbol is ${symbol}`);
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName, getName, getSymbol, saySymbol };
};

const jim = Player("Jim", "X");
jim.sayName();
jim.saySymbol();

// function test() {
//   const playerToken = jim.getSymbol();
//   gameBoard.board[1] = playerToken;
// }

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

// Create way to assign active player from game flow module into the array instead of specified jim.player



function test0() {
  // Find way to change to active player instead of jim.getSymbol();
  const playerToken = jim.getSymbol();
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


gameBoard.generateBoard();

// WHen user click on dom element, get user.token (which is X or O) and gameBoard.board[1] = user.token
// idea : if player1 click gameboard.board[3] then show X on DOM-box-[3] then change turn to player 2
