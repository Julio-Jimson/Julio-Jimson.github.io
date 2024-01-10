// Navigation for all pages

// Navigation for all pages

const Nav = `
    <li><a href="index.html"> home  &#127968;</a></li>
 
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("navigation");
mainNav.innerHTML = Nav;

// const navbar_Logo = document.createElement("div")
// navbar_Logo.classList.add("Logo")
// navbar_Logo.innerHTML = Logo

document.querySelector(".siteheader").append(mainNav);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////              WORDLE    //////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import words
//require("./five.js");
import { WORDSFive } from "./five.js";
import { WORDSSix } from "./six.js";
import { WORDSSeven } from "./seven.js";
import { WORDSEight } from "./eight.js";

//let WORDSFive = require("./five");
//import("./six.js");
// import { WORDS5 } from "./5.js";

// type: module;
//create wordle with input guesses

// each of our text files contains 1000 words
//let LISTSIZE = 1000;
let wordlist = [];
let status = [];
let choice = [];
let won = false;
let guesses = 0;
let stored = 0;
let game_state = 0;
// values for colors and score (EXACT == right letter, right place; CLOSE == right letter, wrong place; WRONG == wrong letter)
let EXACT = 2;
let CLOSE = 1;
let WRONG = 0;
let randNum;
let wordsize = 0;
// ANSI color codes for boxed in letters
let GREEN = "F0F8FF";
let YELLOW = "FFD700";
let RED = "B22222";
let RESET = "e[0;39m";
const regex1 = /[a-zA-Z]+/g;
let regex = /[^a-z]+/g;

const start = function (k) {
  // ensure proper usage
  // TODO #1

  do {
    k = prompt(
      "How long of a word do you want to guess for? (give # between 5-8)"
    );
  } while (k <= 4 || k > 8 || k == regex);
  alert("your entry is valid");

  wordsize = k;
  console.log(`Okay your word is ${k} long`);

  // ensure argv[1] is either 5, 6, 7, or 8 and store that value in wordsize instead
  // TODO #2
  // open correct file, each file has exactly LISTSIZE words

  if (wordsize == 5) {
    wordlist = WORDSFive;
    console.log("we are going to get you a word size of 5 now");
  } else if (wordsize == 6) {
    wordlist = WORDSSix;
    console.log("we are going to get you a word size of 6 now");
  } else if (wordsize == 7) {
    wordlist = WORDSSeven;
    console.log("we are going to get you a word size of 7 now");
  } else if (wordsize == 8) {
    wordlist = WORDSEight;
    console.log("we are going to get you a word size of 8 now");
  } else {
    console.log("You did not give us a number between 5-8");
    return 1;
  }

  ///assign a random word from list
  function getRandomWord() {
    randNum = wordlist[Math.floor(Math.random() * wordlist.length)];
  }

  for (let i = 0; i <= 0; i++) {
    let randNum;
    randNum = getRandomWord(wordlist[i]);
  }
  console.log("word is", `'${randNum}'`);
  // allow one more guess than the length of the word
  guesses = wordsize * 1 + 1;
  // let won = false;

  // print greeting, using ANSI color codes to demonstrate
  console.log(GREEN, "This is WORDLE50");

  console.log(
    `"You have ${guesses} tries to guess the ${wordsize}-letter word I'm thinking of\n"`
  );

  /////////////// making the grid for the game.////////////////////////////////////////

  function Board() {
    let board = document.getElementById("game-board-wordle");
    //let grid = document.createElement("grid");

    for (let i = 0; i < guesses; i++) {
      let row = document.createElement("ol");
      row.className = "letter-rows";
      row.className = `${i}`;

      for (let j = 0; j < wordsize; j++) {
        let box = document.createElement("li");
        box.className = "letter-box";
        row.appendChild(box);
      }
      board.appendChild(row);
      //grid.prepend(board);
    }
  }
  //grid.appendChild("game-board");
  Board();
  return guesses;
};
////////////////////////////////////////////////////////////////////////////////////////
// make this into another function
const get_guess = function () {
  let guess = "";

  for (let i = 0; i < guesses; i++) {
    // guesses = guesses - 1;

    if (document.getElementById("myText").value == guess) {
      return 1;
    } else {
      guess = document.getElementById("myText").value;

      other(won, randNum, wordsize, guess, guesses);
      guesses = guesses - 1;
    }
    alert("your guess has been recorded!");

    // ensure users actually provide a guess that is the correct length
    // TODO #3
  }
  // run last check?
  return 1;
};

const other = function (won, randNum, wordsize, guess, guesses) {
  // obtain user's guess
  //guess = get_guess(wordsize);
  // array to hold guess status, initially set to zero
  status.length = wordsize;

  // set all elements of status array initially to 0, aka WRONG
  // TODO #4
  for (let k = 0; k < wordsize; k++) {
    status[k] = WRONG;
  }

  // Calculate score for the guess
  let score = check_word(guess, wordsize, status, choice);

  console.log(
    `"Guess was ${guess} with a score of ${score}! you need a score of ${
      wordsize * 2
    }" `
  );
  // Print the guess function

  print_word(guess, wordsize, status, guesses);

  // if they guessed it exactly right, set terminate loop
  if (score == EXACT * wordsize) {
    won = true;
  }

  //  if (guesses == 0) {
  if (won == true) {
    console.log("you won!");
    alert("you won! congratulations");
  } else if (guesses == 1) {
    console.log("You lost! :( the correct word was", randNum);
    alert(`"you lost. sorry try again. the word was", ${randNum}`);
  }
  console.log(`you have ${guesses - 1} guesses left!`);
  // that's all folks!
  return;
};
//};
// Print the game's result
// TODO #7
///////////////////////////////
const check_word = function (guess, wordsize, status, choice) {
  let score = 0;

  // compare guess to choice and score points as appropriate, storing points in status
  // TODO #5
  // HINTS
  // iterate over each letter of the guess
  for (let i = 0; i < guess.length; i++) {
    // iterate over each letter of the choice
    for (let j = 0; j < wordsize; j++) {
      // compare the current guess letter to the current choice letter
      if (guess[i] == randNum[j]) {
        // if they're the same position in the word, score EXACT points (green) and break so you don't compare that letter further
        if (i == j) {
          //score = score + EXACT;
          status[i] = EXACT;
          break;
        } else {
          // if it's in the word, but not the right spot, score CLOSE point (yellow)
          //score = score + CLOSE;
          status[i] = CLOSE;
        }
      }
    }
    // keep track of the total score by adding each individual letter's score from above
  }
  for (let k = 0; k < wordsize; k++) {
    score = score + status[k];
  }
  return score;
};

