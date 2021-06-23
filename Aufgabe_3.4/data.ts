namespace P_3_4Server {
    
    let showresponse: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", addToDB);
    document.getElementById("callFromDB").addEventListener("click", callFromDB);
    
    async function addToDB(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/addDB";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
            
        console.log(responseText);
        showResponseFunc(responseText);
        //let form: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
        //form.reset();
        }    

    async function callFromDB(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/callDB";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();

        //showresponse.innerHTML = ""; 
        console.log("Retrieved JSON", JSON.parse(responseText));
        let responseJSON: CollectionData[] = JSON.parse(responseText);

        for (let i: number = 0; i < responseJSON.length; i++) {
        let temp: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        temp.className = "databaseEntry";
        temp.innerHTML = "id: " + responseJSON[i]._id + 
        "<br> Vorname: " + responseJSON[i].fname +
        "<br> Nachname: " + responseJSON[i].lname +
        "<br> E-Mail: " + responseJSON[i].email + "<br>";
        showresponse.appendChild(temp);
        }

    }
    function showResponseFunc(text: string): void {
        showresponse.innerHTML = text;
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