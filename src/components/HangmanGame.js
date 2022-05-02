import React from "react";
import HangmanGuesses from "./HangmanGuesses";
import HangmanImage from "./HangmanImage";
import HangmanSolution from "./HangmanSolution";

function HangmanGame(props){
  const rows = {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr"
  };

  const solutionChars = [["H", "E", "_", "_", "O"], ["_", "O", "R", "_", "_"]];
  const solutionWords = solutionChars.map((arr) => arr.join(" "));
  const solutionDisplay = solutionWords.join("     ");

  return(
    <React.Fragment>
      <div style={rows}>
        <div>
          <HangmanImage slice={0} />
        </div>
        <div>
          <HangmanSolution display={solutionDisplay} />
        </div>
        <div>
          <HangmanGuesses />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HangmanGame;