             
// create lettes
const letters = 'abcdefghijklmnopqrstuvwxyz';
let  lettersArray = Array.from(letters),
    letteringContainer = document.querySelector('.letter');


lettersArray.forEach(letter => {
    // create span
    let span = document.createElement('span'),
        Theletter = document.createTextNode(letter);
    
    // append Theletter to span
    span.appendChild(Theletter);
    //set class in span
    span.setAttribute('class', 'letter-box');
    //append span to letteringContainer
    letteringContainer.appendChild(span);
})

const words = {
    programing:['php', 'javaScript', 'python', 'mySql', 'scala', 'fortran', 'r', 'go'],
    movies : ['Coco', 'Up', 'Interastler', 'Inception', 'memento', 'Whiplash', 'parasite', 'prestinge'],
    people:['Albert Einstein', 'Alexander', 'Clepatra', 'Mahatma Ghandi', 'hichcock'] , 
    countries : ['Yemen', 'Qatar', 'Egypt', 'syria', 'Bahrain', 'palestine']
}

let allKeys = Object.keys(words);

let randompropNumper = Math.floor(Math.random() * allKeys.length),
    randomName = allKeys[randompropNumper],
    randomPropValue = words[randomName];
//Random Number Depened On Words
let randomValueNomber = Math.floor(Math.random() * randomPropValue.length),
    // the chosen Word
    randomValueVAlue = randomPropValue[randomValueNomber];
//se cateogry info
document.querySelector('.game-info .categor span').innerHTML = randomName;



// Slect Letter guess Element
let lettersGuessContainer = document.querySelector('.letter-guess'),
    // Convert Chosen Word To Array
    lettersAndSpace = Array.from(randomValueVAlue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {
    // create empty span
    let emptySpan = document.createElement('span');
    // if Letter Is Space
    if (letter === ' ') {
        //Add class The Span Empty
     emptySpan.className = 'has-space';   
    }
    // append Span the guess Container
    lettersGuessContainer.appendChild(emptySpan);
});

let GuessSpans = document.querySelectorAll('.letter-guess span');
let WrongAttempts = 0,
    theDraw = document.querySelector('.hangmane-draw');
// handile clicking on letters
document.addEventListener('click', (e) => {
    
    // set The status false
   let theStatus = false;
    
    if (e.target.className == 'letter-box') {
        e.target.classList.add('clicked');
        // get clicked letters
    let HteClicledLetter = e.target.innerHTML.toLowerCase(),
        // the chosen word
        TheChosenWord = Array.from(randomValueVAlue.toLowerCase());
        
        TheChosenWord.forEach((wordLetter, wordindex) => {
            // if the clicked letter Aqual to one chosen  word letter
            if (HteClicledLetter == wordLetter) {
                // set status to correct
                theStatus = true;
                // loop on All guess span 
             GuessSpans.forEach((span, spanIndex) => {
                 
                 if (wordindex === spanIndex) {
                    span.innerHTML = HteClicledLetter;
                 }
             });
            }
        });
        
        // if letters is wrong
        if (theStatus !== true) {
            // icrease the Wrong Attempts
            WrongAttempts++;
            //
            theDraw.classList.add(`wrong-${WrongAttempts}`);
            // aplay fill sound
            document.getElementById('fill').play();
            // play success sound
            document.getElementById('success').play();
            //
            if (WrongAttempts === 8) {
                //end game
                endGame();
                // add class lettersContainer
                letteringContainer.classList.add('finshed');
                
            }
        } else{
            // play success sound
            document.getElementById('success').play();
        }
        
    }
});

// function the end game
function endGame() {
    
         //create element div 
    let divElement = document.createElement('div'),
        //create textnode div 
        divElementText = document.createTextNode(`Game Over, The Word Is : ${randomValueVAlue}`);
    //apped divElementText to divElement
    divElement.appendChild(divElementText);
    // set class in divElement
    divElement.className = 'popup';
    //append divElement to body
    document.body.appendChild(divElement);
}











