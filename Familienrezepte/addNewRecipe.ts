namespace Rezepte_Server {
    let showresponse: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    document.getElementById("addNewRecipe").addEventListener("click", addRecipe);

    async function addRecipe(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let url: RequestInfo = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/addNewRecipe";
        url += "?" + query.toString() + "&authorName=" + localStorage.getItem("username");  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();
            
        console.log(responseText);
        showResponseFunc(responseText);
        }    

    function showResponseFunc(text: string): void {
        showresponse.innerHTML = text;
    }
}