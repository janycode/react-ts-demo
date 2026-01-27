import React, { FC } from 'react'

export default function App() {
    return (
        <div>
            App
            <Child1 name='aaaa'></Child1>
            <Child2 name='bbbb'></Child2>
        </div>
    )
}

interface Iprops {
    name: string
}
// 函数式 子组件写法1
function Child1(props: Iprops) {
    return <div>child1-{props.name}</div>
}
// 函数式 子组件写法2
const Child2: FC<Iprops> = (props) => {
    return <div>child2-{props.name}</div>
}