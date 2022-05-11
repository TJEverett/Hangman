import * as c from "./../actions/ActionTypes";
import * as characters from "./../constants/Alphabet";

export default (state = {}, action) => {
  switch (action.type) {
    case c.GENERATE_LOCATION:
      return characters.english.reduce((o, key) => ({ ...o, [key]: [] }), {});
    case c.POPULATE_LOCATION:
      let newState = { ...state };
      let tempLetter;
      const phraseUpper = action.phrase.toUpperCase();
      const phraseWords = phraseUpper.split(" ");
      for (let word = 0; word < phraseWords.length; word++) {
        for (let letter = 0; letter < phraseWords[word].length; letter++) {
          tempLetter = phraseWords[word].charAt(letter);
          newState[tempLetter].push([word, letter]);
        }
      }
      return newState;
    default:
      return state;
  }
}