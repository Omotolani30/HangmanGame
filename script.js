const wordDisplay = document.querySelector(".word-display");
const guessText = document.querySelector(".guess-text");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".modal");
const resetModal = document.querySelector(".resetModal");
const playAgain = document.querySelector(".play-again");
const selectedCategory = wordList["random"];
const navBar = document.querySelector(".navbar");


let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

function openCat() {
  navBar.style.display = "flex"
  resetModal.style.display = "none"
}
function closeCat() {
  navBar.style.display = "none"
}
function openNav() {
  resetModal.style.display = "flex"
}
function continueGame() {
  resetModal.style.display = "none"
}

// restart game
function resetGame() {
  correctLetters = [];
  wrongGuessCount = 0;
  guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
  gameModal.classList.remove("show");
}

// to get the word list
function getRandomWord() {
  const { word, hint } = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
  currentWord = word;
  console.log(word);
  document.querySelector(".hint span").innerText = hint;
  resetGame();
}

// gameModal
function gameOver(isVictory) {
  setTimeout(() => {
    const modalText = isVictory? `You found the word:` : `The correct word was:`;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? `You Win` : `Game Over!`
    }`;
    gameModal.querySelector("p").innerHTML = `${modalText} <b class="uppercase">${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 400);
}

// input field controlled by keyboard
const myFunction = (event) => {
  let key = event.key.toLowerCase();
  if (!/^[a-z]$/.test(key)) return;

  if (currentWord.includes(key)) {
    if (!correctLetters.includes(key)) {
      [...currentWord].forEach((letter, index) => {
        if (letter === key) {
          correctLetters.push(letter);
          wordDisplay.querySelectorAll("li")[index].innerText = letter;
          wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
      });
    }
  } else {
    checkGuessStatus();
  }
  guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  checkGameStatus();
}

// input field controlled by virtual keyboard
const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    checkGuessStatus();
  }
  button.disabled = true;
  guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  checkGameStatus();
};

const checkGuessStatus = () => {
    if (wrongGuessCount >= 6) {
        wrongGuessCount;
      } else {
        wrongGuessCount++;
      }
}

const checkGameStatus = () => {
  if (wrongGuessCount === maxGuesses) {
    gameOver(false);
  } else if (correctLetters.length === currentWord.length) {
    gameOver(true);
  }
};

// keyboard btns
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}


function howToPlay() {
  let ruleList = document.getElementById("ruleList");
  let playBox = document.getElementById("playBox");
  ruleList.style.display = "flex"
  playBox.style.display = "none" 
}
function goBackHome(){
  ruleList.style.display = "none"
  playBox.style.display = "flex"
}

getRandomWord();
playAgain.addEventListener("click", getRandomWord);