import boolReducer from "./bool-reducer";
import mistakeCounterReducer from "./mistake-counter-reducer";
import letterButtonReducer from "./letter-button-reducer";
import phraseReducer from "./phrase-reducer";
import solutionLocationReducer from "./solution-location-reducer";
import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  switch(action.type in c){
    case (true):
      return {
        gameRunning: boolReducer(state.gameRunning, action),
        solutionLocations: solutionLocationReducer(state.solutionLocations, action),
        solutionChars: phraseReducer(state.solutionChars, action, state.solutionLocations),
        mistakes: mistakeCounterReducer(state.mistakes, action, state.solutionLocations),
        guessButtons: letterButtonReducer(state.guessButtons, action, state.mistakes)
      };
    default:
      return {
        gameRunning: boolReducer(state.gameRunning, action),
        solutionLocations: solutionLocationReducer(state.solutionLocations, action),
        solutionChars: phraseReducer(state.solutionChars, action),
        mistakes: mistakeCounterReducer(state.mistakes, action),
        guessButtons: letterButtonReducer(state.guessButtons, action)
      };
  }
};