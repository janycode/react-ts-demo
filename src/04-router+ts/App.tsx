import React, { Component } from 'react'
import IndexRouter from './router'

export default class App extends Component {
    render() {
        return (
            <div>
                <IndexRouter></IndexRouter> {/* 导入路由配置 */}
                {/* Tabbar */}
                <ul>
                    <li>电影</li>
                    <li>影院</li>
                    <li>我的</li>
                </ul>
            </div>
        )
    }
}
