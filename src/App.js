import React from "react";
import Board from "./Board";
import { winningPerson } from "./calculateWinner";

export default function App() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isX, setIsX] = React.useState(true);
  const winner = winningPerson(board);

  const handleOnClick = (e) => {
    const boardCopy = [...board];
    // wenn es einen gewinner gibt oder auf dem Feld schon ein symbol ist. returne
    if (winner || boardCopy[e]) return;
    // ansonsten lege auf dem Feld ein symbol
    boardCopy[e] = isX ? "💩" : "🍜";
    // Das neue Board array anwenden
    setBoard(boardCopy);
    //spieler wechseln
    setIsX(!isX);
  };

  return (
    <>
      <Board board={board} handleOnClick={handleOnClick} />
      <div className="text-center mt-8 text-2xl">
        <p>
          {winner
            ? "Winner is:" + winner
            : "Next Player is:" + (isX ? "💩" : "🍜")}
        </p>
        <button
          className="border-indigo-500 rounded border-2 mt-4 hover:bg-indigo-500 hover:text-indigo-100 transition transition-all duration-300 ease-in-out px-3"
          onClick={() => {
            setBoard(Array(9).fill(null));
          }}
        >
          Start the Game
        </button>
      </div>
    </>
  );
}
