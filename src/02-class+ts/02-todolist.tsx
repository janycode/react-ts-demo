import { Component, createRef } from 'react'

interface IState {
    text: string
    list: string[]
}

export default class App extends Component<any, IState> {
    state = {
        text: '',
        list: []
    }
    myref = createRef<HTMLInputElement>()
    render() {
        return (
            <div>
                {/* 第一种 input + onChange */}
                {/* <input type="text" onChange={evt => {
                        console.log(evt.target.value)
                        this.setState({
                            text: evt.target.value,
                        })
                    }}
                /> <div>{this.state.text}</div>
                 */}
                {/* 第二种 input + ref */}
                <input ref={this.myref} />
                <button
                    onClick={() => {
                        // 需要类型断言
                        console.log((this.myref.current as HTMLInputElement).value)
                    }}
                >click</button>
            </div>
        )
    }
}
