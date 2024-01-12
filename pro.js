/// professsional website info //////////

const intro_paragraph = `Hello, I'm Julio Villegas. A full-stack web developer aspiring.
 Currently working on learning front end web development as well as backend with Javascript and Node.js. I have 
 finished CS50 and have been working towards doing CS50 for web design. I have finished 
 multiple classes of linkedin learning and have been working on various projects I will be adding to my portfolio
 section above. `;

const intro = document.createElement("p");

intro.innerHTML = intro_paragraph;
document.querySelector("#first-par").append(intro);

/////////
////////////
const port = `
                <a href="Gaming.html">wordle</a>
                <a href="ShoppyList.html">shopping app</a>
                <a href="#TBD">TBD</a>

            `;

const unorder = document.createElement("div");
unorder.setAttribute("id", "dropdown-menu");
unorder.setAttribute("class", "dropdown-content");

unorder.innerHTML = port;
document.querySelector("#portfolio").append(unorder);


// 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
let myFunction = function () {
  document.getElementById("dropdown-menu").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    let dropdowns = document.getElementById("dropdown-content");
    let i;
    for (i = 0; i < dropdowns; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
