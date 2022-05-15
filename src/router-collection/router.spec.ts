import Router from 'koa-router';

import { RouterCollection } from '.';
import { RequestMethod } from '../enums/request-method.enum';

describe('Router', () => {
  let router: RouterCollection;
  const callbackFunction = jest.fn;

  beforeEach(() => {
    router = new RouterCollection();
  });

  describe('setupRoutes', () => {
    describe('No path', () => {
      beforeEach(() => {
        router.path = undefined;
      });

      it('should throw an error', async () => {
        expect(() => router.setupRoutes()).toThrowError(
          'Controller path is missing',
        );
      });
    });

    describe('No routerSettings', () => {
      beforeEach(() => {
        router.routerSettings = [];
        router.path = '/foo';
      });

      it('should throw an error', async () => {
        expect(() => router.setupRoutes()).toThrowError(
          "No routes set for controller path '/foo'",
        );
      });
    });

    describe('routerSetting with an invalid requeest method', () => {
      beforeEach(() => {
        router.routerSettings = [
          {
            requestMethod: 'foo' as RequestMethod,
            path: 'bar',
            callbackFunction,
          },
        ];

        router.path = '/foo';
      });

      it("should set up a 'GET' route", async () => {
        expect(() => router.setupRoutes()).toThrowError(
          "Unable to set up a route with the request method 'foo'",
        );
      });
    });

    describe('valid routerSettings', () => {
      let routerGetSpy: jest.SpyInstance;
      const routerPath = 'bar';
      beforeEach(() => {
        router.routerSettings = [
          {
            requestMethod: RequestMethod.GET,
            path: routerPath,
            callbackFunction,
          },
        ];

        router.path = '/foo';

        routerGetSpy = jest.spyOn(Router.prototype, 'get');
      });

      it('should throw an error', async () => {
        router.setupRoutes();

        expect(routerGetSpy).toHaveBeenCalledWith(routerPath, callbackFunction);
      });
    });
  });

  describe('pushRoute', () => {
    it("should push settings to the 'routerSettings' array", async () => {
      router.pushRoute({
        path: '/foo',
        callbackFunction,
        requestMethod: RequestMethod.GET,
      });

      expect(router.routerSettings).toStrictEqual([
        { callbackFunction, path: '/foo', requestMethod: RequestMethod.GET },
      ]);
    });
  });
});
