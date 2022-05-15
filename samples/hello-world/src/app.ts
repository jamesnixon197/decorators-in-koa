import Koa from 'koa';
import { AuthController } from './api/controllers';

export const createApp = () => {
  const app = new Koa();

  const controllerRoutes = setupControllerRoutes([AuthController]);
  app.use(controllerRoutes);

  return app;
};
