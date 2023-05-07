export const isColumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfFour: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
    const columnOfFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (
      columnOfFour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

// export const isColumnOfFour = (newBoard: string[], boardSize: number,formulaForColumnOfFour: number) => {
//      for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
//        const columnOfFour: number[] = [
//          i,
//          i + boardSize,
//          i + boardSize * 2,
//          i + boardSize * 3,
//        ];
//        const decidedColor: string = newBoard[i];
//        const isBlank: boolean = newBoard[i] === "";
//        if (
//          columnOfFour.every(
//            (candy: number) => newBoard[candy] === decidedColor && !isBlank
//          )
//        ) {
//          columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
//          return true;
//        }
//      }
//    };

// 혹은

// interface IisColumnOfFour {
//   newBoard: string[];
//   boardSize: number;
//   formulaForColumnOfFour: number;
// }

// export const isColumnOfFour = ({newBoard,boardSize,formulaForColumnOfFour}: IisColumnOfFour) => {
//   for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
//     const columnOfFour: number[] = [
//       i,
//       i + boardSize,
//       i + boardSize * 2,
//       i + boardSize * 3,
//     ];
//     const decidedColor: string = newBoard[i];
//     const isBlank: boolean = newBoard[i] === "";
//     if (
//       columnOfFour.every(
//         (candy: number) => newBoard[candy] === (decidedColor && !isBlank)
//       )
//     ) {
//       columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
//       return true;
//     }
//   }
// };

// isColumnOfFour는 함수, 인자로 (newBoard,boardSize,formulaForColumnOffFour), 인자 타입은 IisColumnOfFour
// for(...){ const arr:number[] = [i, i+boardSize, i+boardSize*2, i+boardSize*3];}
// let i:number 안해도 에러 안나는 이유 ->  명시적으로 타입을 지정하지 않으면 타입스크립트가 알아서 타입을 유추하기 떄문. 권장X

// columnOfFour.every()

// every() 메소드는 배열의 모든 요소가 주어진 판별 함수(callback)를 통과하는지 테스트하는 메소드입니다.
// every() 메소드는 불린 값(true 또는 false)을 반환하며, 배열의 모든 요소가 판별 함수를 통과하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
// every() 메소드는 다음과 같은 인자를 받습니다: every(element,index)

// every() 메소드는 배열의 모든 요소가 검사 함수에서 true를 반환하는지 여부를 판별하는데 유용합니다.
// 예를 들어, 배열의 모든 요소가 양수인지 여부를 검사할 때 every() 메소드를 사용할 수 있습니다.

// const decidedColor: string = newBoard[i];
//     const isBlank: boolean = newBoard[i] === "";
//     if (
//       columnOfFour.every(
//         (candy: number) => newBoard[candy] === decidedColor && !isBlank
//       )
//     ) {
//       columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
//       return true;
//     }

// 위 코드는 4개의 캔디를 연속해서 놓으면 해당 캔디가 사라지는 게임에서, 특정 열이 4개의 같은 색상의 캔디로 구성되어 있는지 확인하고 해당 열을 지우는 함수입니다.
// decidedColor는 현재 체크하고 있는 캔디의 색상을 나타냅니다. isBlank는 현재 캔디가 비어있는지 여부를 나타내며, 캔디가 비어있는 경우에는 4개의 캔디가 연속한 것이 아니므로 확인하지 않습니다.
// columnOfFour.every는 columnOfFour 배열에 포함된 4개의 캔디가 모두 같은 색상인지 확인하는 함수입니다. 캔디가 같은 색상인 경우와 비어있지 않은 경우에만 true를 반환하도록 콜백 함수가 작성되어 있습니다.
// columnOfFour.forEach는 columnOfFour 배열에 포함된 모든 캔디를 빈 문자열('')로 변경합니다. 이는 4개의 캔디가 모두 같은 색상이며, 따라서 해당 열을 지울 수 있음을 나타냅니다.

export const isColumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfThree: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
    const columnOfFour: number[] = [i, i + boardSize, i + boardSize * 2];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (
      columnOfFour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const checkForRowOfFour = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfFour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      rowOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};

export const checkForRowOfThree = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfThree.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      rowOfThree.forEach((candy: number) => (newBoard[candy] = ""));
      return true;
    }
  }
};
