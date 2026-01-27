import React, { useState } from 'react'

export default function App() {
    const [isShow, setIsShow] = useState(true)
    return (
        <div>
            App
            <Navbar title="抽屉" cb={() => {
                setIsShow(!isShow)
            }}></Navbar>
            {isShow && <Sidebar></Sidebar>}
        </div>
    )
}

interface IProps {
    title: string
    cb: () => void
}
function Navbar(props: IProps) {
    return (
        <div>
            Navbar
            <button onClick={() => props.cb()}>click</button>
        </div>
    )
}
function Sidebar() {
    return <div>Sidebar</div>
}