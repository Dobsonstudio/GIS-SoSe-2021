namespace P_3_2Server {
    let path: string;

    document.getElementById("submitHTML").addEventListener("click", function(): void {
        path = "/html";
        handleSubmit();
    });
    document.getElementById("submitJSON").addEventListener("click", function(): void {
        path = "/json";
        handleSubmit();
    });
    
    async function handleSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
        showResponse(responseText);
        if (path == "/json") console.log(JSON.parse(responseText));
        else console.log(responseText);     
    }

    function showResponse(response: string): void {
        let responseDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("response");
        responseDiv.innerHTML = "Antwort vom Server: " + response;
    }
}