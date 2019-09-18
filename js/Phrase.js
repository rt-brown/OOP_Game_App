/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }
/**
 * Display phrase on game board
 */
     addPhraseToDisplay(){
        const arrayOfcharacters = randomPhrase.phrase.split('');
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;

        arrayOfcharacters.forEach(element => {

            
            if (/[a-z]/.test(element)) {
                
            const phraseLI = document.createElement('li');
            const textNode = document.createTextNode(`${element}`);
            phraseLI.appendChild(textNode);
            phraseUl.appendChild(phraseLI);
            phraseLI.setAttribute('class', `hide letter ${element}`);
            } 
            else {
            const phraseLI = document.createElement('li');
            const textNode = document.createTextNode(`${element}`);
            phraseLI.appendChild(textNode);
            phraseUl.appendChild(phraseLI);
            phraseLI.setAttribute('class', 'space');
            }
        });
        
     }
 }

