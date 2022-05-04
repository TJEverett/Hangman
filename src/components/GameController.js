import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import StartMenu from "./StartMenu";
import HangmanGame from "./HangmanGame";

class GameController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      game: false,
      phrase: ""
    };
  }

  startGame = (wordCount) => {
    const lorem = new LoremIpsum();
    const phrase = lorem.generateWords(wordCount).toUpperCase();
    this.setState({
      game: true,
      phrase: phrase
    });
  }

  endGame = () => {
    this.setState({
      game: false,
      phrase: ""
    });
  }


  render(){
    let currentComponent = null;

    if(this.state.game){
      currentComponent = <HangmanGame phrase={this.state.phrase} gameOver={this.endGame} />;
    }else{
      currentComponent = <StartMenu onSubmit={this.startGame} />;
    }

    return(
      <React.Fragment>
        {currentComponent}
      </React.Fragment>
    );
  }
}

export default GameController;