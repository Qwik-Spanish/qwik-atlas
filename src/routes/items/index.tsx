import {  type RequestHandler, RequestEvent } from "@builder.io/qwik-city";

import { getItems } from "~/helpers/db-operations";

export const onGet: RequestHandler = async (event: RequestEvent) => {
    console.log('QUERY', event.query)
 
   const characters =  await getItems(event.query, 'characters');
   event.send(202, JSON.stringify({characters})); // con characters
   // event.send(202, JSON.stringify(characters)); // sin characters
  
};