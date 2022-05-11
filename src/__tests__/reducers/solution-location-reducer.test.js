import solutionLocationReducer from "../../reducers/solution-location-reducer";
import * as c from "../../actions/ActionTypes";
import * as characters from "../../constants/Alphabet";

describe("solutionLocationReducer", () => {

  const blankState = characters.english.reduce((o, key) => ({ ...o, [key]: [] }), {});
  const phrase = "as a bag";
  let testState;
  let action;
  let phraseWords;
  let tempLetter;

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(solutionLocationReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully generate a blank list of solution locations", () => {
    action = { type: c.GENERATE_LOCATION };
    expect(solutionLocationReducer({}, action)).toEqual(blankState);
  });

  test("Should successfully populate a list of solution locations", () => {
    testState = JSON.parse(JSON.stringify(blankState));
    phraseWords = phrase.toUpperCase().split(" ");
    for (let word = 0; word < phraseWords.length; word++) {
      for (let letter = 0; letter < phraseWords[word].length; letter++) {
        tempLetter = phraseWords[word].charAt(letter);
        testState[tempLetter].push([word, letter]);
      }
    }
    action = {
      type: c.POPULATE_LOCATION,
      phrase: phrase
    };
    expect(solutionLocationReducer(blankState, action)).toEqual(testState);
  });

});