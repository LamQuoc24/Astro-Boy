//! -------------------------------- Variables ------------------------------- */

let keyboard = document.querySelector("#keyboard");
let qwerty = document.querySelector(".qwerty");
let asdfgh = document.querySelector(".asdfgh");
let zxcvbn = document.querySelector(".zxcvbn");
let spacebar = document.querySelector(".spacebar");

let submitInput = document.querySelector(".submit-input");
let submitButt = document.querySelector(".submit-button");

let displayCenter = document.querySelector(".display-center");

let counter = 0;
let countNegative = document.querySelector(".count-negative");
countNegative.innerText = `${counter}/6`;

let restart = document.querySelector(".restart");
let cowboy = document.querySelector(".cowboy");

//! ------------------------------ Word to Guess ----------------------------- */

let wordSubmitted = [];

submitButt.addEventListener("click", () => {
  event.preventDefault;
  wordSubmitted = [];
  let upperWord = submitInput.value;
  wordSubmitted.push(upperWord.toUpperCase());

  for (let i = 0; i < wordSubmitted[0].length; i++) {
    let displayDiv = document.createElement("div");
    displayDiv.classList.add("display-div");
    displayDiv.id = i;
    displayDiv.innerText = "   ";
    displayCenter.appendChild(displayDiv);
  }

  submitButt.disabled = true;
});

//! ----------------------------- Keyboard Mockup ---------------------------- */

let qwertyKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
let asdfghKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
let zxcvbnKeys = ["Z", "X", "C", "V", "B", "N", "M"];
let spacebarKeys = ["_"];

//!QWERTYUIOP
for (let k = 0; k < 10; k++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = qwertyKeys[k];
  key.innerText = qwertyKeys[k];

  key.addEventListener("click", () => {
    event.preventDefault;
    let wordSplit = wordSubmitted[0].split("");
    key.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    for (let l = 0; l < wordSplit.length; l++) {
      if (key.innerText === wordSplit[l]) {
        document.getElementById(l).innerText = key.innerText;
      }
    }
    //! ------------------------------ Win Condition ----------------------------- */

    let arr = [];
    for (let w = 0; w < wordSplit.length; w++) {
      arr.push(document.getElementById(w).innerText);
      if (JSON.stringify(arr) === JSON.stringify(wordSplit)) {
        win();
      }
    }

    //! ----------------------------- Lose Condition ----------------------------- */
    if (wordSplit.includes(key.innerText) === false) {
      counter++;
      countNegative.innerText = `${counter}/6`;
      if (counter > 5) {
        failure();
      }
    }
  });
  qwerty.append(key);
}

//!ASDFGHJKL
for (let l = 0; l < 9; l++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = asdfghKeys[l];
  key.innerText = asdfghKeys[l];

  key.addEventListener("click", () => {
    event.preventDefault;
    let wordSplit = wordSubmitted[0].split("");
    key.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    for (let l = 0; l < wordSplit.length; l++) {
      if (key.innerText === wordSplit[l]) {
        document.getElementById(l).innerText = key.innerText;
      }
    }

    let arr = [];
    for (let w = 0; w < wordSplit.length; w++) {
      arr.push(document.getElementById(w).innerText);
      if (JSON.stringify(arr) === JSON.stringify(wordSplit)) {
        win();
      }
    }

    if (wordSplit.includes(key.innerText) === false) {
      counter++;
      countNegative.innerText = `${counter}/6`;
      if (counter > 5) {
        failure();
      }
    }
  });
  asdfgh.append(key);
}

//!ZXCVBNM
for (let m = 0; m < 7; m++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = zxcvbnKeys[m];
  key.innerText = zxcvbnKeys[m];

  key.addEventListener("click", () => {
    event.preventDefault;
    let wordSplit = wordSubmitted[0].split("");
    key.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    for (let l = 0; l < wordSplit.length; l++) {
      if (key.innerText === wordSplit[l]) {
        document.getElementById(l).innerText = key.innerText;
      }
    }

    let arr = [];
    for (let w = 0; w < wordSplit.length; w++) {
      arr.push(document.getElementById(w).innerText);
      if (JSON.stringify(arr) === JSON.stringify(wordSplit)) {
        win();
      }
    }

    if (wordSplit.includes(key.innerText) === false) {
      counter++;
      countNegative.innerText = `${counter}/6`;
      if (counter > 5) {
        failure();
      }
    }
  });
  zxcvbn.append(key);
}

//! ------------------------- Cold Emptiness of Space ----------------------- */

/* ----------------------------- Lose Condition ----------------------------- */

let failure = () => {
  alert("You lose, bitch");
  counter = 0;
};
/* ------------------------------ Win Condition (Space Cowboy) -------------- */
let win = () => {
  let rocket = document.querySelector(".rocket");
  rocket.style.backgroundImage = "URL('/imgs/rocket-win.gif')";
  restart.style.display = "block";
  cowboy.style.display = "block";
  
  restart.addEventListener("click", () => {
    counter = 0;
    countNegative.innerText = `${counter}/6`;
    rocket.style.backgroundImage = "URL('/imgs/State=1 Error.png')";
    restart.style.display = "none";
    cowboy.style.display = "none";
    submitInput.value = "";
    submitButt.disabled = false;

    while (displayCenter.firstChild) {
      displayCenter.removeChild(displayCenter.firstChild);      
    }

    let keys = document.querySelectorAll(".key");
    for (let v = 0; v < keys.length; v++){
      keys[v].style.backgroundColor = ""
    }
  });
};

