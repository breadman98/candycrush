import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispatch, RootState } from "./";

export const useAppDispatch: () => AppDispatch = useDispatch;
// export function useAppDispatch(): AppDispatch {
//      const dispatch = useDispatch();
//      return dispatch;
//    }

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
