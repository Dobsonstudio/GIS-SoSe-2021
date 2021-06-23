"use strict";
var P_3_4Server;
(function (P_3_4Server) {
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
        let form = document.getElementById("formular");
        form.reset();
    }
    async function callFromDB() {
        let formData = new FormData(document.forms[0]);
        let url = "https://dobsonstudio2021.herokuapp.com";
        let query = new URLSearchParams(formData);
        url += "/callDB";
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        showresponse.innerHTML = "";
        console.log("Retrieved JSON", JSON.parse(responseText));
        let responseJSON = JSON.parse(responseText);
        for (let i = 0; i < responseJSON.length; i++) {
            let temp = document.createElement("div");
            temp.className = "databaseEntry";
            temp.innerHTML = "id: " + responseJSON[i]._id +
                "<br> Vorname: " + responseJSON[i].fname +
                "<br> Nachname: " + responseJSON[i].lname +
                "<br> E-Mail: " + responseJSON[i].email + "<br>";
        }
    }
    function showResponseFunc(text) {
        showresponse.innerHTML = text;
    }
})(P_3_4Server || (P_3_4Server = {}));
//# sourceMappingURL=data.js.map