import {  type RequestHandler, RequestEvent } from "@builder.io/qwik-city";
import { getItem } from "~/helpers/db-operations";

export const onGet: RequestHandler = async (event: RequestEvent) => {
  console.log('PARAMS:', event.params)
  
   const character =  await getItem(event.params['id'], 'characters');
   event.send(character.data ? 202 : 404, JSON.stringify({
    character,
   }));
  
};