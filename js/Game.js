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
             'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
             'It is during our darkest moments that we must focus to see the light.',
             'Never let the fear of striking out keep you from playing the game.',
             "You miss 100% of the shots you don't take.",
             "Believe you can and you're halfway there."
        ];

        const newListofPhrases = [];

        listOfphrases
        .forEach((phrase) => {
            let newPhraseObject = new Phrase(phrase);
            newListofPhrases.push(newPhraseObject);
        })
        
        return newListofPhrases;
     };
 };