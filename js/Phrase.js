/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay(){
        const newGame = new Game(); 
        const randomPhrase = newGame.randomPhrase;
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
            } else {
                const phraseLI = document.createElement('li');
            const textNode = document.createTextNode(`${element}`);
            phraseLI.appendChild(textNode);
            phraseUl.appendChild(phraseLI);
            phraseLI.setAttribute('class', 'space');
            }
        });

        //I think I need to now write a .foreach() loop that checks if it's a letter and if so add this HTML, if it's a space add this HTML.

        /*const arrayOfletters = arrayOfcharacters.filter((value) => {
            return /\S/.test(value);
        })
        
        return arrayOfletters;*/
        
     }
 }

