namespace space { 

interface Human {
    head: string;
    torso: string;
    legs: string;
}

let human: Human = {head: "", torso: "", legs: ""};

function head(_head: string): void {
    human.head = _head; 
}

let headdiv: HTMLDivElement = <HTMLDivElement> document.getElementById("headdiv");

for (let i: number = 0; i < showoptions.length; i++) {
    let optiontemp: HTMLImageElement = document.createElement("img");
    optiontemp.setAttribute("src", showoptions[i]);
    optiontemp.setAttribute("class", "headEmpty");
    optiontemp.addEventListener("click", function (): void {
        headSelect(optiontemp); 
    });
    headdiv.appendChild(optiontemp);
}

let alloptions: NodeListOf<HTMLImageElement> = document.querySelectorAll(".headEmpty");

function headSelect(_headSelect: HTMLImageElement): void {
    alloptions.forEach(imageElement => {
        imageElement.setAttribute("class", "headEmpty");
    });
    _headSelect.setAttribute("class", "headSelection");
    head(_headSelect.src);
    console.log(_headSelect.src);
    localStorage.setItem("selecthead", _headSelect.src);
    //localStorage.getItem("selecthead");
}
}

