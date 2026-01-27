// src/components/Film.tsx
import React, { Component } from 'react'
import axios from 'axios'
// 导入 v6 内置的路由类型（仅用于类型定义，不调用 Hooks）
import type { NavigateFunction } from 'react-router-dom'

// 1. 定义接口：匹配接口返回的 films 字段（精准类型）
interface IFilmItem {
    filmId: number
    name: string
    poster?: string
    grade?: number
}

// 2. 定义类组件的 Props 类型（包含需要的路由属性：navigate）
interface FilmProps {
    navigate: NavigateFunction // 仅传入需要的 navigate，无需多余属性
}

// 3. 定义类组件的 State 类型（替换 any）
interface FilmState {
    list: IFilmItem[]
}

// 4. 类组件：Props 用 FilmProps，State 用 FilmState（无高阶组件）
export default class Film extends Component<FilmProps, FilmState> {
    // 初始化 state，指定类型
    state: FilmState = {
        list: [],
    }

    componentDidMount(): void {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=410100&pageNum=1&pageSize=10&type=1&k=1671058',
            headers: {
                'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17689720181688867040133121"}',
                'x-host': 'mall.film-ticket.film.list',
            },
        })
            .then(res => {
                // 类型断言：确保返回数据匹配 IFilmItem 类型
                const films = res.data.data.films as IFilmItem[]
                this.setState({ list: films })
            })
            .catch(err => {
                console.error('请求影片列表失败：', err)
            })
    }

    render(): React.ReactNode {
        const { list } = this.state
        // 从 props 中拿到父组件传递的 navigate（替代高阶组件注入）
        const { navigate } = this.props

        return (
            <div>
                <ul>
                    {list.map((item: IFilmItem) => (
                        <li
                            key={item.filmId}
                            onClick={() => {
                                console.log('影片ID：', item.filmId)
                                // 核心：用传递进来的 navigate 实现跳转（v6 规范）
                                navigate(`/detail/${item.filmId}`)
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


