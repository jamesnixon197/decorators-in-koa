export function Controller(path: string) {
  return <
    T extends {
      new (...{}: any[]): {
        path?: string;
      };
    },
  >(
    originalConstructor: T,
  ) => {
    return class extends originalConstructor {
      constructor(...{}: any[]) {
        super();
        this.path = path;
      }
    };
  };
}
