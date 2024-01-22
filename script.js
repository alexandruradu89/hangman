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
    document.getElementById("inputWord").value = "";
    length = 2 * word.length;
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
    if (noLifes <= 0) {
        gameOver();
        alert("Game over!");
    }
    let letter = document.getElementById("inputLetter").value;
    if (isNotLetter(letter)) {
        alert("Please input a letter");
    } else {
        return letter;
    }
}

function checkLetter() {
    const array = displayWord.split("");
    let letter = getLetter().toLowerCase();
    let notCorrect = true;
    for(let i = 0; i < length; i += 2) {
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
    if (!displayWord.includes("_") && displayWord != "") {
        alert("Winner!!!");
    }
    setWord();
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
