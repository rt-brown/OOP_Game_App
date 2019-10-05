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
        const arrayOfcharacters = this.phrase.split('');
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;
        phraseUl.className = 'phrase-ul';

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

     /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

     checkLetter(letter){
        let count = 0;
        const phraseArray = Array.from(document.querySelectorAll('.phrase-ul > li'));
        //console.log(phraseArray);
        const newArray = phraseArray.filter((element) => {
            return element.className != 'space'
        })
        
        newArray.forEach((currentValue) => {
            
            if (letter === currentValue.textContent) {
                console.log('true');
                return true;
                
            } 
            
            
            /*if (letter != currentValue.textContent) {
                count +=1
                console.log(count);
                
            }
            
            if (count === newArray.length){
                //console.log(newArray.length);
                console.log('all false');
                //game.removeLife();
                return false
            }*/
        }); 
        
        return false;
     }

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */

     showMatchedLetter(letter){
         let matchedLetter = document.getElementsByClassName(`hide letter ${letter}`);
         for (let index = 0; index < matchedLetter.length; index++) {
             matchedLetter[index].className = `show letter ${letter}`
         }
     }
 }

