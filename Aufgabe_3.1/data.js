"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", click);
    async function click() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "GET" });
        let responseText = await response.text();
        showResponse(responseText);
        console.log(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Antwort vom Server: " + response;
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=data.js.map