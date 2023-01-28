/* eslint-disable no-console */
// GameBoard Module (one of something)

const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  const saySymbol = () => console.log(`my symbol is ${symbol}`);
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName, getName, getSymbol, saySymbol };
};

const jim = Player("Jim", "no");
jim.sayName();
jim.saySymbol();

// function test() {
//   const playerToken = jim.getSymbol();
//   gameBoard.board[1] = playerToken;
// }

const gameBoard = (() => {
  const board = ["X", "O", "X", "O", "X", "X", "O", "X", "X"];
  const generateBoard = () => {
    let i = 0;
    while (i < board.length) {
      const container = document.querySelector(".game-container");
      const block = document.createElement("div");
      block.id = "block";
      block.setAttribute("class", `block-${i}`);
      block.textContent = board[i];
      block.setAttribute("onclick", "gameBoard.test()");
      container.appendChild(block);
      i += 1;
    }
  };
  const test = () => {
    scoped();
    // const playerToken = jim.getSymbol();
    // gameBoard.board[1] = playerToken;
  };
  return {
    board,
    generateBoard,
    test,
  };
})();

function scoped() {
  const playerToken = jim.getSymbol();
  gameBoard.board[3] = playerToken;
  const container = document.querySelector(".game-container");
  container.replaceChildren();
  gameBoard.generateBoard();
}

gameBoard.generateBoard();

// function AddMarkOnBlock() {
//   const divName
//   if (divName = "")
// }

// When player click on block-1
// gameBoard.board[1] = activePlayer.symbol;

// WHen user click on dom element, get user.token (which is X or O) and gameBoard.board[1] = user.token

// idea : if player1 click gameboard.board[3] then show X on DOM-box-[3] then change turn to player 2

// Player Factory function (multiple of something)

// function test() {
//   const testArray = "1";
//   gameBoard.gameBoard.push(testArray);
//   document.getElementById("arrPrint").innerHTML = JSON.stringify(
//     gameBoard.gameBoard,
//     null,
//     2
//   );
// }

// function addMarkToBlockOne() {
//   const block1 = document.querySelector(".block-1");
//   const content = document.createElement("div");
//   content.classList.add("content");
//   content.textContent = "X";
//   block1.appendChild(content);
// }
