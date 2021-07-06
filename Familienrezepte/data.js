"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let showresponse = document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", addToDB);
    document.getElementById("callFromDB").addEventListener("click", callFromDB);
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
        //let form: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
        //form.reset();
    }
    async function callFromDB() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/callDB";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        //showresponse.innerHTML = ""; 
        console.log("Retrieved JSON", JSON.parse(responseText));
        let responseJSON = JSON.parse(responseText);
        for (let i = 0; i < responseJSON.length; i++) {
            let temp = document.createElement("div");
            temp.className = "databaseEntry";
            temp.innerHTML = "id: " + responseJSON[i]._id +
                "<br> Vorname: " + responseJSON[i].username +
                "<br> Nachname: " + responseJSON[i].password +
                "<br> E-Mail: " + responseJSON[i].email + "<br>";
            showresponse.appendChild(temp);
        }
    }
    function showResponseFunc(text) {
        showresponse.innerHTML = text;
    }
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=data.js.map