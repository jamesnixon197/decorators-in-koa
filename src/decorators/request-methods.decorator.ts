import { RequestMethod } from '../enums/request-method.enum';
import { IRouterCollection } from '../router-collection/router-collection.interface';

const loadRequestRoute = (method: RequestMethod, path?: string) => {
  return (
    target: IRouterCollection,
    {},
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    target.pushRoute({
      path: path ? `/${path}` : '/',
      callbackFunction: descriptor.value,
      requestMethod: method,
    });
  };
};

export const RequestMethods = {
  Get: (path?: string) => loadRequestRoute(RequestMethod.GET, path),
  Post: (path?: string) => loadRequestRoute(RequestMethod.POST, path),
  Put: (path?: string) => loadRequestRoute(RequestMethod.PUT, path),
  Delete: (path?: string) => loadRequestRoute(RequestMethod.DELETE, path),
  Patch: (path?: string) => loadRequestRoute(RequestMethod.PATCH, path),
};
