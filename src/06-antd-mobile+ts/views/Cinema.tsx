import React, { Component, createRef } from 'react'
import { Button, Swiper } from 'antd-mobile'
import axios from 'axios'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

interface IItem {
    filmId: number
    poster: string
}
export default class Cinema extends Component {
    state = {
        filmList: [],
    }
    componentDidMount() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=410100&pageNum=1&pageSize=10&type=1&k=6167680',
            headers: {
                'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17689720181688867040133121"}',
                'x-host': 'mall.film-ticket.film.list',
            },
        }).then(res => {
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films,
            })
        })
    }
    // 函数组件使用: const ref = useRef<SwiperRef>(null)
    // 类组件使用：createRef<>()
    ref = createRef<SwiperRef>()
    render() {
        return (
            <div>
                <div>Cinema</div>
                {/* 大轮播 */}
                <Swiper loop autoplay ref={this.ref}>
                    {this.state.filmList.map((item: IItem) => (
                        <Swiper.Item key={item.filmId}>
                            <img src={item.poster} style={{ width: '100%', height: '200px' }} />
                        </Swiper.Item>
                    ))}
                </Swiper>
                <Button color="danger" onClick={() => {
                    this.ref.current?.swipePrev()  //上一张
                }}>上一个</Button>
                <Button color="primary" onClick={() => {
                    this.ref.current?.swipeNext()  //下一张
                }}>下一个</Button>
            </div>
        )
    }
}
