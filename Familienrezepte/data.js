"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let showresponse = document.getElementById("response");
    document.getElementById("addToDB").addEventListener("click", addToDB);
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
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=data.js.map