namespace Rezepte_Server {
    let showresponse: HTMLDivElement = <HTMLDivElement>document.getElementById("response");
    let myRecipesFlex: HTMLDivElement = <HTMLDivElement>document.getElementById("allRecipesFlex");

    window.onload = () => {
        showAllRecipes();
      };

    async function showAllRecipes(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/showAllRecipes";
        url += "?" + query.toString();  
        let response: Response = await fetch(url, { method: "get"});
        let responseText: string = await response.text();

        console.log("Retrieved JSON", JSON.parse(JSON.stringify(responseText)));
        let responseJSON: RecipeData[] = JSON.parse(responseText);
    
        for (let i: number = 0; i < responseJSON.length; i++) {
        let temp: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        
        temp.className = "databaseEntry";
        temp.innerHTML =  
        "Autor: " + responseJSON[i].authorName +
        "<br> Rezept: " + responseJSON[i].recipeName +
        "<br> Zutaten: " + responseJSON[i].ingredient + 
        "<br> Zubereitung: " + responseJSON[i].tutorial + "<br>";
        myRecipesFlex.appendChild(temp);
        }

        interface NewRecipe {
            authorName: string;
            recipeName: string;
            ingredient: string[];
            tutorial: string;
        }

        interface RecipeData extends NewRecipe {
            _id: string;
        }
    }
}