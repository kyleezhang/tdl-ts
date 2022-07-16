export type RemoveIndexSignature<T> =
  {
    [K in keyof T as K extends `${infer _}` ? K : never]:
    T[K]
  }

