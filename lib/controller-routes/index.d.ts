import Router from 'koa-router';
import { IRouterCollection } from '../router-collection/router-collection.interface';
export declare const setupControllerRoutes: (routerControllers: (new (...args: any[]) => IRouterCollection)[]) => Router;
