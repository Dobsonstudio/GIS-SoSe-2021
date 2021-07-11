"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let showresponse = document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", addToDB);
    document.getElementById("showAllRecipes").addEventListener("click", showAllRecipes);
    async function addToDB() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/addDB";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log(responseText);
        showResponseFunc(responseText);
    }
    function showResponseFunc(text) {
        showresponse.innerHTML = text;
    }
    async function showAllRecipes() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/showAllRecipes";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log("Retrieved JSON", JSON.parse(responseText));
        let responseJSON = JSON.parse(responseText);
        for (let i = 0; i < responseJSON.length; i++) {
            let temp = document.createElement("div");
            temp.className = "databaseEntry";
            temp.innerHTML =
                "<br> Autor: " + responseJSON[i].authorName +
                    "<br> Rezept: " + responseJSON[i].rezeptName +
                    "<br> Zutaten: " + responseJSON[i].ingredient +
                    "<br> Zubereitung: " + responseJSON[i].zubereitung + "<br>";
            showresponse.appendChild(temp);
        }
    }
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=data.js.map