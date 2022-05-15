export declare function Controller(path: string): <T extends new (...{}: any[]) => {
    path?: string;
}>(originalConstructor: T) => {
    new (...{}: any[]): {
        path?: string | undefined;
    };
} & T;
//# sourceMappingURL=controller.decorator.d.ts.map