const print_word = function (guess, wordsize, status, guesses) {
  // print word character-for-character with correct color coding, then reset terminal font to normal
  // TODO #6
  //add the locations for each letter

  // Array.from(document.querySelectorAll("ol"))[i];
  for (let i = 0; i < wordsize; i++) {
    if (status[i] == EXACT) {
      if (guesses <= wordsize) {
        Array.from(document.querySelectorAll(".letter-box"))[
          stored
        ].style.backgroundColor = "green";
        Array.from(document.querySelectorAll(".letter-box"))[
          stored
        ].textContent = guess[i];
      } else {
        document.querySelectorAll(".letter-box")[i].style.backgroundColor =
          "green";
        document.querySelectorAll(".letter-box")[i].textContent = guess[i];
        console.log(GREEN, RESET, guess[i]);
      }
    } else if (status[i] == CLOSE) {
      if (guesses <= wordsize) {
        Array.from(document.querySelectorAll(".letter-box"))[
          stored
        ].style.backgroundColor = "yellow";
        Array.from(document.querySelectorAll(".letter-box"))[
          stored
        ].textContent = guess[i];
      } else {
        document.querySelectorAll(".letter-box")[i].style.backgroundColor =
          "yellow";
        document.querySelectorAll(".letter-box")[i].textContent = guess[i];
        console.log(YELLOW, RESET, guess[i]);
      }
    } else {
      if (guesses <= wordsize) {
        Array.from(document.querySelectorAll(".letter-box"))[
          stored
        ].style.backgroundColor = "red";
        Array.from(document.querySelectorAll(".letter-box"))[
          stored
        ].textContent = guess[i];
      } else {
        document.querySelectorAll(".letter-box")[i].style.backgroundColor =
          "red";
        document.querySelectorAll(".letter-box")[i].textContent = guess[i];

        console.log(RED, RESET, guess[i]);
      }
    }
    stored = stored + 1;
  }
  //stored[i] = guess[i];
  // document.querySelector("ol").firstElementChild;
  //  document.querySelectorAll("ol")[1] = guess[i];
  return stored;
};
///////////////// EXTRA possible code to use
//created section for adding guesses

