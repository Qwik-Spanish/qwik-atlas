import {  type RequestHandler, server$ } from "@builder.io/qwik-city";
import { getDBClient } from "../../utils/db";
import type { User } from "~/store/users";

const getUser = server$(async (email) => {
  const db = await getDBClient();
  const collection = await db.collection('users');

  const data = await collection.findOne({
    email
  }) as User;

  return data;
});

export const onGet: RequestHandler = async (event) => {
  
  
   const user =  await getUser('some email address');
   event.send(202, JSON.stringify({
    user: user,
   }));
  
};