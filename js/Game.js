/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
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
             'The New York Giants suck',
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
     get randomPhrase(){
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
        this.randomPhrase;
        phrase.addPhraseToDisplay();
        this.activePhrase = this.randomPhrase;
     };
 };