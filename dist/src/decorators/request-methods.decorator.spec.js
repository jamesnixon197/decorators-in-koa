"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_methods_decorator_1 = require("./request-methods.decorator");
const router_collection_1 = require("../router-collection");
describe('RequestMethods', () => {
    let pushRouteSpy;
    const callbackFunction = jest.fn;
    beforeEach(() => {
        jest.clearAllMocks();
        pushRouteSpy = jest.spyOn(router_collection_1.RouterCollection.prototype, 'pushRoute');
    });
    describe('GET', () => {
        it("should call 'pushRoute'", async () => {
            request_methods_decorator_1.RequestMethods.Get('foo')(new router_collection_1.RouterCollection(), {}, { value: callbackFunction });
            expect(pushRouteSpy).toHaveBeenCalledWith({
                callbackFunction,
                path: '/foo',
                requestMethod: "get" /* GET */,
            });
        });
    });
    describe('POST', () => {
        it("should call 'pushRoute'", async () => {
            request_methods_decorator_1.RequestMethods.Post('foo')(new router_collection_1.RouterCollection(), {}, { value: callbackFunction });
            expect(pushRouteSpy).toHaveBeenCalledWith({
                callbackFunction,
                path: '/foo',
                requestMethod: "post" /* POST */,
            });
        });
    });
    describe('PUT', () => {
        it("should call 'pushRoute'", async () => {
            request_methods_decorator_1.RequestMethods.Put('foo')(new router_collection_1.RouterCollection(), {}, { value: callbackFunction });
            expect(pushRouteSpy).toHaveBeenCalledWith({
                callbackFunction,
                path: '/foo',
                requestMethod: "put" /* PUT */,
            });
        });
    });
    describe('DELETE', () => {
        it("should call 'pushRoute'", async () => {
            request_methods_decorator_1.RequestMethods.Delete('foo')(new router_collection_1.RouterCollection(), {}, { value: callbackFunction });
            expect(pushRouteSpy).toHaveBeenCalledWith({
                callbackFunction,
                path: '/foo',
                requestMethod: "delete" /* DELETE */,
            });
        });
    });
    describe('PATCH', () => {
        it("should call 'pushRoute'", async () => {
            request_methods_decorator_1.RequestMethods.Patch('foo')(new router_collection_1.RouterCollection(), {}, { value: callbackFunction });
            expect(pushRouteSpy).toHaveBeenCalledWith({
                callbackFunction,
                path: '/foo',
                requestMethod: "patch" /* PATCH */,
            });
        });
    });
});
