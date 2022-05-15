import Router from 'koa-router';

import { setupControllerRoutes } from '.';
import { UserController } from '../../tests/controllers';

jest.mock('koa-router');

describe('setupControllerRoutes', () => {
  let setupRouteSpy: jest.SpyInstance;
  let useRouterSpy: jest.SpyInstance;

  const userController = new UserController();

  const callbackFunction = jest.fn(({}, {}) => {});

  beforeEach(() => {
    jest.clearAllMocks();
    useRouterSpy = jest.spyOn(Router.prototype, 'use');

    jest
      .spyOn(Router.prototype, 'routes')
      .mockImplementation(() => callbackFunction);

    setupRouteSpy = jest.spyOn(UserController.prototype, 'setupRoutes');
  });

  it('should set up a new router', async () => {
    setupControllerRoutes([UserController]);

    expect(Router).toHaveBeenCalled();
  });

  it('should set up routes', async () => {
    setupControllerRoutes([UserController]);

    expect(setupRouteSpy).toHaveBeenCalled();
  });

  it('should set up controller routes', async () => {
    setupControllerRoutes([UserController]);

    expect(useRouterSpy).toHaveBeenCalledWith(
      `/${userController.path}`,
      callbackFunction,
    );
  });
});
