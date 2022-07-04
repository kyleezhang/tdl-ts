type Merge<TObject> = {
    [key in keyof TObject]: TObject[key];
  };
  

export type PartialByKeys<T, K = keyof T> = Merge<{
    [K1 in keyof T as K1 extends K ? K1 : never]?: T[K1]
} & {
    [K2 in Exclude<keyof T, K>]: T[K2]
}>

