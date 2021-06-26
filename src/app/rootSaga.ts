import {all} from 'redux-saga/effects'
import counterSaga from "../features/counter/counterSaga";
//tao them 1 cai saga
function* helloSaga() {
    console.log("Hello saga");
}
export default function* rootSaga() {
    console.log("Root Saga");
    yield all([helloSaga(), counterSaga()]);
}