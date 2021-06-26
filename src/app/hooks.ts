import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//khi dung useSelector phai di kem theo cai type cua cai store cua minh nua
//Moi lan goi useSelector lai phai gan cai type cua cai store vao => met qua
//Gan 1 lan thui => dung useAppSelector instead of useSelector
//1. Neu muon lay 1 gia tri tu cai redux thi dung useAppSelector
//2. Neu muon dispatch 1 function thi dung UseAppDispatch vi thang
//useDispatch binh thuong se ko aware dc trong cai store minh co them nhung cai gi
// vi du ngoai cai middleware thunk thi minh con co cac middleware khac nen dung cai nay no se aware

