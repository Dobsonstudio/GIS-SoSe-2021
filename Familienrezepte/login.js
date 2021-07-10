"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rezepte_Server;
(function (Rezepte_Server) {
    let showresponse = document.getElementById("response");
    document.getElementById("buttonLogin").addEventListener("click", login);
    async function login() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/login";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        if (responseText == "Login erfolgreich.") {
            window.location.href = "./allrecipes.html";
        }
        else {
            console.log("fehlgeschlagen");
        }
    }
    function showResponseFunc(text) {
        showresponse.innerHTML = text;
    }
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=login.js.map