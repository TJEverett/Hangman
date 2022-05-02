import React from "react";
import StartMenu from "./StartMenu";
import HangmanGame from "./HangmanGame";

class GameController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      game: false
    };
  }



  render(){
    let currentComponent = null;

    if(this.state.game){
      currentComponent = <HangmanGame />;
    }else{
      currentComponent = <StartMenu />;
    }

    return(
      <React.Fragment>
        {currentComponent}
      </React.Fragment>
    );
  }
}

export default GameController;