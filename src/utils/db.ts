import * as mongoDB from "mongodb";


let cachedDb: mongoDB.Db | undefined = undefined;
let client: mongoDB.MongoClient | undefined = undefined;


export const initDB = async () => {
    console.log("initialising db");
    client = await mongoDB.MongoClient.connect(process.env.DATABASE_URI || "");

    // Specify which database we want to use
    const db = await client.db(process.env.DB_NAME || "");

    cachedDb = db;
    console.log('created cached db');
    return db;
}

export const getDBClient = async () => {
    console.log('getting db');
    if (cachedDb) {
        console.log('returning cached db');
        return cachedDb;
    }
    cachedDb = await initDB();
    console.log('returning new db');
    return cachedDb as mongoDB.Db;
}
