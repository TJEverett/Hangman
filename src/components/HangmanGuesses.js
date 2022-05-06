import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

function HangmanGuesses(props){
  const unit = "1fr ";
  const table = {
    display: "grid",
    gridTemplateRows: unit.repeat(2),
    gridTemplateColumns: unit.repeat(13)
  };

  return(
    <React.Fragment>
      <div style={table}>
        {props.buttonArray.map((buttonData) => 
          <div className="guessButton">
            <CustomButton display={buttonData.value} disabled={buttonData.disabled} onClick={() => props.guessFunc(buttonData.value)} key={buttonData.value} />
          </div>
        )}
      </div>
      <div>
        <br />
        <CustomButton display="End Game" disabled={false} onClick={props.gameOver} />
      </div>
    </React.Fragment>
  )
}

HangmanGuesses.propTypes = {
  buttonArray: PropTypes.array,
  guessFunc: PropTypes.func,
  gameOver: PropTypes.func
}

export default HangmanGuesses;