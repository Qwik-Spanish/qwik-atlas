// https://discord.com/channels/842438759945601056/1160945164471259146/1160945483670376468
/**
 * declare interface RouteModule<BODY = unknown> {
    onDelete?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onGet?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onHead?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onOptions?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onPatch?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onPost?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onPut?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
    onRequest?: RequestHandler_2<BODY> | RequestHandler_2<BODY>[];
}
 * @param event 
 */

/*export const onPost: RequestHandler = async (event: RequestEvent) => {
    console.log('PARAMS:', event.params)
    
     const character =  await setItem(event.params['id'], 'characters');
     event.send(202, JSON.stringify({
      character,
     }));
    
  };*/

  // https://www.dotcom-monitor.com/wiki/es/knowledge-base/http-status-codes/

  import {  type RequestHandler, RequestEvent } from "@builder.io/qwik-city";
import {  setItem } from "~/helpers/db-operations";
import { Character } from "~/store/characters";

export const onRequest: RequestHandler = async (event: RequestEvent) => {
  console.log('PARAMS:', event.params, event.method)
  const newItem: Character= {
    "id": "10",
    "name": "Prueba",
    "actor": "Prueba",
    "description": "Jesse Bruce Pinkman es el compañero de Walter White en el tráfico de metanfetamina. En el instituto, Jesse era un consumidor, fabricante y traficante de poca monta de metanfetamina. Era un estudiante que prestaba poca atención a las clases de química de su profesor, el propio Walter. Años después, Jesse se dedica al tráfico de droga con el seudónimo \"Cap'n Cook\". Al igual que Walt, a Jesse le perturba la brutalidad existente en los altos niveles del tráfico de droga, pero hace lo que cree ser necesario. A menudo sufre sentimientos de culpa debido a las muertes de personas con la que se ha asociado, todas relacionadas con el negocio. Ocasionalmente va a reuniones de Narcóticos Anónimos para que le ayuden con estos sentimientos",
    "total_episodes": "62",
    "photo": "JesseS5B.jpg",
    "url": "https://es.wikipedia.org/wiki/Jesse_Pinkman"
  }


  
   const character =  await setItem(newItem, 'characters');
   event.json(character.data ? 202 : 404,  character);
   /*event.send(character.data ? 202 : 404, JSON.stringify({
    character,
   }));*/
   

};