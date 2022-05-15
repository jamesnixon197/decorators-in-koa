import { RequestMethods } from './request-methods.decorator';
import { RouterCollection } from '../router-collection';
import { RequestMethod } from '../enums/request-method.enum';

describe('RequestMethods', () => {
  let pushRouteSpy: jest.SpyInstance;
  const callbackFunction = jest.fn;

  beforeEach(() => {
    jest.clearAllMocks();
    pushRouteSpy = jest.spyOn(RouterCollection.prototype, 'pushRoute');
  });

  describe('GET', () => {
    it("should call 'pushRoute'", async () => {
      RequestMethods.Get('foo')(
        new RouterCollection(),
        {},
        { value: callbackFunction },
      );

      expect(pushRouteSpy).toHaveBeenCalledWith({
        callbackFunction,
        path: '/foo',
        requestMethod: RequestMethod.GET,
      });
    });
  });

  describe('POST', () => {
    it("should call 'pushRoute'", async () => {
      RequestMethods.Post('foo')(
        new RouterCollection(),
        {},
        { value: callbackFunction },
      );

      expect(pushRouteSpy).toHaveBeenCalledWith({
        callbackFunction,
        path: '/foo',
        requestMethod: RequestMethod.POST,
      });
    });
  });

  describe('PUT', () => {
    it("should call 'pushRoute'", async () => {
      RequestMethods.Put('foo')(
        new RouterCollection(),
        {},
        { value: callbackFunction },
      );

      expect(pushRouteSpy).toHaveBeenCalledWith({
        callbackFunction,
        path: '/foo',
        requestMethod: RequestMethod.PUT,
      });
    });
  });

  describe('DELETE', () => {
    it("should call 'pushRoute'", async () => {
      RequestMethods.Delete('foo')(
        new RouterCollection(),
        {},
        { value: callbackFunction },
      );

      expect(pushRouteSpy).toHaveBeenCalledWith({
        callbackFunction,
        path: '/foo',
        requestMethod: RequestMethod.DELETE,
      });
    });
  });

  describe('PATCH', () => {
    it("should call 'pushRoute'", async () => {
      RequestMethods.Patch('foo')(
        new RouterCollection(),
        {},
        { value: callbackFunction },
      );

      expect(pushRouteSpy).toHaveBeenCalledWith({
        callbackFunction,
        path: '/foo',
        requestMethod: RequestMethod.PATCH,
      });
    });
  });
});
