import React from "react";
import Squares from "./Squares";

const Board = ({ board, handleOnClick }) => {
  return (
    <section className="grid grid-cols-3 mx-auto gap-0 h-64 w-64 mt-16">
      {board.map((item, index) => {
        return (
          <Squares
            key={index}
            value={item}
            handleOnClick={() => {
              handleOnClick(index);
            }}
          />
        );
      })}
    </section>
  );
};

export default Board;
