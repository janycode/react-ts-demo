import React, { Component } from 'react'
import './02-可执行生成器'
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
        <div>
            <button onClick={() => {
                if (store.getState().list1.length === 0) {
                    //dispatch 发布
                    store.dispatch({
                        type: "get-list1"
                    })
                } else {
                    console.log("走缓存：", store.getState().list1);
                }
            }}>click-ajax-异步缓存1</button>
            <button onClick={() => {
                if (store.getState().list2.length === 0) {
                    //dispatch 发布
                    store.dispatch({
                        type: "get-list2"
                    })
                } else {
                    console.log("走缓存：", store.getState().list2);
                }
            }}>click-ajax-异步缓存2</button>
      </div>
    )
  }
}
