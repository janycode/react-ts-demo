import React, { Component, createRef, forwardRef } from 'react'

export default class App extends Component {
    //针对 Child 类组件
    //mytext = null
    //Child forwardRef 高阶函数组件
    mytext = createRef()
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log(this.mytext);
                    // 获取焦点并清空
                    this.mytext.current.focus()
                    this.mytext.current.value = ""
                }}>获取焦点</button>
                {/*  // 针对 Child 类组件
                  <Child callback={(el) => {
                    console.log(el);
                    this.mytext = el
                }} /> */}
                <Child ref={this.mytext} />
            </div>
        )
    }
}
// Child 类组件
// class Child extends Component {
//     mytext = createRef()
//     componentDidMount() {
//         this.props.callback(this.mytext)
//     }
//     render() {
//         return (
//             <div style={{ background: 'yellow' }}>
//                 <input defaultValue="11111" ref={this.mytext} />
//             </div>
//         )
//     }
// }

const Child = forwardRef((props, ref) => {
    return <div style={{background: 'yellow'}}>
        <input defaultValue="11111" ref={ref} />
    </div>
})