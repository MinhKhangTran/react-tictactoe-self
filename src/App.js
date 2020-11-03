import React from "react";
import Board from "./Board";
import { winningPerson } from "./calculateWinner";

export default function App() {
  // array of array to call the array number
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [isX, setIsX] = React.useState(true);
  const [stepNumber, setStepnumber] = React.useState(0);
  const winner = winningPerson(history[stepNumber]);

  const handleOnClick = (e) => {
    // einzelne Array moves speichern
    const timeInHistory = history.slice(0, stepNumber + 1);
    // der jetzige dann in die array of array pushen mit set History
    const current = timeInHistory[stepNumber];
    const boardCopy = [...current];
    // wenn es einen gewinner gibt oder auf dem Feld schon ein symbol ist. returne
    if (winner || boardCopy[e]) return;
    // ansonsten lege auf dem Feld ein symbol
    boardCopy[e] = isX ? "💩" : "🍜";
    // Das neue Board array anwenden
    setHistory([...timeInHistory, boardCopy]);
    setStepnumber(timeInHistory.length);
    //spieler wechseln
    setIsX(!isX);
  };

  // time travel

  const jumpTo = (step) => {
    setStepnumber(step);
    setIsX(step % 2 === 0);
  };

  return (
    <>
      <Board board={history[stepNumber]} handleOnClick={handleOnClick} />
      <div className="text-center mt-8 text-2xl">
        <p>
          {winner
            ? "Winner is:" + winner
            : "Next Player is:" + (isX ? "💩" : "🍜")}
        </p>
        {history.map((_step, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  jumpTo(index);
                }}
              >
                {index ? `Go to Move #${index}` : "Go to start"}
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}
