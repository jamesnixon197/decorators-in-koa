"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterCollection = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
class RouterCollection {
    setupRoutes() {
        if (this.path === undefined)
            throw new Error('Controller path is missing');
        if (this.routerSettings === undefined || this.routerSettings.length === 0)
            throw new Error(`No routes set for controller path '${this.path}'`);
        const router = new koa_router_1.default();
        this.routerSettings.forEach((routeSettings) => this.setupSingleRoute(routeSettings, router));
        return router;
    }
    setupSingleRoute(routeSettings, router) {
        const { requestMethod } = routeSettings;
        if (!router[requestMethod])
            throw new Error(`Unable to set up a route with the request method '${requestMethod}'`);
        router[requestMethod](routeSettings.path, routeSettings.callbackFunction);
    }
    pushRoute(routerSettings) {
        if (!this.routerSettings)
            this.routerSettings = [];
        this.routerSettings.push(routerSettings);
    }
}
exports.RouterCollection = RouterCollection;
