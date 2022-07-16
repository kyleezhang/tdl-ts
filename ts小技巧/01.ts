// 将对象中的属性转化为单个属性的并集
const fruitCounts = {
    apple: 1,
    pear: 4,
    banana: 12,
}

export type SingleFruitCount = {
    [K in keyof typeof fruitCounts]: {
        [K2 in K]: typeof fruitCounts[K2]
    }
}[keyof typeof fruitCounts]

const testdemo: SingleFruitCount = {
    apple: 12
}