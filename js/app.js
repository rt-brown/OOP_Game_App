/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGamebutton = document.getElementById('btn__reset');


startGamebutton.addEventListener('click', () => {
    game = new Game();
    game.resetGame();
    game.startGame();
    
    
    
})


const arrayOfkeys = Array.from(document.getElementsByClassName('key'));
    
    arrayOfkeys.forEach((element) => {
        element.addEventListener('click', () =>{
            game.handleInteraction(element);
        })
    })


