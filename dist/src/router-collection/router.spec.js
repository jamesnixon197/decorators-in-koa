"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Router', () => {
    let router;
    const callbackFunction = jest.fn;
    beforeEach(() => {
        router = new _1.RouterCollection();
        router.path = '/foo';
    });
    describe('setupRoutes', () => {
        describe('No path', () => {
            beforeEach(() => {
                router.path = undefined;
            });
            it('should throw an error', async () => {
                expect(() => router.setupRoutes()).toThrow('Controller path is missing');
            });
        });
        describe('No routerSettings', () => {
            beforeEach(() => {
                router.routerSettings = [];
            });
            it('should throw an error', async () => {
                expect(() => router.setupRoutes()).toThrow("No routes set for controller path '/foo'");
            });
        });
    });
    describe('pushRoute', () => {
        it("should push settings to the 'routerSettings' array", async () => {
            router.pushRoute({
                path: '/foo',
                callbackFunction,
                requestMethod: "get" /* GET */,
            });
            expect(router.routerSettings).toStrictEqual([
                { callbackFunction, path: '/foo', requestMethod: "get" /* GET */ },
            ]);
        });
    });
});
