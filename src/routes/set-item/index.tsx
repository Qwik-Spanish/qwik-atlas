import type { RequestEvent, RequestHandler } from '@builder.io/qwik-city';

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