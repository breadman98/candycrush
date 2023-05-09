import React, { useState } from "react";
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";
import styled from "styled-components";

interface IBoardDivProps {
  boardSize: number;
}

interface IisVisible {
  isVisible: boolean;
}

const BoardDiv = styled.div<IBoardDivProps & IisVisible>`
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  width: ${(props) => props.boardSize * 6.25}rem;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};

  @media (max-width: 915px) {
    width: ${(props) => props.boardSize * 3.25}rem;
  }
`;

// const BoardDiv = styled.div<IBoardDivProps & IisVisible>` <- 이걸 몰라서 props 인터페이스를 Iprops로 통합해서 인터페이스 줬는데 막 이상해지고 꼬여서 걍 다 지웠음
//   display: flex;
//   flex-wrap: wrap;
//   border-radius: 0.5rem;
//   width: ${(props) => props.boardSize * 6.25}rem;
//   visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
// `;

const VisibleButton = styled.button<IisVisible>`
  color: ${(props) => (props.isVisible ? "white" : "red")};
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Board = () => {
  const [isVisible, setIsVisible] = useState(true);

  // pre-typed 된 selector와 dispatch 사용
  const board = useAppSelector(({ candyCrush: { board } }) => board); // state의 board 잡아오기
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize // state의 boardSize 잡아오기
  );

  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <VisibleButton onClick={toggleVisible} isVisible={isVisible}>
        {isVisible ? "Hide" : "Show"} Board
      </VisibleButton>
      <BoardDiv boardSize={boardSize} isVisible={isVisible}>
        {board.map((element: string, index: number) => (
          <Tile candy={element} key={index} candyId={index} />
        ))}
      </BoardDiv>
    </>
  );
};

export default Board;
