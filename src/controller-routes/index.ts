import Router, { IMiddleware } from 'koa-router';

import { IRouterCollection } from '../router-collection/router-collection.interface';

export const setupControllerRoutes = (
  routerControllers: { new (...args: any[]): IRouterCollection }[],
): IMiddleware => {
  const controllerRouter = new Router();

  routerControllers.forEach((controllerClass) => {
    const controller = new controllerClass();
    const controllerRoutes = controller.setupRoutes();
    controllerRouter.use(`/${controller.path}`, controllerRoutes.routes());
  });

  return controllerRouter.routes();
};
