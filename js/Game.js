/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game */

     createPhrases(){
         const listOfphrases = 
         [
             'Where is my phone',
             'I need coffee',
             'Go Cardinals',
             'I love my wife',
             'I love my son'
        ];

        const newListofPhrases = [];

        listOfphrases
        .forEach((phrase) => {
            let newPhraseObject = new Phrase(phrase);
            newListofPhrases.push(newPhraseObject);
        })
        
        return newListofPhrases;
     };
/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
     getrandomPhrase(){
        function randomNumber(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        };
        
        const number = randomNumber(0,4);

        return this.phrases[number]; 
     }
/**
 * Begins game by selecting a random phrase and displaying it to user
 */
     startGame(){
        document.getElementById('overlay').style.visibility = "hidden";
        this.activePhrase = this.getrandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     };

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */
     checkForwin(){
        const allLetters = Array.from(document.querySelectorAll('.phrase-ul > li'));
        const visibleLetters = Array.from(document.querySelectorAll("[class$=show]"));
        const filteredArray = allLetters.filter((element) => {
            return element.className != 'space'
        })
        if (filteredArray.length === visibleLetters.length) {
            return true
        } else {
            return false
        }
     }

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
     removeLife(){
        this.missed += 1
        const hearts = document.querySelectorAll('.tries > img');
        hearts[this.missed-1].src = 'images/lostHeart.png';
        if (this.missed === 5) {
            this.gameOver();
        }
     };

/**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(){
        const overlay = document.getElementById('overlay');
        overlay.style.visibility = "visible";
        const overlayH1 = document.getElementById('game-over-message');
        if (this.checkForwin() === true ){
            overlay.className = 'win';
            overlayH1.textContent = 'Congrats You Have Won!';
        } else {
            overlay.className = 'lose'
            overlayH1.textContent = 'Game Over. Please Try Again.'
        }
    }

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
    handleInteraction(button){
        button.disabled = true;
        const checkLetter = this.activePhrase.checkLetter(button.textContent);
        if (checkLetter === true) {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button);
            this.checkForwin();
            if (this.checkForwin() === true) {
                setTimeout(() => {this.gameOver()}, 1000) 
            }
        } 
        
        if(checkLetter === false){
            button.className = 'wrong';
            this.removeLife();
        }
    }

    resetGame() {

        const phraseUl = document.querySelector('.phrase-ul');
    const liElements = document.querySelectorAll('.phrase-ul li');
    for (let index = 0; index < liElements.length; index++) {
        phraseUl.removeChild(liElements[index]);
     }

     
    const lifeImageArray = Array.from(document.querySelectorAll('li.tries img'));
 
     for (let i = 0; i < lifeImageArray.length; i += 1) {
       lifeImageArray[i].setAttribute('src', 'images/liveHeart.png');
     }


    const keyboardButtonsArray = Array.from(document.querySelectorAll('div#qwerty button'));
    
        for (let i = 0; i < keyboardButtonsArray.length; i += 1) {
          keyboardButtonsArray[i].className = 'key';
          keyboardButtonsArray[i].style.opacity = 1.0;
          keyboardButtonsArray[i].disabled = false;
        }
    
    
      };

 };

 