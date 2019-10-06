/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGamebutton = document.getElementById('btn__reset');

startGamebutton.addEventListener('click', () => {
    const phraseUl = document.querySelector('.phrase-ul');
    const liElements = document.querySelectorAll('.phrase-ul li');
    const lifeImage = document.querySelectorAll('li.tries img');
    const lifeImageArray = Array.prototype.slice.call(lifeImage);
    const keyboardButtons = document.querySelectorAll('div#qwerty button');
    const keyboardButtonsArray = Array.prototype.slice.call(keyboardButtons);
        
    for (let index = 0; index < liElements.length; index++) {
           phraseUl.removeChild(liElements[index]);
        }

        for (let i = 0; i < lifeImageArray.length; i += 1) {
            lifeImageArray[i].setAttribute('src', 'images/liveHeart.png');
          }

        for (let i = 0; i < keyboardButtonsArray.length; i += 1) {
            keyboardButtonsArray[i].className = 'key';
            keyboardButtonsArray[i].style.opacity = 1.0;
            keyboardButtonsArray[i].disabled = false;
          }

    game = new Game();
    game.startGame();
    
    const arrayOfkeys = Array.from(document.getElementsByClassName('key'));
    
    arrayOfkeys.forEach((element) => {
        element.addEventListener('click', () =>{
            console.log(`clicked ${element.textContent} button`);
            game.handleInteraction(element);
        })
    })
})




