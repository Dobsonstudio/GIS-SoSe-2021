namespace P_3_4Server {
    
    let path: string;
    let response: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", function(): void {
        path = "/addDB";
        handleSubmit();
    });
    document.getElementById("callFromDB").addEventListener("click", function(): void {
        path = "/callDB";
        handleSubmit();
    });
    
    async function handleSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();

        if (path == "/retrieve") {
            response.innerHTML = "";
            console.log("Retrieved JSON", JSON.parse(responseText));
            let responseJSON: CollectionData[] = JSON.parse(responseText);

            for (let i: number = 0; i < responseJSON.length; i++) {
                let temp: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                temp.className = "databaseEntry";
                temp.innerHTML = "id: " + responseJSON[i]._id + 
                                 "<br> Vorname: " + responseJSON[i].fname +
                                 "<br> Nachname: " + responseJSON[i].lname +
                                 "<br> E-Mail: " + responseJSON[i].email + "<br>";

                let tempDelete: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
                tempDelete.className = "deleteBtn";
                tempDelete.addEventListener("click", async function(): Promise<void> {
                    await fetch("https://dobsonstudio2021.herokuapp.com/delete?_id=" + responseJSON[i]._id, {method: "get"});
                    temp.innerHTML = "deleted";
                } );

                tempDelete.appendChild(document.createTextNode("Delete"));
                temp.appendChild(tempDelete);
                response.appendChild(temp);
            }
        } else if (path == "/addDB") {
            console.log(responseText);
            showResponse(responseText);
            let form: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
            form.reset();
        }    
    }
    function showResponse(text: string): void {
        response.innerHTML = text;
    }
    interface FormElements {
        fname: string;
        lname: string;
        email: string;
    }
    interface CollectionData extends FormElements {
        _id: string;
    }
}