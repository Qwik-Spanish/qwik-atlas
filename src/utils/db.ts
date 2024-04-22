import { Db, MongoClient } from 'mongodb';

let cachedDb: Db | undefined = undefined;
let client: MongoClient | undefined = undefined;

export async function initDB() {
  console.log('initialising db');
  client = (await MongoClient.connect(
    process.env.DATABASE_URI || ''
  )) as MongoClient;

  // Specify which database we want to use
  const db: Db = await client.db(process.env.DB_NAME || '');

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
  return cachedDb as Db;
};
