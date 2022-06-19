const getDeepValue = <O extends Record<string, unknown>, FirstKey extends keyof O, SecondKey extends keyof O[FirstKey]>(obj: O, firstKey: FirstKey, secindKey: SecondKey): O[FirstKey][SecondKey] => {
    return {} as any
}

const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: 'cool',
        d: 2
    }
}

const result = getDeepValue(obj, 'foo', 'b')