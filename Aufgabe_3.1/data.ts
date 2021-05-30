namespace P_3_1Server {
    let submit: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
    submit.addEventListener("click", click);
    
    async function click(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://dobsonstudio2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "GET"});
        let responseText: string = await response.text();
        showResponse(responseText);
        console.log(responseText);     
    }

    function showResponse(response: string): void {
        let responseDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("response");
        responseDiv.innerHTML = "Antwort vom Server: " + response;
    }
}