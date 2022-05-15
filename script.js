//! -------------------------------- Variables ------------------------------- */

let input = document.querySelector("#input");
let toGuess = document.querySelector("#word-button");

for (let i = 0; i < 27; i++) {
  document.createElement("div");
}

//! ----------------------------- Keyboard Mockup ---------------------------- */

let qwerty =['Q','W','E','R','T','Y','U','I','O','P'];


let keyboard = document.querySelector("#keyboard");

//!QWERTYUIOP
for (let k = 0; k < 10; k++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = qwerty[k];
  key.innerText = qwerty[k];
  // key.addEventListener('click', ()=>{
  // })
  keyboard.append(key);
}


//!ASDFGHJKL


//!ZXCVBNM

//! ------------------------- Cold Emptiness of Space ------------------------ */
