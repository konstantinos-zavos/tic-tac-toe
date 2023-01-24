const gameBoard = (() => {
  const gameBoard = ["X", "O", "X"];
  return {
    gameBoard
  };
})();

function test() {
    let testArray = "?";
    gameBoard.gameBoard.push(testArray);
}

const Player = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
}

//  I have created an array inside my object
//  I have created a player object that just prints a name
//  pushing items in the array inside the object
//  gameBoard.gameBoard.push(testArray); This work with strings
//  If you push an array it will push another array inside the array