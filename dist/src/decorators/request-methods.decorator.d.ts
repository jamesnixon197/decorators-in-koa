import { IRouterCollection } from '../router-collection/router-collection.interface';
export declare const RequestMethods: {
    Get: (path?: string | undefined) => (target: IRouterCollection, {}: {}, descriptor: TypedPropertyDescriptor<any>) => void;
    Post: (path?: string | undefined) => (target: IRouterCollection, {}: {}, descriptor: TypedPropertyDescriptor<any>) => void;
    Put: (path?: string | undefined) => (target: IRouterCollection, {}: {}, descriptor: TypedPropertyDescriptor<any>) => void;
    Delete: (path?: string | undefined) => (target: IRouterCollection, {}: {}, descriptor: TypedPropertyDescriptor<any>) => void;
    Patch: (path?: string | undefined) => (target: IRouterCollection, {}: {}, descriptor: TypedPropertyDescriptor<any>) => void;
};
//# sourceMappingURL=request-methods.decorator.d.ts.map