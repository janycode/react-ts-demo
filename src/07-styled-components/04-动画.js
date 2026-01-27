import { Component } from 'react'
import styled, { keyframes } from 'styled-components'

export default class App extends Component {
    render() {
        const myaniamtion = keyframes`
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        `
        const StyleDiv = styled.div`
            width: 100px;
            height: 100px;
            background: yellow;
            animation: ${myaniamtion} 1s infinite;
        `
        return (
            <div>
                <StyleDiv></StyleDiv>
            </div>
        )
    }
}
