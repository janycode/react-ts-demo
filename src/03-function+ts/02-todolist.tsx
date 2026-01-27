import React, { useRef, useState } from 'react'

export default function App() {
    const text = useRef<HTMLInputElement>(null)
    const [list, setList] = useState<string[]>([])
    return <div>
        <input ref={text}></input>
        <button onClick={() => {
            console.log((text.current as HTMLInputElement).value);
            setList([...list, (text.current as HTMLInputElement).value])
        }}>click</button>
        {
            list.map(item => 
                <li key={item}>{item}</li>
            )
        }
    </div>
}
