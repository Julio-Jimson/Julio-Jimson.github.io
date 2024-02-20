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
let color_bar = [];
let erase = [];
// "I want yellow to mean, we are low on this item"
// "I want green to mean, we NEED this now"
let count = 0;
/**
 *  Form function that creates the li for the list to begin ////////////
 */
document.querySelector("#text_field").onkeyup = () => {
  if (document.querySelector("#text_field").value <= "") {
    document.getElementById("sub").disabled = true;
  } else {
    document.getElementById("sub").disabled = false;
  }
};

const form = function (mapped) {
  document.querySelector("#items").onsubmit = function (event) {
    let word = document.querySelector("#text_field").value;

    for (let j = 0; j < mapped.length; j++) {
      if (word == mapped[j]) {
        console.log(
          "we already have this word on our list. choose another word please"
        );
      } else {
        console.log("this is a new word. continue like im not even here");
      }
    }
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
    let cancel = "\u2421";
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

    colorfunk();

    destroy();
    //    }
    count++;
    mapped.map((x) => mapped);

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

const colorfunk = function () {
  let color_bar = document.querySelectorAll("#assigned-color");
  let new_color = Array.from(color_bar);
  for (let i = 0; i < new_color.length; i++) {
    console.log("new color array", new_color);
    // new_color = document.querySelectorAll("#assigned-color")[i];
    this.addEventListener(
      "input",
      function (event) {
        let li = document.querySelectorAll("li")[i];
        if (true) {
         // color[i] = color_bar[i].value;
          li.style.color = color_bar[i].value;
        }
      },
      false
    );
  }
};
/*
this funciton lets you delete list items from created list
*/
const destroy = function () {
  let erase = document.querySelectorAll(".erase");
  let new_erase = Array.from(erase);
  for (i of new_erase) {
    i.addEventListener("click", function (event) {
      console.log("you clicked a erase button");
      let erased = 0;
      //at this point erased is a node list of all the buttons
      //mapped is a list of all the words/names of listed items
      //we need to check if mapped item corresponds to erased button to erase that specific node
      for (let i = 0; i < mapped.length; i++) {
        //let erase = document.querySelectorAll(".erase")[i];
        if (event.currentTarget.id == mapped[i]) {
          erased++;
          let removed = mapped.splice(
            mapped.indexOf(event.currentTarget.id),
            1
          );
          console.log("this letter was removed from the array", removed);
          document.querySelector("#ul_list").innerHTML = "";
          //this function should recreate the list items with the anything erased from it
          create();
          //new_erase.cli = mapped.splice(event.currentTarget, 1);
        }
      }
    });
  }
};

//map()array method ///////////////////
function create() {
  //let items = mapped.items
  mapped.forEach((item) => {
    //create list item for the unorderlist
    let list_items = document.createElement("li");
    list_items.setAttribute("id", `${item}`);
    list_items.innerHTML = item;
    list.append(list_items);
    ///////////create erase buttton
    let new_button = document.createElement("button");
    new_button.setAttribute("class", "erase");
    new_button.setAttribute("id", `${item}`);
    let cancel = "\u2421";
    new_button.innerHTML = cancel;
    document.getElementById(`${item}`).append(new_button);
    ///////////////create color button
    let color = document.createElement("input");
    color.setAttribute("type", "color");
    color.setAttribute("value", "#6D6B6A");
    color.setAttribute("id", "assigned-color");
    document.getElementById(`${item}`).prepend(color);
    /////////////
  });
  destroy();
}
/// hide the buttons
let hide = function (event) {
  //  console.log(blocks);
  for (let i = 0; i < mapped.length; i++) {
    let blocks = document.querySelectorAll("#assigned-color")[i];
    let deletus = document.querySelectorAll(".erase")[i];
    if (blocks.style.visibility == "visible") {
      blocks.style.visibility = "hidden";
    } else {
      blocks.style.visibility = "visible";
    }
    if (deletus.style.visibility == "visible") {
      deletus.style.visibility = "hidden";
    } else {
      deletus.style.visibility = "visible";
    }
  }
  event.preventDefault();
};

color_button.addEventListener("click", hide, false);

