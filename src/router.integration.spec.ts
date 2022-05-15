import Router, { IMiddleware } from 'koa-router';
import Koa, { Context } from 'koa';
import request from 'supertest';

import http, { Server } from 'http';

import {
  setupControllerRoutes,
  Controller,
  RequestMethods,
  RouterCollection,
} from './index';

@Controller('users')
class UserController extends RouterCollection {
  @RequestMethods.Get(':id')
  printUser(ctx: Context): void {
    ctx.body = { id: ctx.params.id };
    ctx.status = 200;
  }

  @RequestMethods.Post()
  createUser(ctx: Context): void {
    ctx.status = 201;
  }

  @RequestMethods.Delete(':id')
  deleteUser(ctx: Context): void {
    ctx.status = 204;
  }

  @RequestMethods.Patch(':id/hobbies/:hobbyId')
  updateUserHobby(ctx: Context): void {
    ctx.status = 204;
  }
}

@Controller('products')
class ProductController extends RouterCollection {
  @RequestMethods.Get(':id')
  printProduct(ctx: Context): void {
    ctx.body = { id: ctx.params.id };
    ctx.status = 200;
  }

  @RequestMethods.Post()
  createProduct(ctx: Context): void {
    ctx.status = 201;
  }

  @RequestMethods.Delete(':id')
  deleteProduct(ctx: Context): void {
    ctx.status = 204;
  }

  @RequestMethods.Patch(':id/variants/:variantId')
  updateProductVariant(ctx: Context): void {
    ctx.status = 204;
  }
}

const setupServer = (controllerRoutes: IMiddleware) => {
  const app = new Koa();

  app.use(controllerRoutes);

  return http.createServer(app.callback());
};

describe('koa-decorator-router', () => {
  let app: Server;
  let routerMiddleware: Router;

  beforeEach(() => {
    routerMiddleware = setupControllerRoutes([
      UserController,
      ProductController,
    ]);
    app = setupServer(routerMiddleware.routes());
  });

  // Decided to test two different controllers to confirm they work when more than 1 is setup.
  describe('UsersController', () => {
    describe('GET /users/:id', () => {
      it('should return 200', async () => {
        const response = await request(app).get('/users/1234');

        expect(response.statusCode).toBe(200);
      });

      it('should return a body', async () => {
        const response = await request(app).get('/users/1234');

        expect(response.body).toStrictEqual({ id: '1234' });
      });
    });

    describe('POST /users', () => {
      it('should return 201', async () => {
        const response = await request(app).post('/users');

        expect(response.statusCode).toBe(201);
      });
    });

    describe('PATCH /users/:id/hobbies/:hobbyId', () => {
      it('should return 204', async () => {
        const response = await request(app).patch('/users/1234/hobbies/1234');

        expect(response.statusCode).toBe(204);
      });
    });

    describe('DELETE /users/:id', () => {
      it('should return 200', async () => {
        const response = await request(app).delete('/users/1234');

        expect(response.statusCode).toBe(204);
      });
    });
  });

  describe('ProductController', () => {
    describe('GET /products/:id', () => {
      it('should return 200', async () => {
        const response = await request(app).get('/products/1234');

        expect(response.statusCode).toBe(200);
      });

      it('should return a body', async () => {
        const response = await request(app).get('/products/1234');

        expect(response.body).toStrictEqual({ id: '1234' });
      });
    });

    describe('POST /products', () => {
      it('should return 201', async () => {
        const response = await request(app).post('/products');

        expect(response.statusCode).toBe(201);
      });
    });

    describe('PATCH /products/:id/variants/:variantId', () => {
      it('should return 204', async () => {
        const response = await request(app).patch(
          '/products/1234/variants/1234',
        );

        expect(response.statusCode).toBe(204);
      });
    });

    describe('DELETE /products/:id', () => {
      it('should return 200', async () => {
        const response = await request(app).delete('/products/1234');

        expect(response.statusCode).toBe(204);
      });
    });
  });
});
