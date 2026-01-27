// import { all } from 'redux-saga/effects'
// import watchSaga1 from './saga/saga1'
// import watchSaga2 from './saga/saga2'

// function* watchSaga() {
//     yield all([watchSaga1(), watchSaga2()])
// }

// export default watchSaga

import { takeEvery } from 'redux-saga/effects'
import { getList1 } from './saga/saga1'
import { getList2 } from './saga/saga2'

function* watchSaga() {
    yield takeEvery("get-list1", getList1)
    yield takeEvery("get-list2", getList2)
}

export default watchSaga