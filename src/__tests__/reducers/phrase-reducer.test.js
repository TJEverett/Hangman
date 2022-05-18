import phraseReducer from "../../reducers/phrase-reducer";
import * as c from "../../actions/ActionTypes";
import * as characters from "../../constants/Alphabet";

describe("phraseReducer", () => {

  const miniKey = {"A": [[0, 0], [1, 0], [2, 1]]};
  const phrase = "as a bag";
  let testState1;
  let testState2;
  let action;
  let phraseWords;
  let tempChar;

  beforeEach(() => {
    testState1 = [];
    phraseWords = phrase.toUpperCase().split(" ");
    for (let word = 0; word < phraseWords.length; word++) {
      testState1.push([]);
      for (let letter = 0; letter < phraseWords[word].length; letter++) {
        tempChar = phraseWords[word].charAt(letter);
        if (characters.english.indexOf(tempChar) !== -1) {
          testState1[word].push("_");
        } else {
          testState1[word].push(tempChar);
        }
      }
    }
  })

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(phraseReducer([], { type: null }, miniKey)).toEqual([]);
  });

  test("Should successfully populate a new list of lists with each acceptable letter replaced with an underscore", () => {
    action = {
      type: c.POPULATE_PHRASE,
      phrase: phrase
    }
    expect(phraseReducer([], action, miniKey)).toEqual(testState1);
  });

  test("Should successfully replace underscores with letters based on key", () => {
    testState2 = JSON.parse(JSON.stringify(testState1));
    miniKey["A"].forEach((location) => {
      testState2[location[0]][location[1]] = "A";
    });
    action = {
      type: c.GUESS_PHRASE,
      letter: "A"
    }
    expect(phraseReducer(testState1, action, miniKey)).toEqual(testState2);
  });

});