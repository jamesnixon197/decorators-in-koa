import Koa from 'koa';
import { setupControllerRoutes } from 'decorators-in-koa';

import { HelloWorldController } from './controllers';

export const createApp = () => {
  const app = new Koa();

  const controllerRoutes = setupControllerRoutes([HelloWorldController]);

  app.use(controllerRoutes.routes());

  return app;
};
