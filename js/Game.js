/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

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

     get randomPhrase(){
        function randomNumber(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        };
        
        const number = randomNumber(0,4);

        return this.phrases[number]; 
     }
 };