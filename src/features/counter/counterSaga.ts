import {takeEvery, takeLatest} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {call, delay, put } from "redux-saga/effects";
import {increment, incrementSaga, incrementSagaSuccess} from "./counterSlice";
import {fetchCount} from "./counterAPI";

function* test() {
    //cach 1
    yield fetchCount(2);
    //cach 2
    yield call(fetchCount,2)
}

//moi lan toi thay 1 action dispatch thi toi se hanh dong log no ra
//moi lan log se nhan dc cai action chinh la payload action
// export function* log(action: PayloadAction) {
//     console.log("log", action);
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log("Waiting 2s");//kiem tra xem no co vao dc function nay ko ?
    //wait 2s
    yield delay(2000);
    console.log("Waiting done, dispatch action");
    //dispatch action success
    yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log("Hello Counter Saga")
    //toi muon lang nghe tat ca cac actions va log ra
    //log theo ham log above
    // yield takeEvery("counter/increment",log);
    //thay cho hardcode hoi nay
    // yield takeEvery(increment().type,log);
    //yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}