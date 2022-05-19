import * as c from "../actions/ActionTypes";

export default (state = 0, action) => {
  switch(action.type){
    case c.RESET_COUNTER:
      return 0;
    case c.INCREMENT_COUNTER:
      return (state + 1);
    default:
     return state;
  }
}