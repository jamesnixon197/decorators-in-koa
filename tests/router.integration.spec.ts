import Router, { IMiddleware } from 'koa-router';
import Koa from 'koa';
import request from 'supertest';

import http, { Server } from 'http';

import { setupControllerRoutes } from '../src/index';

import { ProductController, UserController } from './controllers';

const setupServer = (controllerRoutes: IMiddleware) => {
  const app = new Koa();

  app.use(controllerRoutes);

  return http.createServer(app.callback());
};

describe('koa-decorator-router', () => {
  let server: Server;
  let routerMiddleware: Router;

  beforeEach(() => {
    routerMiddleware = setupControllerRoutes([
      UserController,
      ProductController,
    ]);
    server = setupServer(routerMiddleware.routes());
  });

  afterEach(() => {
    server.close();
  });

  // Decided to test two different controllers to confirm they work when more than 1 is setup.
  describe('UsersController', () => {
    describe('GET /users/:id', () => {
      it('should return 200', async () => {
        const response = await request(server).get('/users/1234');

        expect(response.statusCode).toBe(200);
      });

      it('should return a body', async () => {
        const response = await request(server).get('/users/1234');

        expect(response.body).toStrictEqual({ id: '1234' });
      });
    });

    describe('POST /users', () => {
      it('should return 201', async () => {
        const response = await request(server).post('/users');

        expect(response.statusCode).toBe(201);
      });
    });

    describe('PATCH /users/:id/hobbies/:hobbyId', () => {
      it('should return 204', async () => {
        const response = await request(server).patch(
          '/users/1234/hobbies/1234',
        );

        expect(response.statusCode).toBe(204);
      });
    });

    describe('DELETE /users/:id', () => {
      it('should return 200', async () => {
        const response = await request(server).delete('/users/1234');

        expect(response.statusCode).toBe(204);
      });
    });
  });

  describe('ProductController', () => {
    describe('GET /products/:id', () => {
      it('should return 200', async () => {
        const response = await request(server).get('/products/1234');

        expect(response.statusCode).toBe(200);
      });

      it('should return a body', async () => {
        const response = await request(server).get('/products/1234');

        expect(response.body).toStrictEqual({ id: '1234' });
      });
    });

    describe('POST /products', () => {
      it('should return 201', async () => {
        const response = await request(server).post('/products');

        expect(response.statusCode).toBe(201);
      });
    });

    describe('PATCH /products/:id/variants/:variantId', () => {
      it('should return 204', async () => {
        const response = await request(server).patch(
          '/products/1234/variants/1234',
        );

        expect(response.statusCode).toBe(204);
      });
    });

    describe('DELETE /products/:id', () => {
      it('should return 200', async () => {
        const response = await request(server).delete('/products/1234');

        expect(response.statusCode).toBe(204);
      });
    });
  });
});
