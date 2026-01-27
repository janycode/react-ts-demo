// src/components/Detail.tsx（函数组件 + 修复后）
import { useParams, useNavigate } from 'react-router-dom'

// 1. 修复：添加字符串索引签名（[key: string]: string | undefined）
interface DetailParams {
    myid: string // 明确的参数名
    [key: string]: string | undefined // 满足 Record<string, string | undefined> 约束
}

const Detail = () => {
    // 2. 泛型参数现在符合约束，无报错
    const params = useParams<DetailParams>()
    const { myid } = params // TS 仍能识别 myid 为 string 类型
    const navigate = useNavigate()
    const handleRecommendClick = (filmId: number) => {
        // 跳转到新的 Detail 页（同组件，仅参数变化）
        navigate(`/detail/${filmId}`)
        // 可选：滚动到页面顶部（优化体验）
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <p>路由参数 myid：{myid}</p>
            <div>
                <button onClick={() => handleRecommendClick(1234)}> 猜你喜欢</button>
            </div>
        </div>
    )
}

export default Detail
