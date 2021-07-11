"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rezepte_Server = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var Rezepte_Server;
(function (Rezepte_Server) {
    let userCollection;
    let recipeCollection;
    let favCollection;
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
        userCollection = mongoClient.db("rezepte").collection("rezepteUser");
        recipeCollection = mongoClient.db("rezepte").collection("rezepte");
        favCollection = mongoClient.db("rezpte").collection("favorites");
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
        let questdataRecipes = {
            authorName: quest.searchParams.get("authorName"),
            recipeName: quest.searchParams.get("recipeName"),
            ingredient: [
                quest.searchParams.get("ingredient1"), quest.searchParams.get("ingredient2"),
                quest.searchParams.get("ingredient3"), quest.searchParams.get("ingredient4"),
                quest.searchParams.get("ingredient5"), quest.searchParams.get("ingredient6"),
                quest.searchParams.get("ingredient7"), quest.searchParams.get("ingredient8"),
                quest.searchParams.get("ingredient9"), quest.searchParams.get("ingredient10")
            ],
            tutorial: quest.searchParams.get("tutorial")
        };
        if (quest.pathname == "/addNewRecipe") {
            recipeCollection.insertOne(questdataRecipes);
            _response.write("Dein Rezept wurde veröffentlicht.");
        }
        if (quest.pathname == "/addDB") {
            let userTaken = (await userCollection.find({ username: quest.searchParams.get("username") }).toArray()).length;
            if (userTaken == 0) {
                userCollection.insertOne(questdata);
                _response.write("Dein Account wurde erfolgreich erstellt. Du kannst dich nun einloggen.");
            }
            else {
                _response.write("Der Nutzername ist leider schon vergeben. Versuche es mit einem anderen.");
            }
            _response.end();
        }
        if (quest.pathname == "/login") {
            let checkUser = (await userCollection.find({ username: quest.searchParams.get("username"), password: quest.searchParams.get("password") }).toArray()).length;
            if (checkUser == 1) {
                _response.write("Login erfolgreich.");
            }
            else {
                _response.write("Login fehlgeschlagen.");
            }
        }
        if (quest.pathname == "/showMyRecipes") {
            let userName = quest.searchParams.get("username").split("?")[0].toString();
            let collectionData = await recipeCollection.find({ authorName: userName }).toArray();
            //let collectionData: AllData[] = await recipeCollection.find().toArray();
            let cDataJSON = JSON.stringify(collectionData);
            _response.write(cDataJSON);
        }
        if (quest.pathname == "/showAllRecipes") {
            let collectionData = await recipeCollection.find().toArray();
            let cDataJSON = JSON.stringify(collectionData);
            /*if (collectionData == undefined) {
                display == false;
            }*/
            _response.write(cDataJSON);
        }
        if (quest.pathname == "/addToFavorites") {
            let userName = quest.searchParams.get("username").toString();
            let _id = quest.searchParams.get("_id").toString();
            console.log("userName: " + userName);
            console.log("id: " + _id);
            let userNameCheck = (await favCollection.find({ username: userName }).toArray()).length;
            let recipeIdCheck = (await favCollection.find({ _id: _id }).toArray()).length;
            if (userNameCheck == 0 && recipeIdCheck == 0) {
                favCollection.insertOne(questdata);
                _response.write("Das Rezepte wurde erfolgreich zu deinen Favoriten hinzugefügt.");
            }
            else {
                _response.write("Das Rezept befindet sich bereits in deinen Favoriten.");
            }
            _response.end();
        }
        _response.end();
    }
})(Rezepte_Server = exports.Rezepte_Server || (exports.Rezepte_Server = {}));
//# sourceMappingURL=server.js.map