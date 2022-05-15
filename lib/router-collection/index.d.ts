import Router from 'koa-router';
import { RouterSettings, IRouterCollection } from './router-collection.interface';
export declare class RouterCollection implements IRouterCollection {
    path?: string;
    routerSettings?: RouterSettings[];
    setupRoutes(): Router;
    private setupSingleRoute;
    pushRoute(routerSettings: RouterSettings): void;
}
