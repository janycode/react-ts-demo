import { Component } from 'react'

interface IProps {
    name: string
}

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <Child name="hello"></Child>
            </div>
        )
    }
}
// 泛型需要限制在 Child 子组件上
class Child extends Component<any, IProps> {
    render() {
        return <div>Child-{this.props.name}</div>
    }
}
