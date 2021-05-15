"use strict";
// AUFGABE 1
let divsave = [];
for (let i = 0; i < 10; i++) {
    let breitetemporary = Math.random() * window.innerWidth * 0.7;
    let höhetemporary = Math.random() * window.innerHeight * 0.7;
    divsave.push(document.createElement("div"));
    divsave[i].style.position = "absolute";
    divsave[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    divsave[i].style.width = breitetemporary + "px";
    divsave[i].style.height = höhetemporary + "px";
    divsave[i].style.top = Math.random() * window.innerHeight - höhetemporary + "px";
    divsave[i].style.left = Math.random() * window.innerWidth - breitetemporary + "px";
    document.body.appendChild(divsave[i]);
}
let button = document.createElement("button");
document.body.appendChild(button);
button.appendChild(document.createTextNode("Reckteck generieren"));
button.addEventListener("click", function () { newRectangle(); });
button.style.zIndex = "1";
button.style.position = "relative";
function newRectangle() {
    let create = document.createElement("div");
    divsave.push(create);
    let breitetemporary = Math.random() * window.innerWidth * 0.7;
    let höhetemporary = Math.random() * window.innerHeight * 0.7;
    create.style.position = "absolute";
    create.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    create.style.width = breitetemporary + "px";
    create.style.height = höhetemporary + "px";
    create.style.top = Math.random() * window.innerHeight - höhetemporary + "px";
    create.style.left = Math.random() * window.innerWidth - breitetemporary + "px";
    document.body.appendChild(create);
}
function reset() {
    for (let i = 10; i < divsave.length; i++) {
        divsave[i].remove();
    }
}
let button2 = document.createElement("button");
document.body.appendChild(button2);
button2.appendChild(document.createTextNode("Reset"));
button2.addEventListener("click", function () { reset(); });
button2.style.zIndex = "1";
button2.style.position = "relative";
//# sourceMappingURL=script.js.map