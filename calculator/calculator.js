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

let num1;
let plus = document.getElementById("addition");
let minus = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let form = document.querySelector("#compute");
let temp = document.querySelector(".temp");
let decimal = document.querySelector("#decimal");
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const submit = document.querySelector("#submit");
// runs through all 4 +-*/ to read in the submit bar
/////////

//add a click event for each button
let math = document.querySelectorAll(".math");

////// logic to listen to all button clicks
//// but only respond to number clicks and do something

document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key == "+" ||
      event.key == "-" ||
      event.key == "*" ||
      event.key == "/" ||
      event.key == "Enter"
    ) {
      let operator = event.key;
      if (!temp.value) {
        temp.value = form.value;
        temp.innerHTML = temp.value;
        form.value = "";
        console.log(operator);
        return;
      }
      if (event.key == "Enter") {
        temp.value = temp.value + form.value;
        document.querySelector(".temp").innerHTML = temp.value;
        console.log("enter pressed ");
      }
      if (event.key == "+") {
        add(temp.value, form.value);
        operator = event.key;
        form.value = "";
        return;
      } else if (event.key == "-") {
        sub(temp.value, form.value);
        operator = event.key;
        form.value = "";
        return;
      } else if (event.key == "*") {
        mult(temp.value, form.value);
        operator = event.key;
        form.value = "";
        return;
      } else if (event.key == "/") {
        div(temp.value, form.value);
        operator = event.key;
        form.value = "";
        return;
      }
      temp.value = temp.value + form.value;
      form.value = "";
      return;
    }
    //let action = event.key;
    let ops = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;

    ////////////// how do we call the button press? ////

    for (let i = 0; i < number.length; i++) {
      if (event.key == number[i]) {
        form.value = form.value + event.key;
        console.log(ops);
        return;
      }
    }
    // console.log("this the operator", operator);
  },
  true
);

const buttons = document.querySelectorAll(".btns");
//add a click event for each button
for (let i = 0; i < 11; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons) form.value = form.value + buttons[i].value;
  });
}

////create logic to reduce redudancy////////////////////////////////////////////
for (let i = 0; i < math.length; i++) {
  math[i].addEventListener("click", () => {
    if (!temp.value) {
      temp.value = form.value;
      temp.innerHTML = temp.value;
      form.value = "";
      return;
    } else if (math[i].value == "+") {
      add(temp.value, form.value);
      form.value = "";
    } else if (math[i].value == "-") {
      sub(temp.value, form.value);
      form.value = "";
    } else if (math[i].value == "*") {
      mult(temp.value, form.value);
      form.value = "";
    } else if (math[i].value == "/") {
      div(temp.value, form.value);
      form.value = "";
    } else if (math[i].value == "enter") {
      console.log(
        "do something helpful please dont con-cat numbers pls",
        enter
      );
      form.value = "";
    }
  });
}

//create the logic for adding

//add two numbers
const add = function (a, b) {
  console.log("clicked the + function");
  let x = Number(a);
  let y = Number(b);
  let c = x + y;
  document.querySelector(".temp").innerHTML = c;
  temp.value = c;
  console.log(c);
  //return temp.value;
};
/////////////////////////////////////////////////////////////////////////////
//create the logic for subtraction
const sub = function (a, b) {
  console.log("clicked the subtract function");
  let x = Number(a);
  let y = Number(b);
  let c = x - y;
  document.querySelector(".temp").innerHTML = c;
  temp.value = c;
  console.log(c);
};
///////////////////////////////////////////////////////////
//multiply two numbers
const mult = function (a, b) {
  console.log("clicked the multiply function");
  let x = Number(a);
  let y = Number(b);
  let c = x * y;
  document.querySelector(".temp").innerHTML = c.toFixed(4);
  temp.value = c;
  console.log(c);
};
///////////////////////////////////////////////////////////////
/// division function divide two numbers
const div = function (a, b) {
  console.log("clicked the divide function");
  let x = Number(a);
  if (!b) {
    console.log("cannot divide by zero");
    return;
  }
  let y = Number(b);
  let c = x / y;
  document.querySelector(".temp").innerHTML = c.toFixed(4);
  temp.value = c;
  console.log(c);
};

