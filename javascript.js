/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const saySymbol = () => console.log(`${name}'s symbol is ${symbol}`);
  const sayName = () => console.log(`Player ${name} is ready!`);
  return { sayName, getName, getSymbol, saySymbol };
};

const jim = Player("Jim", "X");
const bob = Player("Bob", "O");

const gameBoard = (() => {
  const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const playerOneWon = () => {
    const container = document.querySelector(".game-container");
    container.setAttribute(
      "style",
      "animation-name: myAnimation;animation-duration: 5000ms;animation-fill-mode: forwards;"
    );
    const body = document.querySelector("body");
    const block = document.createElement("div");
    block.id = "test-block";
    block.textContent = "Player 1 won!";
    const removeTurn = document.querySelector("#active-player");
    removeTurn.setAttribute("style", "display:none;");
    body.appendChild(block);

    const testBlockDiv = document.querySelector("#test-block");
    const button = document.createElement("button");
    button.textContent = "Play again?";
    button.setAttribute("onClick", "window.location.reload();");
    testBlockDiv.appendChild(button);
    console.log("Player 1 won");
  };

  const playerTwoWon = () => {
    const container = document.querySelector(".game-container");
    container.setAttribute(
      "style",
      "animation-name: myAnimation;animation-duration: 5000ms;animation-fill-mode: forwards;"
    );
    const body = document.querySelector("body");
    const block = document.createElement("div");
    block.id = "test-block";
    block.textContent = "Player 2 won!";
    const removeTurn = document.querySelector("#active-player");
    removeTurn.setAttribute("style", "display:none;");
    body.appendChild(block);

    const testBlockDiv = document.querySelector("#test-block");
    const button = document.createElement("button");
    button.textContent = "Play again?";
    button.setAttribute("onClick", "window.location.reload();");
    testBlockDiv.appendChild(button);
    console.log("Player 2 won");
  };

  const generateBoard = () => {
    let i = 0;
    while (i < board.length) {
      const container = document.querySelector(".game-container");
      const block = document.createElement("div");
      block.id = "block";
      block.setAttribute("class", `block-${i}`);
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
      playerOneWon();
      console.log("Winner - X - row");
    } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
      const div3 = document.querySelector(".block-3");
      div3.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div5 = document.querySelector(".block-5");
      div5.setAttribute("style", "color: white; background: green;");
      playerOneWon();
      console.log("Winner - X - row");
    } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      const div7 = document.querySelector(".block-7");
      div7.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      playerOneWon();
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
      playerOneWon();
      console.log("Winner - X - row");
    } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
      const div1 = document.querySelector(".block-1");
      div1.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div7 = document.querySelector(".block-7");
      div7.setAttribute("style", "color: white; background: green;");
      playerOneWon();
      console.log("Winner - X - row");
    } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      const div5 = document.querySelector(".block-5");
      div5.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      playerOneWon();
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
      playerOneWon();
      console.log("Winner - X - row");
    } else if (board[6] === "X" && board[4] === "X" && board[2] === "X") {
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      playerOneWon();
      console.log("Winner - X - row");
    }
    // O row
    else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
      const div0 = document.querySelector(".block-0");
      div0.setAttribute("style", "color: white; background: green; ");
      const div1 = document.querySelector(".block-1");
      div1.setAttribute("style", "color: white; background: green;");
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
      const div3 = document.querySelector(".block-3");
      div3.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div5 = document.querySelector(".block-5");
      div5.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      const div7 = document.querySelector(".block-7");
      div7.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    }
    // O column
    else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
      const div0 = document.querySelector(".block-0");
      div0.setAttribute("style", "color: white; background: green;");
      const div3 = document.querySelector(".block-3");
      div3.setAttribute("style", "color: white; background: green;");
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
      const div1 = document.querySelector(".block-1");
      div1.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div7 = document.querySelector(".block-7");
      div7.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      const div5 = document.querySelector(".block-5");
      div5.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("winner - O - column");
    }
    // O diagonal
    else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
      const div0 = document.querySelector(".block-0");
      div0.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div8 = document.querySelector(".block-8");
      div8.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    } else if (board[6] === "O" && board[4] === "O" && board[2] === "O") {
      const div6 = document.querySelector(".block-6");
      div6.setAttribute("style", "color: white; background: green;");
      const div4 = document.querySelector(".block-4");
      div4.setAttribute("style", "color: white; background: green;");
      const div2 = document.querySelector(".block-2");
      div2.setAttribute("style", "color: white; background: green;");
      playerTwoWon();
      console.log("Winner - O - row");
    }
    // Draw condition
    else if (
      board[0] !== " " &&
      board[1] !== " " &&
      board[2] !== " " &&
      board[3] !== " " &&
      board[4] !== " " &&
      board[5] !== " " &&
      board[6] !== " " &&
      board[7] !== " " &&
      board[8] !== " "
    ) {
      const container = document.querySelector(".game-container");
      container.setAttribute(
        "style",
        "animation-name: myAnimation;animation-duration: 2000ms;animation-fill-mode: forwards;background-color:red;"
      );
      const body = document.querySelector("body");
      const block = document.createElement("div");
      block.id = "test-block";
      block.textContent = "DRAW";
      const removeTurn = document.querySelector("#active-player");
      removeTurn.setAttribute("style", "display:none;");
      body.appendChild(block);

      const testBlockDiv = document.querySelector("#test-block");
      const button = document.createElement("button");
      button.textContent = "Play again?";
      button.setAttribute("onClick", "window.location.reload();");
      testBlockDiv.appendChild(button);
      console.log("It's a draw bro!");
    }
  };
  return {
    board,
    generateBoard,
    winnerCheck,
    playerOneWon,
    playerTwoWon,
  };
})();

