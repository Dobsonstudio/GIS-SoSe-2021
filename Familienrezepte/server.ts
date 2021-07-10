import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Rezepte_Server {
    let mongoCollection: Mongo.Collection;
    let mongoDatabase: string = "mongodb+srv://dobsonstudio:apfelsaft@gis-sose2021.1lic1.mongodb.net/rezepte?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    start();

    async function start(): Promise<void> {
        await connectToMongoDatabase(mongoDatabase);
        startServer(port);
    } 

    async function connectToMongoDatabase(url: string): Promise<void> {
        console.log("Starting connection");
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();

        //if
        mongoCollection = mongoClient.db("rezepte").collection("rezepteUser");

        //else
        //mongoCollection = mongoClient.db("rezepte").collection("rezepte");

        console.log("Database connection", mongoCollection != undefined);
        console.log("Collection undefined", mongoCollection == undefined);
    }

    function startServer(port: number | string): void {
        console.log("Starting server");
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        console.log("Request URL", _request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let quest: URL = new URL(_request.url, "https://dobsonstudio2021.herokuapp.com/");
        let questdata: FormElements = {username: quest.searchParams.get("username"), password: quest.searchParams.get("password")};
        
        if (quest.pathname == "/addDB") {
            mongoCollection.insertOne(questdata);
            _response.write("Dein Account wurde erfolgreich erstellt. Du kannst dich nun einloggen.");

        } else if (quest.pathname == "/login") {

            if (mongoCollection.findOne(questdata) == null) {
                _response.write("Login fehlgeschlagen.");
                console.log("felder dürfen nicht leer sein");
            } else {
                /*Response.redirect("./allrecipes.html");*/
                window.location.href = "./allrecipes.html";
                _response.write("Login erfolgreich.");
            }
        }
        _response.end();
    }

    interface FormElements {
        username: string;
        password: string;
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
