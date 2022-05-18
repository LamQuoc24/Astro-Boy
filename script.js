//! -------------------------------- Variables ------------------------------- */

//Todo: Keyboard
let keyboard = document.querySelector("#keyboard");
let qwerty = document.querySelector(".qwerty");
let asdfgh = document.querySelector(".asdfgh");
let zxcvbn = document.querySelector(".zxcvbn");
let spacebar = document.querySelector(".spacebar");

//Todo: Display
let submitInput = document.querySelector(".submit-input");
let submitButt = document.querySelector(".submit-button");
let displayCenter = document.querySelector(".display-center");

//Todo: Countdown
let counter = 0;
let countNegative = document.querySelector(".count-negative");
countNegative.innerText = `${counter}/6`;

//Todo: Cowboy
let restart = document.querySelector(".restart");
let cowboy = document.querySelector(".cowboy");

//Todo: Audio
let audio = new Audio("./audio/the_color_violet.mp3");

//Todo: Modal
let modalGrey = document.querySelector(".modal-grey");
let modal = document.querySelector(".modal");
let moButt = document.querySelector(".mo-butt");

// const openModal = () => {
//   modalGrey.style.display = "flex";
// };

// const closeModal = () => {
//   modalGrey.style.display = "none";
// };

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
  audio.play();

  const openModal = () => {
    modalGrey.style.display = "flex";
  };

  const closeModal = () => {
    modalGrey.style.display = "none";
  };

  openModal();

  moButt.addEventListener("click", closeModal);
});

//! ----------------------------- Keyboard Mockup ---------------------------- */

let qwertyKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
let asdfghKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
let zxcvbnKeys = ["Z", "X", "C", "V", "B", "N", "M"];
let spacebarKeys = ["_"];

//Todo: QWERTYUIOP
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
  qwerty.append(key);
}

//Todo: ASDFGHJKL
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

//Todo: ZXCVBNM
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

//! ----------------------------- Cold Emptiness of Space----------------------- */

let failure = () => {
  alert("You lose, bitch");
  counter = 0;
};
//! ------------------------------ Win Condition (Space Cowboy) -------------- */
let win = () => {
  let rocket = document.querySelector(".rocket");
  rocket.style.backgroundImage = "URL('/imgs/rocket-win.gif')";
  restart.style.display = "block";
  cowboy.style.display = "block";

  //Todo: Restart Button
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
    for (let v = 0; v < keys.length; v++) {
      keys[v].style.backgroundColor = "";
    }

    audio.pause();
    audio.currentTime = 0;
  });
};

//! ---------------------------------- Countdown ------------------------------ */

// let startTimer = (duration, display) => {
//   let timer = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           timer = duration;
//       }
//   }, 1000);
// }

// window.onload = function () {
//   let fiveMinutes = 60 * 5,
//       display = document.querySelector('#time');
//   startTimer(fiveMinutes, display);
// };
