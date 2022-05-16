# decorators-in-koa
A Koa router that uses TypeScript decorators to build out API routes in a clean & readable manner.

## Installation
There aren't any extra steps when it comes to installation. It's just a case of installing the package, as you would with any other TS/JS package.

### Yarn
`yarn add decorators-in-koa`

### NPM
`npm install decorators-in-koa`

## Run tests

### Unit tests

To run unit tests, run the command below:
#### Yarn
`yarn run test:unit`

#### NPM
`npm run test:unit`

### Integration tests

To run integration tests, run the command below:
#### Yarn
`yarn run test:integration`

#### NPM
`npm run test:integration`

## Usage

`decorators-in-koa` simplifies the process of building Koa API routing logic.

If you want an example of how it would work in a real-world scenario check out the `samples` folder [here](https://github.com/jamesnixon197/decorators-in-koa/tree/main/samples/hello-world).

### setupControllerRoutes

This is the gateway function. This function accepts an array of controller class prototypes.

**All of the supplied controllers must inherit the `RouterCollection` class**

#### Example

```
import { setupControllerRoutes } from 'decorators-in-koa';

const controllerRoutes = setupControllerRoutes([ExampleController]);
```

### Controller

This is a class decorator for controller classes. You have to supply a controller path as an argument to his decorator.

#### Example

```
import {
 Controller,
 RouterCollection,
} from 'decorators-in-koa';

@Controller('controller/path')
export class ExampleController extends RouterCollection {
 // ...
}
```

### RouterCollection

This is the class that needs to be `extended` for any controller supplied to Koa. You can find an example of this [here](https://github.com/jamesnixon197/decorators-in-koa/blob/main/samples/hello-world/src/controllers/hello-world/hello-world.controller.ts).

#### Example

```
import {
 Controller,
 RouterCollection,
} from 'decorators-in-koa';

@Controller('controller/path')
export class ExampleController extends RouterCollection {
 // ...
}
```

### RequestMethods

This is a decorator which returns an object of the following request methods: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.

They should be used as decorators for the callback function you want to run when the supplied endpoint is hit. You can call this decorator with a path or leave it blank and it would default to `/` and just run on the call to the controller path.

The callback function should expect a Koa `context` to be passed into it.

#### Example

```
import { Context } from 'koa';
import {
 Controller,
 RouterCollection,
 RequestMethods
} from 'decorators-in-koa';

@Controller('controller/path')
export class ExampleController extends RouterCollection {
 @RequestMethods.Get('path')
 get(context: Context): void { // ...}
}
```

## Example Controller

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

## Example App

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


