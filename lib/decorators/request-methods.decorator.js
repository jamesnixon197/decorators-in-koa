"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMethods = void 0;
const loadRequestRoute = (method, path) => {
    return (target, {}, descriptor) => {
        target.pushRoute({
            path: path ? `/${path}` : '/',
            callbackFunction: descriptor.value,
            requestMethod: method,
        });
    };
};
exports.RequestMethods = {
    Get: (path) => loadRequestRoute("get" /* GET */, path),
    Post: (path) => loadRequestRoute("post" /* POST */, path),
    Put: (path) => loadRequestRoute("put" /* PUT */, path),
    Delete: (path) => loadRequestRoute("delete" /* DELETE */, path),
    Patch: (path) => loadRequestRoute("patch" /* PATCH */, path),
};
