"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http"); //import vom http
var P_3_1Server;
(function (P_3_1Server) {
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
        //Konsole gibt Signal zurück bei einer Request
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Header eigenschaften werden gesetzt
        _response.write(_request.url);
        //Die URL der Response wird hinzugefügt
        _response.end();
        //Response endet
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map