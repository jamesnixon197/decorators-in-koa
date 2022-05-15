"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
function Controller(path) {
    return (originalConstructor) => {
        return class extends originalConstructor {
            constructor(...{}) {
                super();
                this.path = path;
            }
        };
    };
}
exports.Controller = Controller;
