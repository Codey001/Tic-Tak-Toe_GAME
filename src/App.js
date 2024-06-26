import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    //gives value and index
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className="time-interval" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="title">
        <h1>Tic-Tac-Toe Game</h1>
      </div>

      <div className="game">
        <div className="game-board item">
          <Board
            isXNext={isXNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        <div className="item ">
          <div className="game-info">
            <h3>Time Travel</h3>
            <ul className="move-info">{moves}</ul>
          </div>
        </div>
      </div>
    </>
  );
}


