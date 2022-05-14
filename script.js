//! -------------------------------- Variables ------------------------------- */

let input = document.querySelector("#input");
let toGuess = document.querySelector("#word-button");

for (let i = 0; i < 27; i++) {
  document.createElement("div");
}

//! ----------------------------- Keyboard Mockup ---------------------------- */

let keyboard = document.querySelector("#keyboard");

for (let k = 0; k < 26; k++) {
  let key = document.createElement("div");
  key.classList.add("key");
  key.id = k;
  key.innerText = k;
  key.addEventListener('click', ()=>{
                 //!The innerText is compared to word array
  })
  keyboard.append(key);
}
