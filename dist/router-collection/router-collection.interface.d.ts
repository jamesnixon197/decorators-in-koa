import Router from 'koa-router';
import { RequestMethod } from '../enums/request-method.enum';
export interface RouterSettings {
    path: string;
    callbackFunction: () => void;
    requestMethod: RequestMethod;
}
export interface IRouterCollection {
    path?: string;
    routerSettings?: RouterSettings[];
    setupRoutes: () => Router;
    pushRoute: ({}: RouterSettings) => void;
}
//# sourceMappingURL=router-collection.interface.d.ts.map