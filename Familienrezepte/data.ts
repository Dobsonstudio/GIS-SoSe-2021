namespace Rezepte_Server {
    
    let showresponse: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", addToDB);
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("addNewRecipe").addEventListener("click", addNewRecipe);
    
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
        }    

    async function login(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/login";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();

        console.log(responseText);
        showResponseFunc(responseText);
        }

    async function addNewRecipe(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/addNewRecipe";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
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