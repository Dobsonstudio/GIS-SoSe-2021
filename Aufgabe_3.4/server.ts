import * as Http from "http"; //import vom http
//import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    let mongoCollection: Mongo.Collection;
    let mongoDatabase: string = "mongodb+srv://dobsonstudio:Test1Passwort@gis-sose2021.1lic1.mongodb.net/Test1?retryWrites=true&w=majority";
    //Nachricht, dass der Server startet
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Setzt Port auf 8100
    startServer(port);
    connectToMongoDatabase(mongoDatabase);

    async function connectToMongoDatabase(url: string): Promise<void> {
        console.log("Starting connection");
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(url, options);
        await mongoClient.connect();
        mongoCollection = mongoClient.db("Test1").collection("Test1");
        console.log("Database connection", mongoCollection != undefined);
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
    //Ausgabe vom Server, dass der Server auf eine Eingabe wartet bzw. zuhört


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        //Konsole gibt Signal zurück bei einer Req
        console.log("Request URL", _request.url);
        //_response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Header eigenschaften werden gesetzt

        let quest: URL = new URL(_request.url, "https://dobsonstudio2021.herokuapp.com/");
        let questdata: FormElements = {fname: quest.searchParams.get("fname"), lname: quest.searchParams.get("lname"), email: quest.searchParams.get("email")};
        if (quest.pathname == "/addDB") {
            mongoCollection.insertOne(questdata);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.write("Added {Vorname: " + questdata.fname + ", Nachname: " + questdata.lname + ", E-Mail: " + questdata.email + "} to Database");
        }
        else if (quest.pathname == "/callDB") {
            let collectionData: AllData[] = await mongoCollection.find().toArray();
            let cDataJSON: string = JSON.stringify(collectionData);
            _response.setHeader("content-type", "application/json; charset=utf-8");
            _response.write(cDataJSON);
        } else if (quest.pathname == "/delete") {
            _response.write("deleted");
            mongoCollection.deleteOne({_id: new Mongo.ObjectId(quest.searchParams.get("_id"))});
        }
        _response.end();
    }

    interface FormElements {
        fname: string;
        lname: string;
        email: string;
    }

    interface AllData extends FormElements {
        _id: string;
    }
    
}
