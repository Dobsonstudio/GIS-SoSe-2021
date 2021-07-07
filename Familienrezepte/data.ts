namespace Rezepte_Server {
    
    let showresponse: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", addToDB);
    
    async function addToDB(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/addDB";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get", mode: "no-cors"});
        let responseText: string = await response.text();
            
        console.log(responseText);
        showResponseFunc(responseText);
        }    

    function showResponseFunc(text: string): void {
        showresponse.innerHTML = text;
    }

    export interface FormElements {
        username: string;
        password: string;
    }
}