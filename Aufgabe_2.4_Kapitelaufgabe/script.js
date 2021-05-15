"use strict";
var space24;
(function (space24) {
    let human = JSON.parse(space24.humanJSON);
    let headdiv = document.getElementById("headdiv");
    let eyesdiv = document.getElementById("eyesdiv");
    let mouthdiv = document.getElementById("mouthdiv");
    let recentpicks = document.getElementById("recentpicks");
    let alloptions;
    if (document.getElementById("start") == null) {
        if (document.getElementById("bodyHead") != null) {
            showalloptions(human.head, headdiv);
        }
        if (document.getElementById("bodyEyes") != null) {
            showalloptions(human.eyes, eyesdiv);
            picks();
        }
        if (document.getElementById("bodyMouth") != null) {
            showalloptions(human.mouth, mouthdiv);
            picks();
        }
        if (document.getElementById("bodyResult") != null) {
            showResult();
        }
        alloptions = document.querySelectorAll(".bodyEmpty");
    }
    else {
        localStorage.clear();
    }
    function showResult() {
        document.getElementById("resulthead").setAttribute("src", localStorage.getItem("selecthead"));
        document.getElementById("resulteyes").setAttribute("src", localStorage.getItem("selecteyes"));
        document.getElementById("resultmouth").setAttribute("src", localStorage.getItem("selectmouth"));
    }
    function showalloptions(_options, _panel) {
        for (let i = 0; i < _options.length; i++) {
            let optiontemp = document.createElement("img");
            optiontemp.setAttribute("src", _options[i]);
            optiontemp.setAttribute("class", "bodyEmpty");
            optiontemp.addEventListener("click", function () {
                bodyselect(optiontemp);
            });
            _panel.appendChild(optiontemp);
        }
    }
    function bodyselect(_bodySelect) {
        alloptions.forEach(imageElement => {
            imageElement.setAttribute("class", "bodyEmpty");
        });
        _bodySelect.setAttribute("class", "bodySelection");
        if (document.getElementById("bodyHead") != null) {
            localStorage.setItem("selecthead", _bodySelect.src);
            document.getElementById("headtoeyes").setAttribute("href", "./eyes.html");
        }
        if (document.getElementById("bodyEyes") != null) {
            localStorage.setItem("selecteyes", _bodySelect.src);
            document.getElementById("eyestomouth").setAttribute("href", "./mouth.html");
        }
        if (document.getElementById("bodyMouth") != null) {
            localStorage.setItem("selectmouth", _bodySelect.src);
            document.getElementById("mouthtoresult").setAttribute("href", "./result.html");
        }
    }
    function picks() {
        if (localStorage.getItem("selecthead") != null) {
            let temp = document.createElement("img");
            temp.setAttribute("src", localStorage.getItem("selecthead"));
            recentpicks.appendChild(temp);
        }
        if (localStorage.getItem("selecteyes") != null) {
            let temp = document.createElement("img");
            temp.setAttribute("src", localStorage.getItem("selecteyes"));
            recentpicks.appendChild(temp);
        }
        if (localStorage.getItem("selectmouth") != null) {
            let temp = document.createElement("img");
            temp.setAttribute("src", localStorage.getItem("selectmouth"));
            recentpicks.appendChild(temp);
        }
    }
})(space24 || (space24 = {}));
//# sourceMappingURL=script.js.map