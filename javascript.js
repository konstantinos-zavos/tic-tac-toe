// GameBoard Module (one of something)
const gameBoard = (() => {
    const gameBoard = ["X", "O", "X"];
    return {
    gameBoard
    };
})();


// Player Factory function (multiple of something)
const Player = (name) => {
    const getName  = () => name;
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName, getName};
}

const jim = Player('Jim');
jim.sayName();

function test() {
    let testArray = "1";
    gameBoard.gameBoard.push(testArray);
    document.getElementById("arrPrint").innerHTML = JSON.stringify(gameBoard.gameBoard, null, 2);
}

function addMarkToBlockOne() {
    const block1 = document.querySelector('.block-1');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'X';
    block1.appendChild(content);
}

//  I have created an array inside my object
//  I have created a player object that just prints a name
//  pushing items in the array inside the object
//  gameBoard.gameBoard.push(testArray); This work with strings
//  If you push an array it will push another array inside the array    
// I want to create functions that insert X or O on DOM elements

// Game should start with player 1 and X (white piece) and then O (black pieces)