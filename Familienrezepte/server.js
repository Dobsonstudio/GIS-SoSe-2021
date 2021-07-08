"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rezepte_Server = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var Rezepte_Server;
(function (Rezepte_Server) {
    let mongoCollection;
    let mongoDatabase = "mongodb+srv://dobsonstudio:dobsonstudio@gis-sose2021.1lic1.mongodb.net/rezepte?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToMongoDatabase(mongoDatabase);
    async function connectToMongoDatabase(url) {
        console.log("Starting connection");
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("rezepte").collection("rezepteUser");
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
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log("Request URL", _request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let quest = new URL(_request.url, "https://dobsonstudio2021.herokuapp.com/");
        let questdata = { username: quest.searchParams.get("username"), password: quest.searchParams.get("password") };
        if (quest.pathname == "/addDB") {
            mongoCollection.insertOne(questdata);
            _response.write("Added {Username: " + questdata.username + ", Passwort: " + questdata.password + "} to Database");
        }
        _response.end();
    }
})(Rezepte_Server = exports.Rezepte_Server || (exports.Rezepte_Server = {}));
//# sourceMappingURL=server.js.map