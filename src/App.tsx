import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import styled from "styled-components";
import {
  checkForRowOfFour,
  checkForRowOfThree,
  isColumnOfFour,
  isColumnOfThree,
} from "./utils/moveCheckLogic";
import {
  formulaForColumnOfFour,
  formulaForColumnOfThree,
  generateInvalidMoves,
} from "./utils/formulas";

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  // pre-typed된 selector와 dispatch 사용
  // useSelector는 store의 state를 인자로 받아옴
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ candyCrush: { board } }) => board); // state의 board 잡아오기

  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize // state의 boardSize 잡아오기
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(
        newBoard,
        boardSize,
        generateInvalidMoves(boardSize, true)
      );
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));

      dispatch(updateBoard(newBoard));
    }, 150);
    return () => clearInterval(timeout); // useEffect() 훅의 반환 값으로 함수를 지정하면 컴포넌트가 unmount될 때 이 함수가 실행됩니다.
  }, [board, boardSize, dispatch]);

  // setTimeout() 함수를 사용하여 생성한 타이머가 메모리에서 해제되도록 하기 위해서, useEffect() 훅의 cleanup 함수를 이용하여 타이머를 해제하고 있습니다.
  // 이 코드에서는 setTimeout() 함수가 실행되는 것을 감지하기 위해 useEffect() 훅이 사용되었고,
  // useEffect() 훅의 반환 값으로 함수를 지정하면 컴포넌트가 unmount될 때 이 함수가 실행됩니다.

  // 따라서 setTimeout() 함수를 사용하여 생성한 타이머를 해제하기 위해 clearInterval() 함수를 cleanup 함수로 반환해주는 것입니다.
  // 컴포넌트가 unmount되거나 board, boardSize, dispatch 중 어느 하나라도 변경되면, 생성된 setTimeout 함수를 정리(clean-up)하여 메모리 누수를 방지합니다.
  // 이를 통해, 타이머에 의해 메모리 누수(memory leak)가 발생하는 것을 방지할 수 있습니다.

  // clean-up 함수 없으면 문제점
  // 컴포넌트가 렌더링될 때마다 setTimeout() 함수를 호출하므로, 이전 setTimeout() 함수가 실행되지 않은 상태에서 다음 setTimeout() 함수가 호출될 수 있습니다.
  // 이는 메모리 낭비와 렌더링 성능 저하를 초래할 수 있습니다. 따라서, setTimeout() 함수의 반환 값을 clearTimeout() 함수로 정리(clean-up)해 주어야 합니다.
  // 해결책으로는 반환값으로 clearTimeout() 함수를 호출하여 setTimeout() 함수를 정리(clean-up)해야 합니다.
  // 이렇게 수정하면, 이전 setTimeout() 함수가 실행되기 전에 현재 setTimeout() 함수가 정리되므로, 이전 setTimeout() 함수와 충돌하는 일이 없어집니다.

  return (
    <BoardContainer
    /*className="flex items-center justify-center h-screen"*/
    >
      <Board />
    </BoardContainer>
  );
};

export default App;
