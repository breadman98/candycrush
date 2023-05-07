import React from "react";
import styled from "styled-components";

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
`;

const TileImg = styled.img`
  height: 5rem;
  width: 5rem;
`;

const Tile = ({ candy, candyId }: { candy: string; candyId: number }) => {
  return (
    <Tiles
      className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none"
      style={{
        boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
      }}
    >
      {candy && (
        <TileImg
          src={candy}
          alt="candy"
          // className="h-20 w-20"
          candy-id={candyId}
        /> // HTML에서는 example-id 형식으로 id값 줘야함
      )}
    </Tiles>
  );
};

export default Tile;
