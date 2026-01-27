import React, { Component } from 'react'
import { styled } from 'styled-components' //引入 styled 带样式的组件

export default class App extends Component {
    render() {
        // 使用 `` 包裹样式代码，返回的是一个标签组件
        const StyledFooter = styled.footer`
            background: yellow;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50px;
            line-height: 50px
            text-align: center;
            ul {
                display: flex;
                list-style: none;
                li{
                    flex: 1;
                    &:hover {
                        background: red;
                    }
                }
                
            }
        `
        return (
            <StyledFooter>
                <footer>
                    <ul>
                        <li>首页</li>
                        <li>列表</li>
                        <li>我的</li>
                    </ul>
                </footer>
            </StyledFooter>
        )
    }
}
