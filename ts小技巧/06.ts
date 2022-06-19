import React from 'react'

// 函数式组件
const MyComponent = (props: { enabled: boolean }) => {
    return null
}

// 类组件
class MyClassComponent extends React.Component<{ enabled: boolean }> {}

type PropsFrom<T> = T extends React.FC<infer Props> ? Props :
  T extends React.ComponentClass<infer Props> ? Props : never 

const props: PropsFrom<typeof MyClassComponent> = {
    enabled: false
}