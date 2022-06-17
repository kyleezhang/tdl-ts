export type Flatten<T extends any[], R extends any[] = []> = T extends []
  ? R
  : T extends [infer F, ...infer Rest]
  ? F extends any[]
    ? Flatten<[...Flatten<F>, ...Rest], R>
    : Flatten<Rest, [...R, F]>
  : R;
