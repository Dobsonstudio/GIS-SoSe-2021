"use strict";
var space;
(function (space) {
    let human = { head: "", torso: "", legs: "" };
    function head(_head) {
        human.head = _head;
    }
    let headdiv = document.getElementById("headdiv");
    for (let i = 0; i < space.showoptions.length; i++) {
        let optiontemp = document.createElement("img");
        optiontemp.setAttribute("src", space.showoptions[i]);
        optiontemp.setAttribute("class", "headEmpty");
        optiontemp.addEventListener("click", function () {
            headSelect(optiontemp);
        });
        headdiv.appendChild(optiontemp);
    }
    let alloptions = document.querySelectorAll(".headEmpty");
    function headSelect(_headSelect) {
        alloptions.forEach(imageElement => {
            imageElement.setAttribute("class", "headEmpty");
        });
        _headSelect.setAttribute("class", "headSelection");
        head(_headSelect.src);
        console.log(_headSelect.src);
    }
})(space || (space = {}));
//# sourceMappingURL=script.js.map