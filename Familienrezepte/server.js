"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rezepte_Server = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var Rezepte_Server;
(function (Rezepte_Server) {
    let mongoCollection;
    let mongoDatabase = "mongodb+srv://dobsonstudio:apfelsaft@gis-sose2021.1lic1.mongodb.net/rezepte?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    start();
    async function start() {
        await connectToMongoDatabase(mongoDatabase);
        startServer(port);
    }
    async function connectToMongoDatabase(url) {
        console.log("Starting connection");
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        //if
        mongoCollection = mongoClient.db("rezepte").collection("rezepteUser");
        //else
        //mongoCollection = mongoClient.db("rezepte").collection("rezepte");
        console.log("Database connection", mongoCollection != undefined);
        console.log("Collection undefined", mongoCollection == undefined);
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
            _response.write("Dein Account wurde erfolgreich erstellt. Du kannst dich nun einloggen.");
        }
        else if (quest.pathname == "/login") {
            if (mongoCollection.findOne(questdata) == null) {
                _response.write("Login fehlgeschlagen.");
            }
            else {
                Response.redirect("./allrecipes.html");
            }
        }
        _response.end();
    }
    /*
        interface NewRecipe
            rezeptName: string;
            ingredient1: string;
            ingredient2: string;
            ingredient3: string;
            ingredient4: string;
            ingredient5: string;
            ingredient6: string;
            ingredient7: string;
            ingredient8: string;
            ingredient9: string;
            ingredient10: string;
            zubereitung: string; //string array?
    }
    */
})(Rezepte_Server = exports.Rezepte_Server || (exports.Rezepte_Server = {}));
/*
    interface NewRecipe
        rezeptName: string;
        ingredient1: string;
        ingredient2: string;
        ingredient3: string;
        ingredient4: string;
        ingredient5: string;
        ingredient6: string;
        ingredient7: string;
        ingredient8: string;
        ingredient9: string;
        ingredient10: string;
        zubereitung: string; //string array?
}
*/
//# sourceMappingURL=server.js.map