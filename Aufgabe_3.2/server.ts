import * as Http from "http"; //import vom http
//import * as Url from "url";

export namespace P_3_2Server {
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
        //Konsole gibt Signal zurück bei einer Req
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Header eigenschaften werden gesetzt

        let quest: URL = new URL(_request.url, "https://dobsonstudio2021.herokuapp.com/");
        let questdata: FormElements = {fname: quest.searchParams.get("fname"), lname: quest.searchParams.get("lname")};
        if (quest.pathname == "/html") {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write(htmlResponse(questdata));
        }
        if (quest.pathname == "/json") {
        _response.setHeader("content-type", "application/json");
        _response.write(JSON.stringify(questdata));
        }
        _response.end();    
    }
}

function htmlResponse(data: FormElements): string {
    return "<div id='htmlResponse'> <p id='responsefname'>Vorname: " + data.fname + "</p>" +
           "<p id='responselname'>Nachname: " + data.lname + "</p></div>";
}

interface FormElements {
    fname: string;
    lname: string;
}
