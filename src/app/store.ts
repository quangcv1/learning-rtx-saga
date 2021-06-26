import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
//neu ma tao xong roi chay luon co sao khong?
//se bao loi chua mount voi store
// sagaMiddleware.run(rootSaga);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //add them middleware theo options
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       thunk: true,
  //         serializableCheck: true, //middleware cho development
  //       immutableCheck: true, //middleware cho development
  //     }),
    //add them middleware theo default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(sagaMiddleware),
  devTools: true, //default co dev tool san
});

//start saga middleware
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
