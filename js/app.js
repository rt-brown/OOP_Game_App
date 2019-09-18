/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*const newGame = new Game();
console.log(newGame.missed);*/


const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);