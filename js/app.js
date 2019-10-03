/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGamebutton = document.getElementById('btn__reset');


startGamebutton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    //game.checkForwin();
    const arrayOfkeys = Array.from(document.getElementsByClassName('key'));
    arrayOfkeys.forEach((element) => {
        element.addEventListener('click', () =>{
            //console.log(`clicked ${element.textContent} button`);
            game.handleInteraction(element);
        })
    })
})

