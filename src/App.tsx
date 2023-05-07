import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";

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

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
};

export default App;
