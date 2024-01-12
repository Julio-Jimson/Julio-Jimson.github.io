
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


//// select color
// Create a grocery list app:



// have buttons that will hightlight the next word into a color of importance
// you can add+ and subtract- last value of list items
// you can add value of the colors for the user to tell what needs to be important color value.
// example:"I want red to mean we can wait for next week"
// "I want yellow to mean, we are low on this item"
// "I want green to mean, we NEED this now"

const form = function () {
  document.querySelector("#items").onsubmit = function () {
    const name = document.querySelector("#type").value;

    const list_items = document.createElement("li");
    list_items.innerHTML = name;

    document.querySelector("#list").append(list_items);
    document.querySelector("#list").value = "";

    //stops form from submitting
    return false;
  };
};
document.addEventListener("onsubmit", form());

///pick a color to change the li color value///////////
//////

const dropbtn = function () {
  document.querySelector("#add_color").onclick = function () {
    const picked = document.querySelector("#drop-down").value;
    const li = document.querySelector("#list").lastChild;
    li.style.color = picked;

    console.log(li);

    //picked.innerHTML = type;
  };
};

document.addEventListener("onclick", dropbtn());
