import { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledChild = styled(Child)`
            background: yellow;
        `
        return (
            <div>App
                {/* 默认会传给子组件 className 属性 */}
                <StyledChild></StyledChild>
            </div>
        )
    }
}

function Child(props) {
    return <div className={props.className}>child</div>
}