import mistakeCounterReducer from "../../reducers/mistake-counter-reducer";
import * as c from "../../actions/ActionTypes";
import * as characters from "../../constants/Alphabet";

describe("mistakeCounterReducer", () => {

  let action;
  let letterKey = characters.english.reduce((o, key) => ({ ...o, [key]: [] }), {});

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(mistakeCounterReducer(0, { type: null })).toEqual(0);
  });

  test("Should increment state by 1 if guess is incorrect", () => {
    action = {
      type: c.GUESS_COUNTER,
      letter: "B"
    };
    expect(mistakeCounterReducer(1, action, letterKey)).toEqual(2);
  });

  test("Should return state if guess is correct", () => {
    letterKey.B.push([0,0]);
    action = {
      type: c.GUESS_COUNTER,
      letter: "B"
    };
    expect(mistakeCounterReducer(1, action, letterKey)).toEqual(1);
  });

  test("Should reset state to 0", () => {
    action= { type: c.RESET_COUNTER }
    expect(mistakeCounterReducer(1, action)).toEqual(0);
  });

});