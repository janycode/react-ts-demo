import { useEffect } from 'react'
import store from '../redux/store'

const Detail = () => {
    useEffect(() => {
        store.dispatch({
            type: 'hide',
        })
        return () => {
            store.dispatch({
                type: 'show',
            })
        }
    }, [])

    return (
        <div>
            <p>Detail</p>
        </div>
    )
}

export default Detail
