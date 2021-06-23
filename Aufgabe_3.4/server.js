"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http"); //import vom http
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    let mongoCollection;
    let mongoDatabase = "mongodb+srv://dobsonstudio:Test1Passwort@gis-sose2021.1lic1.mongodb.net/Test1?retryWrites=true&w=majority";
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
        mongoCollection = mongoClient.db("Test1").collection("Test1");
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
        let questdata = { fname: quest.searchParams.get("fname"), lname: quest.searchParams.get("lname"), email: quest.searchParams.get("email") };
        if (quest.pathname == "/addDB") {
            mongoCollection.insertOne(questdata);
            _response.write("Added {Vorname: " + questdata.fname + ", Nachname: " + questdata.lname + ", E-Mail: " + questdata.email + "} to Database");
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
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=server.js.map