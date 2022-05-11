import * as c from "./../actions/ActionTypes";
import * as characters from "./../constants/Alphabet";

export default (state = [], action, mistakeCount = 0) => {
  switch(action.type){
    case c.GENERATE_BUTTON:
      return characters.english.map((letter) => ({value: letter, disabled: false}));
    case c.DISABLE_BUTTON:
      let newState = state.map((object) => {
        if(object.value === action.letter || mistakeCount >= 5){
          return { value: object.value, disabled: true };
        }else{
          return object;
        }
      });
      return newState;
    default:
      return state;
  }
}