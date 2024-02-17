const Nav = `
    <ul><a href="index.html"> home  &#127968;</a></ul>

`;

const mainNav = document.createElement("nav");
mainNav.classList.add("navigation");
mainNav.innerHTML = Nav;

// const navbar_Logo = document.createElement("div")
// navbar_Logo.classList.add("Logo")
// navbar_Logo.innerHTML = Logo

document.querySelector(".siteheader").append(mainNav);

// have dropdown that will hightlight the next word into a color of importance
// you can add+ and subtract- last value of list items
// you can add value of the colors for the user to tell what needs to be important color value.
// example:"I want red to mean we can wait for next week"
let list = document.querySelector("#ul_list");
const button = document.querySelector("#sub");
let color_button = document.querySelector("#selected-color");
let colorPicker = [];
let mapped = [];
// "I want yellow to mean, we are low on this item"
// "I want green to mean, we NEED this now"
let count = 0;
/**
 *  Form function that creates the li for the list to begin ////////////
 */
const form = function (mapped) {
  document.querySelector("#items").onsubmit = function () {
    let word = document.querySelector("#text_field").value;
    /**
     * creates the li where everything will be created
     */
    let list_items = document.createElement("li");
    list_items.setAttribute("id", `${word}`);
    list_items.innerHTML = word;
    list.append(list_items);
    // list.value = " ";
    /**
     * creates the button that can be clicked to erase this li
     */
    let new_button = document.createElement("button");
    new_button.setAttribute("class", "erase");
    new_button.setAttribute("id", `${word}`);
    let cancel = "delete-item";
    new_button.innerHTML = cancel;
    document.getElementById(`${word}`).append(new_button);
    /**
     *  section for creating the color button that will call another function
     */
    let color = document.createElement("input");
    color.setAttribute("type", "color");
    color.setAttribute("value", "#6D6B6A");
    color.setAttribute("id", "assigned-color");
    document.getElementById(`${word}`).prepend(color);
   
    mapped.push(`${word}`);

    //console.log(color_button);
    console.log(mapped);
    /*  this section fixing the change color*/
    /// create the array with the created line items
    //stops form from submitting
    if (word != 0) {
      document.querySelector("#text_field").value = "";
    } else {
      console.log("empty it!");
    }

    ///new section
    let color_bar = document.querySelector("#assigned-color");
    // color_bar.addEventListener("input", updatefirst, false);
    if (mapped.length <= 1) {
      color_bar.addEventListener("input", colorfunk, false);
    } else {
      let color_bar = document.querySelectorAll("#assigned-color");
      for (let i = 0; i < color_bar.length; i++) {
        let color_bar = document.querySelectorAll("#assigned-color")[i];
        color_bar.addEventListener("input", colorfunk(color_bar), false);
      }
    }
    /// erase a li from the list ////
    let erase = document.querySelector(".erase");
    // let new_erase = Array.prototype.splice.call(erase);
    if (mapped.length <= 1) {
      erase.addEventListener("click", destroy, false);
    } else {
      let erase = document.querySelectorAll(".erase");
      for (let i = 0; i < erase.length; i++) {
        let erase = document.querySelectorAll(".erase")[i];
        erase.addEventListener("click", destroy, false);
      }
    }
    count++;

    if (mapped.length != count) {
      console.log(count);
      //create();
    }
    //return false;
    event.preventDefault();
  };
};
/*
///////////////////// end of Form function ////////////////////////////////////////////////////
*/
button.addEventListener("click", form(mapped), false);

//////////////////////////////////////////////////////////////////////////////////////////////

///// possible run for buttons

function colorfunk(color_bar) {
  console.log("color function has been called");
  let color = document.querySelectorAll("#assigned-color");
  for (let i = 0; i < mapped.length; i++) {
    let li = document.querySelectorAll("li")[i];

    if (true) {
      li.style.color = color[i].value;
    }
  }
  // //colorPicker.addEventListener("input", updateFirst(), false);
  // return;
  // event.stopPropagation();
  //event.stopImmediatePropagation();
  // event.preventDefault();
}

let destroy = function (event) {
  // console.log(event, erase);
  let erase = document.querySelectorAll(".erase");
  let new_erase = Array.from(erase);
  //at this point erased is a node list of all the buttons
  //mapped is a list of all the words/names of listed items
  //we need to check if mapped item corresponds to erased button to erase that specific node
  for (let i = 0; i < mapped.length; i++) {
    //let erase = document.querySelectorAll(".erase")[i];
    if (event.currentTarget == new_erase[i]) {
      //new_erase.cli = mapped.splice(event.currentTarget, 1);
      let removed = mapped.splice(mapped.indexOf(event.currentTarget.id), 1);
      console.log("this letter was removed from the array", removed);
      document.querySelector("#ul_list").innerHTML = "";
      //this function should recreate the list items with the anything erased from it
      create();
    }
  }
};
//map()array method /////////////////
function create() {
  //let items = mapped.items
  mapped.forEach((item) => {
    let list_items = document.createElement("li");
    list_items.setAttribute("id", `${item}`);
    list_items.innerHTML = item;
    list.append(list_items);
    /////////////////////////////////
    let new_button = document.createElement("button");
    new_button.setAttribute("class", "erase");
    new_button.setAttribute("id", `${item}`);
    let cancel = "delete-item";
    new_button.innerHTML = cancel;
    document.getElementById(`${item}`).append(new_button);
    /////////////////////////////////
    let color = document.createElement("input");
    color.setAttribute("type", "color");
    color.setAttribute("value", "#6D6B6A");
    color.setAttribute("id", "assigned-color");
    document.getElementById(`${item}`).prepend(color);
    /////////////////////////////////
  });
}

let hide = function (event) {
  //  console.log(blocks);
  for (let i = 0; i < mapped.length; i++) {
    let blocks = document.querySelectorAll("#assigned-color")[i];
    if (blocks.style.visibility === "visible") {
      blocks.style.visibility = "hidden";
    } else {
      blocks.style.visibility = "visible";
    }
  }
  event.preventDefault();
  // if (blocks.style) blocks.style.visibility = "hidden";
  // document.querySelectorAll("#assigned-color").innerHTML.style.visibility = 'hidden';
};

color_button.addEventListener("click", hide, false);
