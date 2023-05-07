import { WritableDraft } from "immer/dist/types/types-external";
import { formulaForMoveBelow } from "../../utils/formulas";
import { candies } from "../../utils/candyData";

export const moveBelowReducer = (
  state: WritableDraft<{
    board: string[];
    boardSize: number;
    //     squareBeingReplaced: Element | undefined;
    //     squareBeingDragged: Element | undefined;
  }>
) => {
  const newBoard: string[] = [...state.board];
  const { boardSize } = state;
  let boardChanges: boolean = false;
  const formulaForMove: number = formulaForMoveBelow(boardSize);
  for (let i = 0; i <= formulaForMove; i++) {
    const firstRow = Array(boardSize)
      .fill(0)
      .map((_value: Number, index: number) => index);
    const isFirstRow = firstRow.includes(i);
    if (isFirstRow && newBoard[i] === "") {
      let randomNumber = Math.floor(Math.random() * candies.length);
      newBoard[i] = candies[randomNumber];
      boardChanges = true;
    }

    if (newBoard[i + boardSize] === "") {
      newBoard[i + boardSize] = newBoard[i];
      newBoard[i] = "";
      boardChanges = true;
    }
    if (boardChanges) state.board = newBoard;
  }
};

// WritableDraft는 immer 라이브러리에서 제공하는 타입으로, 객체의 프로퍼티를 수정할 때 사용됩니다.
//  리덕스 툴킷에서는 이 WritableDraft를 이용하여 불변성을 유지하면서 상태를 갱신할 수 있도록 도와줍니다.

// 일반적으로, 객체를 수정하려면 해당 객체를 복제하고 수정된 값을 새로운 객체에 할당해야 합니다.
// 그러나 immer 라이브러리에서 제공하는 produce 함수를 사용하면, 원본 객체를 수정할 수 있습니다. 이 때 WritableDraft 타입이 사용됩니다.

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { WritableDraft } from 'immer';

// interface User {
//   name: string;
//   age: number;
// }

// interface UserState {
//   currentUser: User;
// }

// const initialState: UserState = {
//   currentUser: { name: '', age: 0 },
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     updateUser: (state, action: PayloadAction<WritableDraft<User>>) => {
//       state.currentUser.name = action.payload.name;
//       state.currentUser.age = action.payload.age;
//     },
//   },
// });

// 위 코드에서 updateUser 리듀서에서 WritableDraft<User> 타입을 사용하여 currentUser 객체를 직접 수정할 수 있습니다.
// 이러한 방식으로 immer와 WritableDraft를 사용하면 상태를 갱신하는 데 있어서 불필요한 복제를 방지할 수 있습니다.
