import React, { Component } from 'react'
import './App.css'
// import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog.js'

export default class App extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            /* Dialog 问题：左的层级比右的层级高时，Dialog 是右的子组件，此时 Dialog 层级再高也没有用 */
            /* PortalDialog：解决该Dialog问题，会将组件生成在 传送的参数内，比如 document.body */
            <div className='box' onClick={() => {
                console.log("box 身上会被冒泡上来，触发 click 事件");
            }}>
                <div className='left'>
                </div>
                <div className='right'>
                    <button onClick={() => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>ajax</button>
                    {/* {this.state.isShow && <Dialog></Dialog>} */}
                    {this.state.isShow && <PortalDialog onClose={() => {
                        this.setState({
                            isShow: false
                        })
                    }}>
                        <div>111</div>
                        <div>222</div>
                        <div>333</div>
                    </PortalDialog>}
                </div>
            </div>
        )
    }
}
