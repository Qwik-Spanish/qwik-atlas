import {  type RequestHandler, server$ } from "@builder.io/qwik-city";
import { getDBClient } from "~/utils/db";
import type { Character } from "~/store/characters";

const getCharacter = server$(async (id: string) => {
  const db = await getDBClient();
  const collection = await db.collection('characters');

  const data = await collection.findOne({
    id
  }) as Character;

  return data;
});


export const onGet: RequestHandler = async (event: any) => {
  
  
   const character =  await getCharacter('1');
   event.send(202, JSON.stringify({
    character,
   }));
  
};