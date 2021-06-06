"use strict";
var P_3_2Server;
(function (P_3_2Server) {
    let path;
    document.getElementById("submitHTML").addEventListener("click", function () {
        path = "/html";
        handleSubmit();
    });
    document.getElementById("submitJSON").addEventListener("click", function () {
        path = "/json";
        handleSubmit();
    });
    async function handleSubmit() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showResponse(responseText);
        if (path == "/json")
            console.log(JSON.parse(responseText));
        else
            console.log(responseText);
    }
    function showResponse(response) {
        let responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "Antwort vom Server: " + response;
    }
})(P_3_2Server || (P_3_2Server = {}));
//# sourceMappingURL=data.js.map