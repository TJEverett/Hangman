import * as c from "./../actions/ActionTypes";
import * as characters from "./../constants/Alphabet";

export default (state = [], action, solutionKey) => {
  let newState;
  switch (action.type) {
    case c.POPULATE_PHRASE:
      newState = [];
      let tempChar;
      const phraseWords = action.phrase.toUpperCase().split(" ");
      for (let word = 0; word < phraseWords.length; word++) {
        newState.push([]);
        for (let letter = 0; letter < phraseWords[word].length; letter++) {
          tempChar = phraseWords[word].charAt(letter);
          if (characters.english.indexOf(tempChar) !== -1) {
            newState[word].push("_");
          } else {
            newState[word].push(tempChar);
          }
        }
      }
      return newState;
    case c.GUESS_PHRASE:
      newState = JSON.parse(JSON.stringify(state));
      solutionKey[action.letter].forEach((location) => {
        newState[location[0]][location[1]] = action.letter;
      })
      return newState;
    default:
      return state;
  }
}