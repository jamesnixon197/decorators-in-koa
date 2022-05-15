import Router from 'koa-router';

import {
  RouterSettings,
  IRouterCollection,
} from './router-collection.interface';

export class RouterCollection implements IRouterCollection {
  path?: string;

  routerSettings?: RouterSettings[];

  setupRoutes(): Router {
    if (this.path === undefined) throw new Error('Controller path is missing');

    if (this.routerSettings === undefined || this.routerSettings.length === 0)
      throw new Error(`No routes set for controller path '${this.path}'`);

    const router = new Router();

    this.routerSettings!.forEach((routeSettings: RouterSettings) =>
      this.setupSingleRoute(routeSettings, router),
    );

    return router;
  }

  private setupSingleRoute(
    routeSettings: RouterSettings,
    router: Router,
  ): void {
    const { requestMethod } = routeSettings;
    if (!router[requestMethod])
      throw new Error(
        `Unable to set up a route with the request method '${requestMethod}'`,
      );

    router[requestMethod](routeSettings.path, routeSettings.callbackFunction);
  }

  pushRoute(routerSettings: RouterSettings): void {
    if (!this.routerSettings) this.routerSettings = [];
    this.routerSettings.push(routerSettings);
  }
}
