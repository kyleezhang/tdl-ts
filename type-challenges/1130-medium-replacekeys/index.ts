export type ReplaceKeys<T, K extends string, F> = {
    [Key in keyof T]: Key extends K ? Key extends keyof F ? F[Key] : never : T[Key]
  }
