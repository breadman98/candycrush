import React from "react";
import styled from "styled-components";
import { dragDrop, dragEnd, dragStart } from "../store";
import { useAppDispatch } from "../store/hooks";

const Tiles = styled.div`
  height: 6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5;
  border-radius: 0.5rem;
  user-select: none;
  box-shadow: inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb;
  @media (max-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

const TileImg = styled.img`
  height: 5rem;
  width: 5rem;
  @media (max-width: 768px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const Tile = ({ candy, candyId }: { candy: string; candyId: number }) => {
  const dispatch = useAppDispatch();

  return (
    <Tiles>
      {candy && (
        <TileImg
          src={candy}
          alt="candy"
          candy-id={candyId} // HTML에서는 example-id 형식으로 id값 줘야함
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={() => dispatch(dragEnd())}
        />
      )}
    </Tiles>
  );
};

export default Tile;
