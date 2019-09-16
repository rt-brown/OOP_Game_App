/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*const newGame = new Game();
console.log(newGame.missed);*/

const game = new Game();
game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});