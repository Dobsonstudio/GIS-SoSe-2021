"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rezepte_Server = void 0;
const Http = require("http"); //import vom http
const Mongo = require("mongodb");
var Rezepte_Server;
(function (Rezepte_Server) {
    let mongoCollection;
    let mongoDatabase = "mongodb+srv://dobsonstudio:<password>@gis-sose2021.1lic1.mongodb.net/rezepte_user?retryWrites=true&w=majority";
    //Nachricht, dass der Server startet
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Setzt Port auf 8100
    startServer(port);
    connectToMongoDatabase(mongoDatabase);
    async function connectToMongoDatabase(url) {
        console.log("Starting connection");
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("rezepte_user").collection("rezepte_user");
        console.log("Database connection", mongoCollection != undefined);
    }
    function startServer(port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Listening");
    }
    //Ausgabe vom Server, dass der Server auf eine Eingabe wartet bzw. zuhört
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Konsole gibt Signal zurück bei einer Req
        console.log("Request URL", _request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Header eigenschaften werden gesetzt
        let quest = new URL(_request.url, "https://dobsonstudio2021.herokuapp.com/");
        let questdata = { username: quest.searchParams.get("username"), password: quest.searchParams.get("password") };
        if (quest.pathname == "/addDB") {
            mongoCollection.insertOne(questdata);
            _response.write("Added {Username: " + questdata.username + ", Passwort: " + questdata.password + "} to Database");
        }
        else if (quest.pathname == "/callDB") {
            let collectionData = await mongoCollection.find().toArray();
            let cDataJSON = JSON.stringify(collectionData);
            _response.write(cDataJSON);
        }
        /*} else if (quest.pathname == "/delete") {
            _response.write("deleted");
            mongoCollection.deleteOne({_id: new Mongo.ObjectId(quest.searchParams.get("_id"))});
        }*/
        _response.end();
    }
})(Rezepte_Server = exports.Rezepte_Server || (exports.Rezepte_Server = {}));
//# sourceMappingURL=server.js.map