import { Component } from 'react'

interface IState {
    name: string
}

export default class App extends Component<any, IState> {
    state: IState = {
        name: 'jerry',
    }
    render() {
        return (
            <div>
                App-{this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1)}
                <button
                    onClick={() => {
                        this.setState({
                            name: 'tom',
                            // name: 100, //ERROR：不能将number赋值给string
                        })
                    }}
                >
                    click
                </button>
            </div>
        )
    }
}
