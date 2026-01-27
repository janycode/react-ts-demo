import { useState } from 'react'

export default function App() {
    const [name, setName] = useState<string>('jerry')  //类型约束
    return (
        <div>
            App-{name.substring(0, 1).toUpperCase() + name.substring(1)}
            <button onClick={() => {
                setName("tom")
            }}>click</button>
        </div>
    )
}
