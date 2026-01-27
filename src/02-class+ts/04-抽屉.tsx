import { Component } from 'react'

export default class APP extends Component {
    state = {
        isShow: true,
    }
    render() {
        return (
            <div>
                APP
                <Navbar
                    title="首页"
                    cb={() => {
                        this.setState({
                            isShow: !this.state.isShow,
                        })
                    }}
                ></Navbar>
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}
interface IProps {
    title: string
    cb: () => void
}
class Navbar extends Component<any, IProps> {
    render() {
        return (
            <div>
                Navbar-{this.props.title}
                <button onClick={() => this.props.cb()}>change</button>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return <div>Sidebar</div>
    }
}
