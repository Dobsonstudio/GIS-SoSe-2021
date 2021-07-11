namespace Rezepte_Server {
    let showresponse: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("buttonLogin").addEventListener("click", login);
   
    async function login(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/login";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
 
        if (responseText == "Login erfolgreich.") {
            
            let usernameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("username");
            console.log(usernameInput.value);
            localStorage.setItem("username", usernameInput.value);
            window.location.href = "./allrecipes.html";

            //localStorage.getItem("username");

        } else {
            console.log("fehlgeschlagen");
            showResponseFunc(responseText);
        }  
    }

    function showResponseFunc(text: string): void {
        showresponse.innerHTML = text;
    }
}
