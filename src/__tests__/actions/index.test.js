import * as actions from "../../actions/index";
import * as c from "../../actions/ActionTypes";

describe("Hangman actions", () => {

  test("generateLocation should create GENERATE_LOCATION action", () => {
    expect(actions.generateLocation()).toEqual({
      type: c.GENERATE_LOCATION
    });
  });

  test("populateLocation should create POPULATE_LOCATION action", () => {
    expect(actions.populateLocation("as a bag")).toEqual({
      type: c.POPULATE_LOCATION,
      phrase: "as a bag"
    });
  });

  test("generateButton should create GENERATE_BUTTON action", () => {
    expect(actions.generateButton()).toEqual({
      type: c.GENERATE_BUTTON
    });
  });

  test("disableButton should create DISABLE_BUTTON action", () => {
    expect(actions.disableButton("A")).toEqual({
      type: c.DISABLE_BUTTON,
      letter: "A"
    });
  });

  test("populatePhrase should create POPULATE_PHRASE action", () => {
    expect(actions.populatePhrase("as a bag")).toEqual({
      type: c.POPULATE_PHRASE,
      phrase: "as a bag"
    });
  });

  test("guessPhrase should create GUESS_PHRASE action", () => {
    expect(actions.guessPhrase("A")).toEqual({
      type: c.GUESS_PHRASE,
      letter: "A"
    });
  });

  test("guessCounter should create GUESS_COUNTER action", () => {
    expect(actions.guessCounter("A")).toEqual({
      type: c.GUESS_COUNTER,
      letter: "A"
    });
  });

  test("resetCounter should create RESET_COUNTER action", () => {
    expect(actions.resetCounter()).toEqual({
      type: c.RESET_COUNTER
    });
  });

  test("truthyBool should create TRUTHY_BOOL action", () => {
    expect(actions.truthyBool()).toEqual({
      type: c.TRUTHY_BOOL
    });
  });

  test("falsyBool should create FALSY_BOOL action", () => {
    expect(actions.falsyBool()).toEqual({
      type: c.FALSY_BOOL
    });
  });

});