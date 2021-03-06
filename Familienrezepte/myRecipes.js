"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let showresponse = document.getElementById("response");
    let myRecipesFlex = document.getElementById("myRecipesFlex");
    document.getElementById("addNewRecipe").addEventListener("click", addRecipe);
    window.onload = () => {
        showMyRecipes();
    };
    async function addRecipe() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "/addNewRecipe";
        url += "?" + query.toString() + "&authorName=" + localStorage.getItem("username");
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log(responseText);
        showResponseFunc(responseText);
    }
    function showResponseFunc(text) {
        showresponse.innerHTML = text;
    }
    async function showMyRecipes() {
        let userName = localStorage.getItem("username");
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "/showMyRecipes";
        url += "?username=" + userName;
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log("Retrieved JSON", JSON.parse(JSON.stringify(responseText)));
        let responseJSON = JSON.parse(responseText);
        for (let i = 0; i < responseJSON.length; i++) {
            let temp = document.createElement("div");
            temp.className = "databaseEntry";
            temp.innerHTML =
                "<br> Autor: " + responseJSON[i].authorName +
                    "<br> Rezept: " + responseJSON[i].recipeName +
                    "<br> Zutaten: " + responseJSON[i].ingredient +
                    "<br> Zubereitung: " + responseJSON[i].tutorial + "<br>";
            myRecipesFlex.appendChild(temp);
        }
    }
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=myRecipes.js.map