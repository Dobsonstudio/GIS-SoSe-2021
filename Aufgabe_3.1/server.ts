import * as Http from "http"; //import vom http

export namespace P_3_1Server {
    console.log("Starting server");
    //Nachricht, dass der Server startet
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Setzt Port auf 8100

    let server: Http.Server = Http.createServer();
    //Erstellt neuen Server
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Listener hinzugefügt

    function handleListen(): void {
        console.log("Listening");
    }
    //Ausgabe vom Server, dass der Server auf eine Eingabe wartet bzw. zuhört


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}