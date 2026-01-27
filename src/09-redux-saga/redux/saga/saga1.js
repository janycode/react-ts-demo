import { takeEvery, take, put, fork, call } from 'redux-saga/effects'

function* watchSaga1() {
    // 写法1
    // while (true) {
    //     // take 监听组件发来的 action
    //     yield take("get-list1")
    //     // fork 同步立即执行异步处理函数 fn
    //     yield fork(getList1)
    // }
    // 写法2：高阶函数
    yield takeEvery("get-list1", getList1)
}

// 异步处理函数
function* getList1() {
    //call 函数发异步请求
    let res = yield call(getListAction1) //阻塞调用 fn
    yield put({
        type: "change-list1",
        payload: res
    })
    //put 函数发出新的 action
}

function getListAction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["111", "111", "333"])
        }, 1000);
    })
}

export default watchSaga1
export { getList1 }