import { useNavigate } from 'react-router-dom'
import type { NavigateFunction } from 'react-router-dom'
import Film from './Film' // 导入你的 Film 类组件

// 函数中间层：调用 useNavigate 并传递给 Film 组件
const FilmWrapper = () => {
    const navigate: NavigateFunction = useNavigate() // 获取 navigate
    return <Film navigate={navigate} /> // 👉 传递必填的 navigate props
}

export default FilmWrapper
