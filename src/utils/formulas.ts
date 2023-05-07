export const formulaForColumnOfFour = (boardSize: number) =>
  boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;

// export const formulaForColumnOfFour = (boardSize: number) => {
//      return boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;
// }

// 두 코드는 반환하는 결과는 같지만, 첫 번째 코드는 return 키워드를 사용하여 값을 반환하는 함수입니다.
// 반면 두 번째 코드는 화살표 함수가 단일 표현식을 반환하는 경우 중괄호 {}와 return 키워드를 생략한 축약형 문법입니다.
// 따라서 두 번째 코드는 값만 반환하는 익명 함수이지만, 첫 번째 코드는 명시적으로 return 키워드를 사용하여 값을 반환하는 함수입니다.

export const formulaForColumnOfThree = (boardSize: number) =>
  boardSize * boardSize - (boardSize + boardSize) - 1;

export const formulaForMoveBelow = (boardSize: number) =>
  boardSize * boardSize - boardSize - 1;

export const generateInvalidMoves = (
  boardSize: number,
  isFour: boolean = false
) => {
  const invalidMoves: Array<number> = [];
  for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }
  return invalidMoves;
};

// interface IgenerateInvalidMoves {
//   boardSize: number;
//   isFour: boolean;
// }

// export const generateInvalidMoves = ({boardSize,isFour = false,}: IgenerateInvalidMoves) => {
//   const invalidMoves: Array<number> = [];
//   for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
//     if (isFour) invalidMoves.push(i - 3);
//     invalidMoves.push(i - 2);
//     invalidMoves.push(i - 1);
//   }
//   return invalidMoves;
// };