////create a function to handle enter/ equals button///////////
const enter = function (a, b) {
  console.log(enter);
};

///////////////////// works around line 20 //////////////////////////////////////
/// this lets you add + in the type bar and still do the math
// form.addEventListener("keyup", function (keypress) {
//   for (let i = 0; i < 4; i++) {
//     if (keypress.KeyboardEvent == keys[i]) {
//       if (!temp.value == "") {
//         if (form.value.includes("+")) {
//           console.log("this had a +");
//           const noSpecialChars = form.value.replace(regex, "");
//           form.value = noSpecialChars;
//           add(temp.value, form.value);
//         }
//         form.value = "";
//         return;
//       }
//       const noSpecialChars = form.value.replace(regex, "");
//       console.log(noSpecialChars);
//       form.value = noSpecialChars;
//       temp.value = form.value;
//       temp.innerHTML = temp.value;
//       form.value = "";
//       console.log("key pressed ");
//     }
//   }
// });

// switch (true) {
//   case event.key == "+":
//     console.log("you clicked the +");
//     break;
//   case event.key == "-":
//     console.log("you clicked the -");
//     break;
//   case event.key == "*":
//     console.log("you clicked the *");
//     break;
//   case event.key == "/":
//     console.log("you clicked the /");
//     break;
//   default:
//     console.log("you didnt click a symbol");
//     break;
// }

///capture all clicks
// window.addEventListener(
//   "keydown",
//   (event) => {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.getElementById("output").appendChild(p);
//     window.scrollTo(0, document.body.scrollHeight);
//   },
//   true,
// );

// let numPad = {
//   key: "Insert",
//   key: "End",
//   key: "ArrowDown",
//   key: "PageDown",
//   key: "ArrowLeft",
//   key: "Clear",
//   key: "ArrowRight",
//   key: "Home",
//   key: "ArrowUp",
//   key: "PageUp",
// };
// let numPadCode = {
//   code: "Numpad0",
//   code: "Numpad1",
//   code: "Numpad1",
//   code: "Numpad2",
//   code: "Numpad3",
//   code: "Numpad4",
//   code: "Numpad5",
//   code: "Numpad6",
//   code: "Numpad7",
//   code: "Numpad8",
//   code: "Numpad9",
// };

// + ("0x6B") - ("0x6D") *("0x6A") / ("0x6F") // this is 4 buttons correlations
//let keys = ["0x6B", "0x6D", "0x6A", "0x6F"];

//listens to additions button ///////////////////////////////////////////////
// plus.addEventListener("click", () => {
//   if (!temp.value) {
//     temp.value = form.value;
//     temp.innerHTML = temp.value;
//     form.value = "";
//     return;
//   } else {
//     add(temp.value, form.value);
//     form.value = "";
//   }
// });
//listens to the minus button////////////////////////////////////////////////
// minus.addEventListener("click", function () {
//   console.log("clicked the -");
//   if (!temp.value) {
//     temp.value = form.value;
//     temp.innerHTML = temp.value;
//     form.value = "";
//     return;
//   } else {
//     sub(temp.value, form.value);
//     form.value = "";
//   }
// });
//listens to the multiply button
// multiply.addEventListener("click", function () {
//   console.log("clicked the x");
//   if (!temp.value) {
//     temp.value = form.value;
//     temp.innerHTML = temp.value;
//     form.value = "";
//     return;
//   } else {
//     if (form.value === "") {
//       form.value = 1;
//     }
//     mult(temp.value, form.value);
//     form.value = "";
//   }
// });
//listens to the division button
// divide.addEventListener("click", function () {
//   console.log("clicked the ÷");
//   if (!temp.value) {
//     temp.value = form.value;
//     temp.innerHTML = temp.value;
//     form.value = "";
//     return;
//   } else {
//     div(temp.value, form.value);
//     form.value = "";
//   }
// });
