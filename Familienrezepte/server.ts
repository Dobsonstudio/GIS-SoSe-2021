import * as Http from "http";
import * as Mongo from "mongodb";

export namespace Rezepte_Server {
    let userCollection: Mongo.Collection;
    let recipeCollection: Mongo.Collection;
    let favCollection: Mongo.Collection;
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
        
        userCollection = mongoClient.db("rezepte").collection("rezepteUser");
        recipeCollection = mongoClient.db("rezepte").collection("rezepte");
        favCollection = mongoClient.db("rezpte").collection("favorites");
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

        let questdataRecipes: NewRecipe = {
        authorName: quest.searchParams.get("authorName"),
        recipeName: quest.searchParams.get("recipeName"), 
        ingredient: [
        quest.searchParams.get("ingredient1"), quest.searchParams.get("ingredient2"), 
        quest.searchParams.get("ingredient3"), quest.searchParams.get("ingredient4"), 
        quest.searchParams.get("ingredient5"), quest.searchParams.get("ingredient6"), 
        quest.searchParams.get("ingredient7"), quest.searchParams.get("ingredient8"), 
        quest.searchParams.get("ingredient9"), quest.searchParams.get("ingredient10")
        ], 
        tutorial: quest.searchParams.get("tutorial")};
        
        if (quest.pathname == "/addNewRecipe") {
            recipeCollection.insertOne(questdataRecipes);
            _response.write("Dein Rezept wurde veröffentlicht.");
        }

        if (quest.pathname == "/addDB") {
            let userTaken: number = (await userCollection.find({username: quest.searchParams.get("username")}).toArray()).length;
            if (userTaken == 0) {
                userCollection.insertOne(questdata);
                _response.write("Dein Account wurde erfolgreich erstellt. Du kannst dich nun einloggen.");
            } else {
                _response.write("Der Nutzername ist leider schon vergeben. Versuche es mit einem anderen.");
            }
            _response.end();  
        }
        
        if (quest.pathname == "/login") {
            let checkUser: number = (await userCollection.find({username: quest.searchParams.get("username"), password: quest.searchParams.get("password")}).toArray()).length;
        
            if (checkUser == 1) {
                _response.write("Login erfolgreich.");
            } else {
                _response.write("Login fehlgeschlagen.");

            }
        }
        
        if (quest.pathname == "/showMyRecipes") {
                let userName: string = quest.searchParams.get("username").split("?")[0].toString();
                
                let collectionData: AllData[] = await recipeCollection.find({authorName: userName}).toArray();
                //let collectionData: AllData[] = await recipeCollection.find().toArray();
                let cDataJSON: string = JSON.stringify(collectionData);
                _response.write(cDataJSON);
            }

        if (quest.pathname == "/showAllRecipes") {
                let collectionData: AllData[] = await recipeCollection.find().toArray();
                let cDataJSON: string = JSON.stringify(collectionData);
                /*if (collectionData == undefined) {
                    display == false;
                }*/
                _response.write(cDataJSON);
            }
        if (quest.pathname == "/addToFavorites") {
            let userName: string = quest.searchParams.get("username").toString();
            let _id: string = quest.searchParams.get("_id").toString();
            console.log("userName: " + userName);
            console.log("id: " + _id);

            let userNameCheck: number = (await favCollection.find({username: userName}).toArray()).length;
            let recipeIdCheck: number = (await favCollection.find({_id: _id}).toArray()).length;
            if (userNameCheck == 0 && recipeIdCheck == 0) {
                favCollection.insertOne(questdata);
                _response.write("Das Rezepte wurde erfolgreich zu deinen Favoriten hinzugefügt.");
            } else {
                _response.write("Das Rezept befindet sich bereits in deinen Favoriten.");
            }
            _response.end();  
        }

        _response.end();
    }

    interface FormElements {
        username: string;
        password: string;
    }

    interface NewRecipe {
        authorName: string;
        recipeName: string;
        ingredient: string[];
        tutorial: string;
    }

    interface AllData extends NewRecipe {
        _id: string;
    }
}
