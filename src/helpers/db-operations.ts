import {  server$ } from "@builder.io/qwik-city";
import { Character } from "~/store/characters";
import { getDBClient } from "~/utils/db";

export const getItems = server$(async (query: URLSearchParams, collectionName: string) => {   
  console.log(query)
    const searchParams = new URLSearchParams(query);
    const page = Number(searchParams.has("page") ? searchParams.get('page') : 1);
  
  const items = Number(searchParams.has("items") ? searchParams.get('items') : 10);
  const db = await getDBClient();
  const collection = await db.collection(collectionName);

  const data = await collection.find().sort({ id: 1 }).skip((page - 1) * items).limit(items).toArray();

  if (!data) {
   return {
    ok: false,
    message: `Take all characters selection`,
    data: undefined
   }
  }

  return {
    ok: true,
    message: 'Select info OK',
    data
  };
});

export const getItem = server$(async (id: string, collectionName) => {
    const db = await getDBClient();
    const collection = await db.collection(collectionName);
  
    const data = await collection.findOne({
      id
    });
  
    if (!data) {
     return {
      ok: false,
      message: `Select item not exist`,
      data: undefined
     }
    }
  
    return {
      ok: true,
      message: 'Select info OK',
      data
    };
  });


  export const setItem = server$(async(character: Character, collectionName) => {
    console.log(character)
    const db = await getDBClient();
    const collection = await db.collection(collectionName);

    const data = await collection.insertOne(character);
    if (!data) {
      return {
       ok: false,
       message: `Select item not exist`,
       data: undefined
      }
     }
   
     return {
       ok: true,
       message: 'Select info OK add',
       data
     };
  })
