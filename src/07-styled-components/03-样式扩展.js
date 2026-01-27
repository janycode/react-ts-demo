import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
    render() {
        const StyledButton = styled.button`
            width: 60px;
            height: 30px;
            background: yellow;
        `
        // 样式继承
        const StyledButton2 = styled(StyledButton)`
            background: blue;
        `
        return (
            <div>
                <StyledButton>按钮1</StyledButton>
                <StyledButton2>按钮2</StyledButton2>
            </div>
        )
    }
}
