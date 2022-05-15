"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupControllerRoutes = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const setupControllerRoutes = (routerControllers) => {
    const controllerRouter = new koa_router_1.default();
    routerControllers.forEach((controllerClass) => {
        const controller = new controllerClass();
        const controllerRoutes = controller.setupRoutes();
        controllerRouter.use(`/${controller.path}`, controllerRoutes.routes());
    });
    return controllerRouter.routes();
};
exports.setupControllerRoutes = setupControllerRoutes;
