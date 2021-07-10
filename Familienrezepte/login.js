"use strict";
var Rezepte_Server;
(function (Rezepte_Server) {
    let showresponse = document.getElementById("response");
    document.getElementById("buttonLogin").addEventListener("click", login);
    async function login() {
        let formData = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://dobsonstudio2021.herokuapp.com";
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url += "/login";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        if (responseText == "Login erfolgreich.") {
            let usernameInput = document.getElementById("username");
            console.log(usernameInput.value);
            localStorage.setItem("username", usernameInput.value);
            window.location.href = "./allrecipes.html";
            //localStorage.getItem("username");
        }
        else {
            console.log("fehlgeschlagen");
            showResponseFunc(responseText);
        }
    }
    function showResponseFunc(text) {
        showresponse.innerHTML = text;
    }
})(Rezepte_Server || (Rezepte_Server = {}));
//# sourceMappingURL=login.js.map