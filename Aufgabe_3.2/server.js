"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http"); //import vom http
//import * as Url from "url";
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server");
    //Nachricht, dass der Server startet
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Setzt Port auf 8100
    let server = Http.createServer();
    //Erstellt neuen Server
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Listener hinzugefügt
    function handleListen() {
        console.log("Listening");
    }
    //Ausgabe vom Server, dass der Server auf eine Eingabe wartet bzw. zuhört
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Konsole gibt Signal zurück bei einer Req
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Header eigenschaften werden gesetzt
        let quest = new URL(_request.url, "https://dobsonstudio2021.herokuapp.com/");
        let questdata = { fname: quest.searchParams.get("fname"), lname: quest.searchParams.get("lname") };
        if (quest.pathname == "/html")
            _response.write(htmlResponse(questdata));
        if (quest.pathname == "/json")
            _response.write(JSON.stringify(questdata));
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
function htmlResponse(data) {
    return "<div id='htmlResponse'> <p id='responsefname'>Vorname: " + data.fname + "</p>" +
        "<p id='responselname'>Nachname: " + data.lname + "</p></div>";
}
//# sourceMappingURL=server.js.map