import * as c from "./../actions/ActionTypes";

export default (state = false, action) => {
  switch(action.type){
    case c.TRUTHY_BOOL:
      return true;
    case c.FALSY_BOOL:
      return false;
    default:
      return state;
  }
}