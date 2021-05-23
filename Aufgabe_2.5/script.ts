namespace space24 { 

    export interface Human {
        head: string[];
        eyes: string[];
        mouth: string[];
    }
    
    let headdiv: HTMLDivElement = <HTMLDivElement> document.getElementById("headdiv");
    let eyesdiv: HTMLDivElement = <HTMLDivElement> document.getElementById("eyesdiv");
    let mouthdiv: HTMLDivElement = <HTMLDivElement> document.getElementById("mouthdiv");
    let recentpicks: HTMLDivElement = <HTMLDivElement> document.getElementById("recentpicks");

    let alloptions: NodeListOf<HTMLImageElement>;

    function showalloptionswithdata(_parts: Human): void {
    if (document.getElementById("start") == null) {

        if (document.getElementById("bodyHead") != null) {
            showalloptions(_parts.head, headdiv);
        }

        if (document.getElementById("bodyEyes") != null) {
            showalloptions(_parts.eyes, eyesdiv);
            picks();
        }

        if (document.getElementById("bodyMouth") != null) {
            showalloptions(_parts.mouth, mouthdiv);
            picks();
        }

        if (document.getElementById("bodyResult") != null) {
            showResult();
        }
        alloptions = document.querySelectorAll(".bodyEmpty");

    } else {
        localStorage.clear();
    }
    }

    function showResult(): void {
        document.getElementById("resulthead").setAttribute("src", localStorage.getItem("selecthead"));
        document.getElementById("resulteyes").setAttribute("src", localStorage.getItem("selecteyes"));
        document.getElementById("resultmouth").setAttribute("src", localStorage.getItem("selectmouth"));
    }

    function showalloptions(_options: string[], _panel: HTMLDivElement): void {
        for (let i: number = 0; i < _options.length; i++) {
            let optiontemp: HTMLImageElement = document.createElement("img");
            optiontemp.setAttribute("src", _options[i]);
            optiontemp.setAttribute("class", "bodyEmpty");
            optiontemp.addEventListener("click", function (): void {
                bodyselect(optiontemp); 
            });
            _panel.appendChild(optiontemp);
        }
    }
     
    function bodyselect(_bodySelect: HTMLImageElement): void {
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
    
    function picks(): void {
        if (localStorage.getItem("selecthead") != null) {
            let temp: HTMLDivElement = document.createElement("img");
            temp.setAttribute("src", localStorage.getItem("selecthead"));
            recentpicks.appendChild(temp);
        }

        if (localStorage.getItem("selecteyes") != null) {
            let temp: HTMLDivElement = document.createElement("img");
            temp.setAttribute("src", localStorage.getItem("selecteyes"));
            recentpicks.appendChild(temp);
        }

        if (localStorage.getItem("selectmouth") != null) {
            let temp: HTMLDivElement = document.createElement("img");
            temp.setAttribute("src", localStorage.getItem("selectmouth"));
            recentpicks.appendChild(temp);
        }
    
    }
    //b)
    async function getData(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response: ", response);
        let data: Human = await response.json();
        showalloptionswithdata(data);
    }
    getData("https://dobsonstudio.github.io/GIS-SoSe-2021/Aufgabe_2.5/data.json");

    //c)
    export interface Answer {
        [key: string]: string;
    }
    async function sendData(_url: RequestInfo): Promise <void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: Answer = await answer.json();
        let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("errormessage");
        if (output.error) {
            displayResponse.innerText = output.error;
            displayResponse.style.color = "red";   
        }
        if (output.message) {
            displayResponse.innerText = output.Message;
            displayResponse.style.color = "green"; 
        }
    }
    sendData("https://gis-communication.herokuapp.com");
}
