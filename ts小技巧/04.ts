export function compose<Input, FirstArg>(
    fuc: (input: Input) => FirstArg
): (input: Input) => FirstArg;

export function compose<Input, FirstArg, SecondArg>(
    fuc1: (input: Input) => FirstArg,
    fuc2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

export function compose<Input, FirstArg, SecondArg, ThirdArg>(
    fuc1: (input: Input) => FirstArg,
    fuc2: (input: FirstArg) => SecondArg,
    fuc3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

export function compose(...args: any[]) {
    return {} as any;
}

const addOne = (a: number) => {
    return a + 1;
};

const numberToString = (a: number) => {
    return a.toString();
};

const stringToNumber = (a: string) => {
    return parseInt(a);
};

const addOneToString = compose(addOne, numberToString);
