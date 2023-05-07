import React from "react";
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";
import styled from "styled-components";

interface IBoardDivProps {
  boardSize: number;
}

const BoardDiv = styled.div<IBoardDivProps>`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  width: ${(props) => props.boardSize * 6.25}rem;
`;

const Board = () => {
  // pre-typed 된 selector와 dispatch 사용
  const board = useAppSelector(({ candyCrush: { board } }) => board); // state의 board 잡아오기
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize // state의 boardSize 잡아오기
  );

  return (
    <BoardDiv
      // className="flex flex-wrap rounded-lg"
      // style={{
      //   width: `${6.25 * boardSize}rem`,
      boardSize={boardSize}
    >
      {board.map((element: string, index: number) => (
        <Tile candy={element} key={index} candyId={index} />
      ))}
    </BoardDiv>
  );
};

export default Board;
