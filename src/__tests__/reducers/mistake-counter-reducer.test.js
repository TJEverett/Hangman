import mistakeCounterReducer from "../../reducers/mistake-counter-reducer";
import * as c from "../../actions/ActionTypes";

describe("mistakeCounterReducer", () => {

  let action;

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(mistakeCounterReducer(0, { type: null })).toEqual(0);
  });

  test("Should increment state by 1", () => {
    action = { type: c.INCREMENT_COUNTER };
    expect(mistakeCounterReducer(1, action)).toEqual(2);
  });

  test("Should reset state to 0", () => {
    action= { type: c.RESET_COUNTER }
    expect(mistakeCounterReducer(1, action)).toEqual(0);
  });

});