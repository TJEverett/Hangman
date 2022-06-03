import React from "react";
import PropTypes from "prop-types";
import HangmanGuesses from "./HangmanGuesses";
import HangmanImage from "./HangmanImage";
import HangmanSolution from "./HangmanSolution";
import { batch, connect } from "react-redux";
import * as a from "./../actions/index";

class HangmanGame extends React.Component {
  guessLetter = (letter) => {
    const { dispatch } = this.props;
    const action1 = a.guessCounter(letter);
    const action2 = a.disableButton(letter);
    const action3 = a.guessPhrase(letter);

    batch(() => {
      dispatch(action1);
      dispatch(action2);
      dispatch(action3);
    });
  }

  render(){
    //Styles
    const rows = {
      display: "grid",
      gridTemplateRows: "1fr 1fr 1fr"
    };
    
    //Logic
    const solutionWords = this.props.solutionChars.map((arr) => arr.join(" "));
    const solutionDisplay = solutionWords.join("     ");
    
    return(
      <React.Fragment>
      <div className="gameBoard" style={rows}>
        <div className="gamePiece">
          <HangmanImage slice={this.props.mistakes} />
        </div>
        <div className="gamePiece">
          <HangmanSolution display={solutionDisplay} />
        </div>
        <div>
          <HangmanGuesses buttonArray={this.props.guessButtons} guessFunc={this.guessLetter} gameOver={this.props.gameOver} />
        </div>
      </div>
    </React.Fragment>
    )
  }
}

HangmanGame.propTypes = {
  gameOver: PropTypes.func,
  solutionChars: PropTypes.array,
  mistakes: PropTypes.number,
  guessButtons: PropTypes.array
}

const mapStateToProps = state => {
  return {
    solutionChars: state.solutionChars,
    mistakes: state.mistakes,
    guessButtons: state.guessButtons
  }
}

HangmanGame = connect(mapStateToProps)(HangmanGame);

export default HangmanGame;