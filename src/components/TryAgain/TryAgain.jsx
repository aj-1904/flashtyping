import React from "react";
import "./TryAgain.css";

function TryAgain({ words, characters, wpm }) {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>

      <div className="result-container">
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Words:</b> {words}
        </p>
        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>
      <div>
        <button className="reset-btn">Re-try</button>
      </div>
    </div>
  );
}

export default TryAgain;
