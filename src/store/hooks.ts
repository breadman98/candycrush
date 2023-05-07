import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispatch, RootState } from "./";

export const useAppDispatch: () => AppDispatch = useDispatch;
// export function useAppDispatch(): AppDispatch {
//      const dispatch = useDispatch();
//      return dispatch;
//    }

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 컴포넌트에서 데이터를 불러오기 위해 useSelector 사용
// action을 dispatch하기 위해서 useDispatch 사용
// 그런데 RTK(Redux toolkit)를 타입스크립트와 사용하려면 useSelector와 useDispatch를 타입스크립트 버전으로 바꿔줘야한다.
// 이런 타입화 과정을 모든 컴포넌트에 적용하는 것보다는 hooks.ts라는 파일을 만들어 pre-typed 된 버전을 만들어주는 것이 편하다.
