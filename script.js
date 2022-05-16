//! -------------------------------- Variables ------------------------------- */

let keyboard = document.querySelector("#keyboard");
let qwerty = document.querySelector(".qwerty");
let asdfgh = document.querySelector(".asdfgh");
let zxcvbn = document.querySelector(".zxcvbn");
let spacebar = document.querySelector(".spacebar");

let submitInput = document.querySelector(".submit-input");
let submitButt = document.querySelector(".submit-button");

let displayCenter = document.querySelector(".display-center");

//! ------------------------------ Word to Guess ----------------------------- */

let wordSubmitted = [];

submitButt.addEventListener("click", () => {
  wordSubmitted = [];
  wordSubmitted.push(submitInput.value);
  let wordSplit = wordSubmitted[0].split("");
  console.log(wordSplit);

  for (let i = 0; i < wordSubmitted[0].length; i++) {
    let displayDiv = document.createElement("div");
    displayDiv.classList.add("display-div");
    displayDiv.innerText = "   ";
    displayCenter.appendChild(displayDiv);
  }
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
  //! ---------------------------- //!Clicky clicky ---------------------------- */
  key.addEventListener("click", () => {
    console.log(wordSubmitted[0]);
    console.log(key.innerText);
    //     wordSubmitted[0].forEach(letter =>{
    // console.log(letter);
    //     })
  });
  //! -------------------------------------------------------------------------- */
  qwerty.append(key);
}

//!ASDFGHJKL
for (let l = 0; l < 9; l++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = asdfghKeys[l];
  key.innerText = asdfghKeys[l];
  // key.addEventListener('click', ()=>{
  // })
  asdfgh.append(key);
}

//!ZXCVBNM
for (let m = 0; m < 7; m++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = zxcvbnKeys[m];
  key.innerText = zxcvbnKeys[m];
  // key.addEventListener('click', ()=>{
  // })
  zxcvbn.append(key);
}

//!SPACEBAR
for (let n = 0; n < 1; n++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = spacebarKeys[n];
  key.innerText = spacebarKeys[n];
  // key.addEventListener('click', ()=>{
  // })
  spacebar.append(key);
}

//! ------------------------- Cold Emptiness of Space ------------------------ */
