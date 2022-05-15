# decorators-in-koa
A Koa router that uses TypeScript decorators to cleanly build out API routes.

## Installation
There aren't any extra steps when it comes to installing the package. It's just a case of installing the package, as you would with any other JS package.

### Yarn
`yarn add decorators-in-koa`

### NPM
`npm install decorators-in-koa`

## Usage

`decorators-in-koa` makes building controllers and loading their routes a much simpler process. If you want an example of how it would work in a real-world scenario check out the `samples` folder [here](https://github.com/jamesnixon197/decorators-in-koa/tree/main/samples/hello-world).

### Example Controller

To define a controller, you need to first define the controller path using

```
import { Context } from 'koa';
import {
  Controller,
  RouterCollection,
  RequestMethods,
} from 'decorators-in-koa';

@Controller('controller/path')
export class ExampleController extends RouterCollection {
  @RequestMethods.Get('path')
  get(context: Context): void { // ...}

  @RequestMethods.Post('path')
  post(context: Context): void { // ...}

  @RequestMethods.Put('path')
  put(context: Context): void { // ...}

  @RequestMethods.Delete('path')
  delete(context: Context): void { // ...}

  @RequestMethods.Patch('path')
  patch(context: Context): void { // ...}
}
```

### Example App

```
import Koa from 'koa';
import { setupControllerRoutes } from 'decorators-in-koa';

import { ExampleController } from './controllers';

export const createApp = () => {
  const app = new Koa();

  const controllerRoutes = setupControllerRoutes([ExampleController]);

  app.use(controllerRoutes.routes());

  return app;
};
```
