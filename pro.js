/// professsional website info //////////

const intro_paragraph = `Hello, I'm Julio Villegas. A full-stack web developer aspiring. currently working on learning 
 front end web development as well as backend with SQL. I have finished cs50 and have been working towards doing cs50 for web design. 
 I have finished multiple classes of linkedin learning and have been working on various projects. `;

const intro = document.createElement("p");

intro.innerHTML = intro_paragraph;
document.querySelector("#first-par").append(intro);
