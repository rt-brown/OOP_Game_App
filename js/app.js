/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGamebutton = document.getElementById('btn__reset');

startGamebutton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    game.checkForwin();
    game.removeLife();
})