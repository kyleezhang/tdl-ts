export type Fill<
  T extends unknown[],
  Value,
  From extends number = 0,
  To extends number = T['length'],
  StartFlag extends boolean = false,
  EndFlag extends boolean = false,
  R extends unknown[] = []
> = From extends To ? T : R["length"] extends T["length"] ? R : 
  R['length'] extends From ? Fill<T, Value, From, To, true, EndFlag, [...R, Value]> :
    R['length'] extends To ? Fill<T, Value, From, To, StartFlag, true, [...R, T[R['length']]]> :
      StartFlag extends false ? Fill<T, Value, From ,To, StartFlag, EndFlag, [...R, T[R['length']]]> :
        EndFlag extends true ? Fill<T, Value, From, To, StartFlag, EndFlag, [...R, T[R['length']]]> :
          Fill<T, Value, From, To, StartFlag, EndFlag, [...R, Value]> 
