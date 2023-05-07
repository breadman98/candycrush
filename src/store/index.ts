import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "./reducers/moveBelow";
import { dragEndReducer } from "./reducers/dragEndReducer";

interface boardState {
  board: string[];
  boardSize: number;
  squareBeingDragged: Element | undefined;
  squareBeingReplaced: Element | undefined;
}

const initialState: boardState = {
  board: [],
  boardSize: 8,
  squareBeingDragged: undefined,
  squareBeingReplaced: undefined,
};

// interface myState {
//   val: number;
//   text: string;
// }

// const initialMyState: myState = {
//   val: 1,
//   text: "hi",
// };

// const myStateSlice = createSlice({
//   name: "mystate",
//   initialState: initialMyState,
//   reducers: {
//     testMy: (state, action: PayloadAction<number>) => {
//       state.val = action.payload;
//     },
//   },
// });

// const initialState: {
//   board: string[];
//   boardSize: number;
// } = {
//   board: [],
//   boardSize: 8,
// };
// 이름 없는 인터페이스 사용

const candyCrushSlice = createSlice({
  // name,initialState,reducers 들은 필수 인자
  // name:
  name: "candyCrush",
  initialState, //  initialState : initialState,
  reducers: {
    // PayloadAction은 Redux 액션 객체의 페이로드(payload) 값을 감싸는 래퍼(wrapper) 역할. action.payload의 타입이 string[]임을 의미.
    updateBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload;
    },
    dragStart: (state, action: PayloadAction<any>) => {
      state.squareBeingDragged = action.payload;
    },
    dragDrop: (state, action: PayloadAction<any>) => {
      state.squareBeingReplaced = action.payload;
    },
    dragEnd: dragEndReducer,

    moveBelow: moveBelowReducer,
  },
});

// store 작성 후 configureStore에 저장.
// configureStore : 여러 개의 slice들을 모아주는 역할이라고 생각하면 된다
// reducer 속성을 갖는다.
export const store = configureStore({
  reducer: {
    candyCrush: candyCrushSlice.reducer,
    //myStateStore: myStateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // getDefaultMiddleware는 Redux Toolkit에서 제공하는 기본 미들웨어들의 배열을 가져옵니다.
  // serializableCheck 옵션은 action이 serializable한지 체크하는 기능을 끄기 위한 옵션입니다. 만약 이를 사용하지 않으면,
  // action 객체가 Immutable하지 않은 경우, 에러가 발생합니다.
  // getDefaultMiddleware({ serializableCheck: false })와 같이 serializableCheck를 false로 설정하여,
  // action 객체가 Immutable하지 않아도 에러가 발생하지 않도록 설정할 수 있습니다. 이렇게 설정하는 경우, action 객체가 Immutable하지 않을 경우, 경고 메시지가 출력됩니다.
  // 만약 Immutable하지 않은 action을 사용해야 하는 경우, 이러한 경고 메시지를 무시하고 action을 사용할 수 있습니다.
});

export const { updateBoard, moveBelow, dragStart, dragEnd, dragDrop } =
  candyCrushSlice.actions;
// export const { testMy } = myStateSlice.actions;

// state와 dispatch 타입추론으로 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