const button2 = document.querySelector(".start-game1");
button2.addEventListener(
  "click",
  function (event) {
    console.log("you clicked the start button", event);
    if (game_state < 1) {
      start();
      game_state++;
    } else game_state > 1;
    {
      return false;
    }
    //start();
  },
  false
);

const button3 = document.querySelector(".enter");

button3.addEventListener(
  "click",
  (e) => {
    console.log("this is the enter button");
    console.log(e);
    get_guess(wordsize, guesses);
    //other(guesses, won, randNum, wordsize);
    alert("entry submitted");
    //return guess;
  },
  false
);

// let input = document.getElementById("myText");
// input.addEventListener("keydown", function (e) {
//   if (e.key === "Enter");
//   {
//     console.log("you hit enter");
//     e.preventDefault();
//     get_guess(wordsize, guesses);
//   }
// });

//addEventListener("click");

//new KeyboardEvent("keydown", "enter");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////              WORDLE    //////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const spanList = [...document.querySelectorAll("span")];
///////////// keyboard

/////////////////////////////////////////////
/// Tip calculator /////////////
////////////////////////////////////////////////

// // selection of button
// const tipCalculator = function () {
//   let button = document.querySelector("#button");

//   // calculator function
//   button.addEventListener("click", function () {
//     let sum = document.querySelector("#sum").value;
//     let percentage = document.querySelector("#percentage").value;
//     let tip = sum * (percentage / 100);
//     let total = +sum + +tip;

//     // adding division for number of ppl
//     let ppl = document.querySelector("#ppl").value;
//     let each = total / ppl;

//     document.querySelector("#split").innerHTML = each;
//     // insert the total to the word total:
//     document.querySelector("#total").innerHTML = total;

//     return tipCalculator;
//   });
// };

// /////////////////////// Tic tac toe ///////////////////////////////
// const Tic = `

// <colgroup>
// <col>
// <ul class="boxes">
//   <li class="box cell00">
//   <li class="box cell01">
//   <li class="box cell02">
//   <li class="box cell03">
//   <li class="box cell04">
//   <li class="box cell05">
//   <li class="box cell06">
//   <li class="box cell07">
//   <li class="box cell08">
//   </li>
// </ul>
// </col>
// </colgroup>
// `;
// const tac = document.querySelector(".ticTacToe");
// tac.innerHTML = Tic;

// //start button
// const game = document.querySelector("#startGame");
// game.addEventListener("click", function () {
//   Math.floor(Math.random() * 2);
//   console.log(Math.random() * 2);

//   if (Math.random() > 0.5) {
//     console.log("player one goes first:");
//   } else {
//     console.log("player two goes first:");
//   }
//   /// assign whos starts first

//   /// listen for click of turn

//   /// loop through turns

//   // check while not 3in a row continue game

//   // score board
// });

// /////////International Tip Calculator/////////////////////////////
// //////////////////////////////////////////////////////////////////

// // // Helper function to format currency numbers. Used by tipCalculator
// // const formatter = (locale = "en-US", currency = "USD", value) => {
// //   let formattedValue = new Intl.NumberFormat(locale, {
// //     style: "currency",
// //     currency: currency,
// //   }).format(value);

// //   return formattedValue;
// // };

// // // Callback receives finalTip object, creates and outputs table on the DOM.
// // const printHTML = (finalTip) => {
// //   const tipTable = document.createElement("table");
// //   tipTable.innerHTML = `
// //     <tr>
// //       <td>Sum before tip:</td>
// //       <td><input placeholder="Sum total 20.00"> ${finalTip.sum}</td>
// //     </tr>
// //     <tr>
// //       <td>Tip percentage:</td>
// //       <td><input id="sum" placeholder="tip ex. 15%"> ${finalTip.percentage}</td>
// //     </tr>
// //     <tr>
// //       <td>Tip:</td>
// //       <td>${finalTip.tip}</td>
// //     </tr>
// //     <tr>
// //       <td>Total:</td>
// //       <td>${finalTip.total}</td>
// //     </tr>
// //   `;
// //   document.querySelector("main").append(tipTable);
// // };

