"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let favAdded = document.getElementById("favAdded");
    let myRecipesFlex = document.getElementById("allRecipesFlex");
    window.onload = () => {
        showAllRecipes();
    };
    async function addToFavorites() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "/addToFavorites";
        url += "?" + query.toString() + "&userName=" + localStorage.getItem("username") +
            "$_id" + this.value;
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log("Fav: ", responseText);
        favAdded.innerHTML = responseText;
    }
    async function showAllRecipes() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "/showAllRecipes";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log("Retrieved JSON", JSON.parse(JSON.stringify(responseText)));
        let responseJSON = JSON.parse(responseText);
        for (let i = 0; i < responseJSON.length; i++) {
            let temp = document.createElement("div");
            let favButton = document.createElement("button");
            favButton.addEventListener("click", addToFavorites);
            favButton.value = responseJSON[i]._id;
            favButton.textContent = "♡";
            temp.className = "databaseEntry";
            temp.innerHTML =
                "Autor: " + responseJSON[i].authorName +
                    "<br> Rezept: " + responseJSON[i].recipeName +
                    "<br> Zutaten: " + responseJSON[i].ingredient +
                    "<br> Zubereitung: " + responseJSON[i].tutorial + "<br>";
            temp.appendChild(favButton);
            myRecipesFlex.appendChild(temp);
        }
    }
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=allRecipes.js.map