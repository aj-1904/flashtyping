import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

function TypingChallengeContainer({ words, characters, wpm }) {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-container">
        {/* words typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        
        {/* characters typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        
        {/* Speed */}
        <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
      </div>
      {/* The REAL Challenge */}
      <div className="typewriter-container">
        <TypingChallenge selectedParagraph="Hello World!" />
      </div>
    </div>
  );
}

export default TypingChallengeContainer;
