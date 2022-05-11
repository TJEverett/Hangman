import letterButtonReducer from "../../reducers/letter-button-reducer";
import * as c from "../../actions/ActionTypes";
import * as characters from "../../constants/Alphabet";

describe("letterButtonReducer", () => {

  const blankState = characters.english.map((letter) => ({value: letter, disabled: false}));
  let testState;
  let action;

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(letterButtonReducer([], { type: null }, 0)).toEqual([]);
  });

  test("Should successfully generate an array of enabled button objects", () => {
    action = { type: c.GENERATE_BUTTON };
    expect(letterButtonReducer([], action, 0)).toEqual(blankState);
  });

  test("Should successfully disable a button from the array", () => {
    testState = blankState.map((object) => {
      if(object.value === characters.english[0]){
        return { value: object.value, disabled: true };
      }else{
        return object;
      }
    });
    action = {
      type: c.DISABLE_BUTTON,
      letter: characters.english[0]
    };
    expect(letterButtonReducer(blankState, action, 0)).toEqual(testState);
  });

  test("Should successfully disable all buttons if third input is 5 or greater", () => {
    testState = blankState.map((object) => ({ value: object.value, disabled: true}));
    action = {
      type: c.DISABLE_BUTTON,
      letter: characters.english[0]
    };
    expect(letterButtonReducer(blankState, action, 5)).toEqual(testState);
  });

});