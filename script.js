let noLifes = 7;
let displayWord = "";
let word = "";
let length = 0;

function getWord() {
    if (word != "") {
        alert("Start a new game?");
        gameOver();
        return;
    }
    word = document.getElementById("inputWord").value.toLowerCase();
    console.log("inputword = " + word);
    length = 2 * word.length;
    console.log("len = ", length);
    for (let i = 0; i < length; ++i) {
        if (i % 2 == 0) {
            displayWord += "_";
        } else {
            displayWord += " ";
        }
    }
    setWord();
    setNoLives();
}

function getLetter() {
    console.log("working getLetter");
    if (noLifes <= 0) {
        gameOver();
        alert("Game over!");
    }
    let letter = document.getElementById("inputLetter").value;
    console.log("letter = " + letter);
    if (isNotLetter(letter)) {
        alert("Please input a letter");
    } else {
        return letter;
    }
}

function checkLetter() {
    console.log("working checkLetter");
    const array = displayWord.split("");
    let letter = getLetter().toLowerCase();
    let notCorrect = true;
    console.log("letter = " + letter);
    for(let i = 0; i < length; i += 2) {
        console.log("word = " + word);
        console.log("i = " + i + " word.charAt(i) = " + word.charAt(i));
        if (letter === word.charAt(i / 2)) {
                array[i] = word.charAt(i / 2);
                notCorrect = false;
        }
    }
    displayWord = array.join("");
    if (notCorrect) {
        loseLife();
    }
    if (noLifes <= 0) {
        gameOver();
        alert("Game over!");
    }
    if (!(displayWord.includes("_"))) {
        alert("Winner!!!");
    }
    setWord();
    console.log("reWord = " + displayWord);
}

function setNoLives() {
    document.getElementById("Lives").textContent = noLifes;
}

function loseLife() {
    --noLifes;
    setNoLives();
}

function gameOver() {
    noLifes = 7;
    displayWord = "";
    word = "";
    length = 0; 
}

function isNotLetter(letter) {
    if ((letter.toLowerCase() == letter.toUpperCase()) && (letter.length > 1)) {
        return 1;
    }
    return 0;
}

function setWord() {
    document.getElementById("display").textContent = displayWord;
}
