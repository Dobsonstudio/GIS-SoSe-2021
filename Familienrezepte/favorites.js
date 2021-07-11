"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let myRecipesFlex = document.getElementById("myFavoritesFlex");
    window.onload = () => {
        showMyRecipes();
    };
    async function showMyRecipes() {
        let userName = localStorage.getItem("username");
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "/showFavs";
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
//# sourceMappingURL=favorites.js.map