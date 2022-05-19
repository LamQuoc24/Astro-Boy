# Astro-Boy
> Stranded on the moon, the lone survivor of a space crash, an astronaut must repair the remains of his dilapadated ship in order to make it back to Earth. With resources running out, he only has a limited amount of time (6 turns) before the cold dusty haze of loneliness settles eternally in his mind. Can he do it?
> A two player game where a user inputs a hidden word to be guessed by another player. The second player has 6 turns to guess correctly or until the song in the background finishes.

## General Info
The game is called Astro Boy on the pun of the original title: Space Man. The game is also refered to as Snowman and Hangman. The title is also a nod to the famous classic manga: Astro Boy. The project assignment was designed to test my abilities with HTML, CSS, and Vanilla Javascript. A lot of the small features are implemented with a space theme in mind.

## Technologies
* HTML
* CSS
* Vanilla Javascript
* Figma

## Setup
* Fork Repo
* Copy SSH Link
* Go to any folder where you'd like to let Astro Boy live
* git clone /link/
* https://astro-booooooi.netlify.app/

## Code Example

Here is a snippet of my button code that initializes the divs to have the hidden word appear in the center as boxes and the music to start.

//! ------------------------------ Clicky Clicky ----------------------------- */

let wordSubmitted = [];

submitButt.addEventListener("click", function clickyclick() {
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

  openModal();

  const closeModal = () => {
    modalGrey.style.display = "none";
  };

  moButt.addEventListener("click", closeModal);
  
## Features
* The song playing in the background is a nod to my gf when we first started dating. There's a line about stars.
* The if conditions are attached to the countdown timer to send alerts, teasing the player they're running out of time.
* There are different animations for win and lose conditions

To-do List:
* Positioning refactor for button elements
* Implementing a two player feature to play remotely (instead of next to each other)
* Cover page that initializes the word
* One player mode where the word to guess is extrapolated from an API

## Status
Project is: _largely finished_. New features and UX aesthetics to be implemented.

## Inspiration
Got to give it up to my main man (instructor) Leo. Without this game suggestion, I can proudly say I created the game logic from scratch. It was nice to actualize code from brain to screen.

## Contact
Created by ME! ME ME ME ME ME! Muahahahahahahahaha
