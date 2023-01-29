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
  const winnerCheck = () => {
    // x row
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
      const div0 = document.querySelector(".block-0");
      div0.setAttribute("style", "color: white; background: green; ");
      const div1 = document.querySelector(".block-1");
      div1.setAttribute("style", "color: white; background: green;");
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
      const div3 = document.querySelector(".block-3");
      div3.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div5 = document.querySelector(".block-5");
      div5.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      const div7 = document.querySelector(".block-7");
      div7.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    }
    // x column
    else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
      const div0 = document.querySelector(".block-0");
      div0.setAttribute("style", "color: white; background: green;");
      const div3 = document.querySelector(".block-3");
      div3.setAttribute("style", "color: white; background: green;");
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
      const div1 = document.querySelector(".block-1");
      div1.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div7 = document.querySelector(".block-7");
      div7.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      const div5 = document.querySelector(".block-5");
      div5.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      console.log("winner - X - column");
    }
    // x diagonal
    else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
      const div0 = document.querySelector(".block-0");
      div0.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    } else if (board[6] === "X" && board[4] === "X" && board[2] === "X") {
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      console.log("Winner - X - row");
    }
    // O row
    else if (
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O")
    ) {
      console.log("winner - O - row");
    } else if (
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O")
    ) {
      console.log("winner - o - column");
    } else if (
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[6] === "O" && board[4] === "O" && board[2] === "O")
    ) {
      console.log("winner - o - diagonal");
    } else {
      console.log("no winner");
    }
  };

  return {
    board,
    generateBoard,
    winnerCheck,
  };
})();

gameBoard.generateBoard();
gameBoard.winnerCheck();
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
  gameBoard.winnerCheck();
}

function test1() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[1] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test2() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[2] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test3() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[3] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test4() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[4] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test5() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[5] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test6() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[6] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test7() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[7] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test8() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[8] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
  gameController.changeTurn();
  gameBoard.winnerCheck();
}
