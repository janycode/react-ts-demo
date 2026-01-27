import { takeEvery, take, put, fork, call } from 'redux-saga/effects'

function* watchSaga2() {
    //写法1
    // while (true) {
    //     // take 监听组件发来的 action
    //     yield take("get-list2")
    //     // fork 同步立即执行异步处理函数 fn
    //     yield fork(getList2)
    // }
    // 写法2：高阶函数
    yield takeEvery("get-list2", getList2)
}

// 异步处理函数
function* getList2() {
    //call 函数发异步请求
    let res = yield call(getListAction2) //阻塞调用 fn
    yield put({
        type: "change-list2",
        payload: res
    })
    //put 函数发出新的 action
}

function getListAction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["aaa", "bbb", "ccc"])
        }, 2000);
    })
}

export default watchSaga2
export { getList2 }