import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
    render() {
        /* 传送门：将生成的代码传送到 第二个参数，即 document.body  */
        return createPortal(
            <div style={{ width: '100%', height: '100%', position: 'fixed', left: 0, top: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, color: 'white' }}>
                Dialog
                <div>loading-加载中</div>
                {this.props.children}
                <button onClick={this.props.onClose}>close</button>
            </div>
            , document.body)
    }
}
