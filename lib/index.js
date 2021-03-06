"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = exports.RequestMethods = exports.RouterCollection = exports.setupControllerRoutes = void 0;
var controller_routes_1 = require("./controller-routes");
Object.defineProperty(exports, "setupControllerRoutes", { enumerable: true, get: function () { return controller_routes_1.setupControllerRoutes; } });
var router_collection_1 = require("./router-collection");
Object.defineProperty(exports, "RouterCollection", { enumerable: true, get: function () { return router_collection_1.RouterCollection; } });
var request_methods_decorator_1 = require("./decorators/request-methods.decorator");
Object.defineProperty(exports, "RequestMethods", { enumerable: true, get: function () { return request_methods_decorator_1.RequestMethods; } });
var controller_decorator_1 = require("./decorators/controller.decorator");
Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return controller_decorator_1.Controller; } });
