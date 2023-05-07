import React from "react";
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";

const Board = () => {
  // pre-typed 된 selector와 dispatch 사용
  const board = useAppSelector(({ candyCrush: { board } }) => board); // state의 board 잡아오기
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize // state의 boardSize 잡아오기
  );

  return (
    <div
      className="flex flex-wrap rounded-lg"
      style={{
        width: `${6.25 * boardSize}rem`,
      }}
    >
      {board.map((element: string, index: number) => (
        <Tile candy={element} key={index} candyId={index} />
      ))}
    </div>
  );
};

export default Board;