// // // Create a finalTip object with all the data. Send it to the printHTML callback.
// // const tipCalculator = (sum, percentage, locale, currency, printHTML) => {
// //   let tip = sum * (percentage / 100);
// //   let total = sum + tip;

// //   const finalTip = {
// //     sum: formatter(locale, currency, sum),
// //     percentage: percentage + "%",
// //     tip: formatter(locale, currency, tip),
// //     total: formatter(locale, currency, total),
// //   };

// //   printHTML(finalTip);
// // };

// // tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);

// ///////////////////////////////////////////////////////////////
// ////////////////////// /// this is for the fun grid /////////////////
// ///////////////////////////////////////////////////////////////
// const GridContainer = `

// <ul class="grid">
//   <li class="cell cell01"></li>
//   <li class="cell cell02"></li>
//   <li class="cell cell03"></li>
//   <li class="cell cell04"></li>
//   <li class="cell cell05"></li>
//   <li class="cell cell06"></li>
//   <li class="cell cell07"></li>
//   <li class="cell cell08"></li>
//   <li class="cell cell09"></li>
//   <li class="cell cell10"></li>
//   <li class="cell cell11"></li>
//   <li class="cell cell12"></li>
//   <li class="cell cell13"></li>
//   <li class="cell cell14"></li>
//   <li class="cell cell15"></li>
//   <li class="cell cell16"></li>
//   <li class="cell cell17"></li>
//   <li class="cell cell18"></li>
//   <li class="cell cell19"></li>
//   <li class="cell cell20"></li>
//   <li class="cell cell21"></li>
//   <li class="cell cell22"></li>
//   <li class="cell cell23"></li>
//   <li class="cell cell24"></li>
//   <li class="cell cell25"></li>
//   <li class="cell cell26"></li>
//   <li class="cell cell27"></li>
//   <li class="cell cell29"></li>
//   <li class="cell cell30"></li>
//   <li class="cell cell31"></li>
//   <li class="cell cell32"></li>
//   <li class="cell cell33"></li>
//   <li class="cell cell34"></li>
//   <li class="cell cell35"></li>
//   <li class="cell cell36"></li>
//   <li class="cell cell37"></li>
//   <li class="cell cell38"></li>
//   <li class="cell cell39"></li>
//   <li class="cell cell40"></li>
//   <li class="cell cell41"></li>
//   <li class="cell cell42"></li>
//   <li class="cell cell43"></li>
//   <li class="cell cell44"></li>
//   <li class="cell cell45"></li>
//   <li class="cell cell46"></li>
//   <li class="cell cell47"></li>
//   <li class="cell cell48"></li>
//   <li class="cell cell49"></li>
//   <li class="cell cell50"></li>
//   <li class="cell cell51"></li>
//   <li class="cell cell52"></li>
//   <li class="cell cell53"></li>
//   <li class="cell cell54"></li>
//   <li class="cell cell55"></li>
// </ul>

// `;
// const Container = document.querySelector(".Container");
// Container.innerHTML = GridContainer;

// const grid = document.querySelector(".grid");
// const gridCell = document.querySelectorAll(".cell");

// gridCell.forEach((cell) => {
//   grid.addEventListener("mouseenter", () => {
//     console.log();
//     grid.style.border = "10px solid green";
//   });

//   grid.addEventListener("mouseleave", () => {
//     grid.style.border = "10px dashed green";
//   });

//   cell.addEventListener("mouseenter", () => {
//     console.log();
//     cell.style.outline = "4px solid gray";
//   });

//   cell.addEventListener("mouseleave", () => {
//     console.log();
//     cell.style.outline = "4px dashed gray";
//   });

//   cell.addEventListener("click", (event) => {
//     console.log(event);
//     if (cell.style.backgroundColor === "") {
//       cell.style.backgroundColor = "green";
//     } else if (cell.style.backgroundColor === "green") {
//       cell.style.backgroundColor = "red";
//     } else if (cell.style.backgroundColor === "red") {
//       cell.style.backgroundColor = "yellow";
//     } else cell.style.backgroundColor = "";
//     cell.style.backgroundColor === "";
//   });
// });

// test repository