gameBoard.generateBoard();
gameBoard.winnerCheck();

// Idea 1: Freeze gameboard on a good looking state, blurry background and add a PLAY GAME button in the middle
// Which is going to start the game, so I might have to change names logic to only accept player names after the game has started
// Also display:none, on left and right player divs (also just had an idea of animated series, for example when the bot is about to lose, show robot sweating etc)
// Idea 2: Freeze gameboard like idea one, but instead fit the players and start button inside of the gameboard container on top of it z index (3D LAYERS idea)

// Notes to future self: There are no problems with the logic but my factorial function for players construction isn't used, so I could probably change some code to make it usefull 
// Combine the two change name buttons into a start game button in the middle of the gameboard

const gameController = (() => {
  const player = ["X", "O"];
  const names = [" ", " "];
  names[0] = "Player 1";
  names[1] = "Player 2";
  const changeNameP1 = () => {
    names[0] = document.querySelector("#player-one-name").value;
    activePlayer = player[0];
    activePlayerName = names[0];
    block.textContent = `${activePlayerName}'s turn`;
  }
  const changeNameP2 = () => {
    names[1] = document.querySelector("#player-two-name").value;
  }
  let activePlayer = player[0];
  let activePlayerName = names[0];
  const container = document.querySelector(".score-display");
  const block = document.createElement("div");
  block.id = "active-player";
  const changeTurn = () => {
    activePlayer = activePlayer === player[0] ? player[1] : player[0];
    activePlayerName = activePlayerName === names[0] ? names[1] : names[0];
    block.textContent = `${activePlayerName}'s turn`;
    container.appendChild(block);
    const hideLeft = document.querySelector(".player-one-window");
    hideLeft.id = "ui-hidden";
    const hideRight = document.querySelector(".player-two-window");
    hideRight.id = "ui-hidden";
  };
  const getActivePlayer = () => activePlayer;

  const ShowActivePlayerName = () => {
    block.textContent = `${activePlayerName}'s turn`;
    container.appendChild(block);
  };
  return {
    ShowActivePlayerName,
    changeTurn,
    getActivePlayer,
    changeNameP1,
    changeNameP2,
  };
})();

gameController.ShowActivePlayerName();

function test0() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[0] = playerToken;
  const getBlock = document.querySelector(".block-0");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test1() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[1] = playerToken;
  const getBlock = document.querySelector(".block-1");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test2() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[2] = playerToken;
  const getBlock = document.querySelector(".block-2");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test3() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[3] = playerToken;
  const getBlock = document.querySelector(".block-3");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test4() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[4] = playerToken;
  const getBlock = document.querySelector(".block-4");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test5() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[5] = playerToken;
  const getBlock = document.querySelector(".block-5");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test6() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[6] = playerToken;
  const getBlock = document.querySelector(".block-6");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test7() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[7] = playerToken;
  const getBlock = document.querySelector(".block-7");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}

function test8() {
  const playerToken = gameController.getActivePlayer();
  gameBoard.board[8] = playerToken;
  const getBlock = document.querySelector(".block-8");
  getBlock.textContent = playerToken;
  getBlock.id = "block-disabled";
  gameController.changeTurn();
  gameBoard.winnerCheck();
}
