import boolReducer from "../../reducers/bool-reducer";
import * as c from "../../actions/ActionTypes";

describe("boolReducer", () => {

  let action;

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(boolReducer(false, { type: null })).toEqual(false);
  });

  test("Should return true", () => {
    action = { type: c.TRUTHY_BOOL };
    expect(boolReducer(false, action)).toEqual(true);
  });

  test("Should return false", () => {
    action = { type: c.FALSY_BOOL };
    expect(boolReducer(true, action)).toEqual(false);
  });

});