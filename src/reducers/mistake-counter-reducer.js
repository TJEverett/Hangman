import * as c from "../actions/ActionTypes";

export default (state = 0, action, letterKey) => {
  switch(action.type){
    case c.RESET_COUNTER:
      return 0;
    case c.GUESS_COUNTER:
      if(letterKey[action.letter].length > 0){
        return state;
      }else{
        return (state + 1);
      }
    default:
     return state;
  }
}