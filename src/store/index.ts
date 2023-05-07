import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface boardState {
  board: string[];
  boardSize: number;
}

const initialState: boardState = {
  board: [],
  boardSize: 8,
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
});

export const { updateBoard } = candyCrushSlice.actions;
// export const { testMy } = myStateSlice.actions;

// state와 dispatch 타입추론으로 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
