import React from "react";

const Squares = ({ value, handleOnClick }) => {
  return (
    <button
      className="text-5xl border-indigo-400 border-4 h-20 w-20"
      style={{ outline: "none" }}
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
};

export default Squares;
