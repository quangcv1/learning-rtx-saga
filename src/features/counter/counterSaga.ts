import {takeEvery} from "@redux-saga/core/effects";
import {PayloadAction} from "@reduxjs/toolkit";
import {increment} from "./counterSlice";

//moi lan toi thay 1 action dispatch thi toi se hanh dong log no ra
//moi lan log se nhan dc cai action chinh la payload action
export function* log(action: PayloadAction) {
    console.log("log", action);
}

export default function* counterSaga() {
    console.log("Hello Counter Saga")
    //toi muon lang nghe tat ca cac actions va log ra
    //log theo ham log above
    // yield takeEvery("counter/increment",log);
    //thay cho hardcode hoi nay
    yield takeEvery(increment().type,log);
}