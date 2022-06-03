import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import StartMenu from "./StartMenu";
import HangmanGame from "./HangmanGame";
import { batch, connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions/index";

class GameController extends React.Component {
  startGame = (wordCount) => {
    const lorem = new LoremIpsum();
    const phrase = lorem.generateWords(wordCount).toUpperCase();
    const { dispatch } = this.props;
    const action1 = a.generateLocation();
    const action2 = a.truthyBool();
    const action3 = a.resetCounter();
    const action4 = a.generateButton();
    const action5 = a.populatePhrase(phrase);
    const action6 = a.populateLocation(phrase);

    batch(() => {
      dispatch(action1);
      dispatch(action2);
      dispatch(action3);
      dispatch(action4);
      dispatch(action5);
      dispatch(action6);
    });
  }

  endGame = () => {
    const { dispatch } = this.props;
    const action = a.falsyBool();
    dispatch(action);
  }

  render() {
    let currentComponent = null;

    if(this.props.gameRunning){
      currentComponent = <HangmanGame gameOver={this.endGame} />;
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

GameController.propTypes = {
  gameRunning: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    gameRunning: state.gameRunning
  }
}

GameController = connect(mapStateToProps)(GameController);

export default GameController;