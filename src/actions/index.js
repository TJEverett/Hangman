import * as c from "./ActionTypes";

export const generateLocation = () => ({
  type: c.GENERATE_LOCATION
});

export const populateLocation = (phrase) => ({
  type: c.POPULATE_LOCATION,
  phrase
});

export const generateButton = () => ({
  type: c.GENERATE_BUTTON
});

export const disableButton = (letter) => ({
  type: c.DISABLE_BUTTON,
  letter
});

export const populatePhrase = (phrase) => ({
  type: c.POPULATE_PHRASE,
  phrase
});

export const guessPhrase = (letter) => ({
  type: c.GUESS_PHRASE,
  letter
});

export const guessCounter = (letter) => ({
  type: c.GUESS_COUNTER,
  letter
});

export const resetCounter = () => ({
  type: c.RESET_COUNTER
});

export const truthyBool = () => ({
  type: c.TRUTHY_BOOL
});

export const falsyBool = () => ({
  type: c.FALSY_BOOL
});