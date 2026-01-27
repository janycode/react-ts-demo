import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import watchSaga from "./saga";

const SagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(SagaMiddleware))

SagaMiddleware.run(watchSaga) //saga任务

export default store