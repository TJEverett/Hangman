import React from "react";
import PropTypes from "prop-types";
import HangmanGuesses from "./HangmanGuesses";
import HangmanImage from "./HangmanImage";
import HangmanSolution from "./HangmanSolution";

class HangmanGame extends React.Component {
  constructor(props){
    super(props);
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
    const tempButtons = alphabet.map((letter) => ({value: letter, disabled: false}));
    let tempSolution = [];
    let tempLocations = alphabet.reduce((o, key) => ({ ...o, [key]: []}), {});

    const solutionWords = this.props.phrase.split(" ");
    let tempLetter = "";
    for(let word = 0; word < solutionWords.length; word++){
      tempSolution.push([]);
      for(let letter = 0; letter < solutionWords[word].length; letter++){
        tempLetter = solutionWords[word].charAt(letter);
        tempLocations[tempLetter].push([word, letter]);
        tempSolution[word].push("_");
      }
    }
    
    this.state = {
      solutionChars: tempSolution,
      solutionLocations: tempLocations,
      guessButtons: tempButtons,
      mistakes: 0
    };
  }

  guessLetter = (letter) => {
    let tempButtons = [];
    let tempSolution = JSON.parse(JSON.stringify(this.state.solutionChars));
    let tempMistakes = this.state.mistakes;

    if(this.state.solutionLocations[letter].length > 0){
      this.state.solutionLocations[letter].forEach((entry) => {
        tempSolution[entry[0]][entry[1]] = letter;
      });
    }else{
      tempMistakes++;
    }

    this.state.guessButtons.forEach((object) => {
      if(object.value === letter || tempMistakes >= 5){
        tempButtons.push({value: object.value, disabled: true});
      }else{
        tempButtons.push({value: object.value, disabled: object.disabled});
      }
    });

    this.setState({
      solutionChars: tempSolution,
      guessButtons: tempButtons,
      mistakes: tempMistakes
    });
  }


  render(){
    //Styles
    const rows = {
      display: "grid",
      gridTemplateRows: "1fr 1fr 1fr"
    };
  
    //Logic
    const solutionWords = this.state.solutionChars.map((arr) => arr.join(" "));
    const solutionDisplay = solutionWords.join("     ");
  
    return(
      <React.Fragment>
        <div className="gameBoard" style={rows}>
          <div className="gamePiece">
            <HangmanImage slice={this.state.mistakes} />
          </div>
          <div className="gamePiece">
            <HangmanSolution display={solutionDisplay} />
          </div>
          <div>
            <HangmanGuesses buttonArray={this.state.guessButtons} guessFunc={this.guessLetter} gameOver={this.props.gameOver} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

HangmanGame.propTypes = {
  phrase: PropTypes.string,
  gameOver: PropTypes.func
}

export default HangmanGame;