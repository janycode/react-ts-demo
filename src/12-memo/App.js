import { Component, memo } from 'react';

export default class App extends Component {
    state = {
        name: "jerry"
    }
    render() {
        return (
            <div>
                {this.state.name}
                <button onClick={() => {
                    this.setState({
                        name: "tom"
                    })
                }}>click</button>
                <Child1></Child1>
                <Child2 name={this.state.name}></Child2>
            </div>
        )
    }
}
// 不论是否有值变动，Child1 一直会被重复渲染
function Child1() {
    console.log("Child111..");
    return <div>Child111</div>
}
// 在值有变动时会重新渲染，其他时候均不会做没有用的渲染【推荐】
const Child2 = memo((props) => {
    console.log("Child222..");
    return <div>Child222-{props.name}</div>
})