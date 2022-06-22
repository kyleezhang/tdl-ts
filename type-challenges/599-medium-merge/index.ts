export type Merge<A extends Record<string, unknown>, B extends Record<string, unknown>> = {
    [K in (keyof A | keyof B)]: K extends keyof B ? B[K] : (
        K extends keyof A ? A[K] : never
    )
}