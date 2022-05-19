import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import boolReducer from "../../reducers/bool-reducer";
import counterReducer from "../../reducers/counter-reducer";
import letterButtonReducer from "../../reducers/letter-button-reducer";
import phraseReducer from "../../reducers/phrase-reducer";
import solutionLocationReducer from "../../reducers/solution-location-reducer";
import * as c from "../../actions/ActionTypes";
import * as characters from "../../constants/Alphabet";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  let action;

  test("Should return default stat if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      gameRunning: false,
      solutionLocations: {},
      solutionChars: [],
      mistakes: 0,
      guessButtons: []
    });
  });

  test("Check that initial state of boolReducer matches rootReducer", () => {
    expect(store.getState().gameRunning).toEqual(boolReducer(undefined, { type: null }));
  });
  
  test("Check that initial state of counterReducer matches rootReducer", () => {
    expect(store.getState().mistakes).toEqual(counterReducer(undefined, { type: null }));
  });

  test("Check that initial state of letterButtonReducer matches rootReducer", () => {
    expect(store.getState().guessButtons).toEqual(letterButtonReducer(undefined, { type: null }));
  });

  test("Check that initial state of phraseReducer matches rootReducer", () => {
    expect(store.getState().solutionChars).toEqual(phraseReducer(undefined, { type: null }));
  });

  test("Check that initial state of solutionLocationReducer matches rootReducer", () => {
    expect(store.getState().solutionLocations).toEqual(solutionLocationReducer(undefined, { type: null }));
  });

  test("Check that TRUTHY_BOOL action works for both boolReducer and rootReducer", () => {
    action = { type: c.TRUTHY_BOOL };
    store.dispatch(action);
    expect(store.getState().gameRunning).toEqual(boolReducer(false, action));
  });

  test("Check that INCREMENT_COUNTER action works for both counterReducer and rootReducer", () => {
    action = { type: c.INCREMENT_COUNTER };
    store.dispatch(action);
    expect(store.getState().mistakes).toEqual(counterReducer(0, action));
  });
  
  test("Check that GENERATE_BUTTON action works for both letterButtonReducer and rootReducer", () => {
    action = { type: c.GENERATE_BUTTON };
    store.dispatch(action);
    expect(store.getState().guessButtons).toEqual(letterButtonReducer([], action));
  });

  test("Check that POPULATE_PHRASE action works for both phraseReducer and rootReducer", () => {
    action = {
      type: c.POPULATE_PHRASE,
      phrase: "as a bag"
    };
    store.dispatch(action);
    expect(store.getState().solutionChars).toEqual(phraseReducer([], action));
  });

  test("Check that GENERATE_LOCATION action works for both solutionLocationReducer and rootReducer", () => {
    action = { type: c.GENERATE_LOCATION };
    store.dispatch(action);
    expect(store.getState().solutionLocations).toEqual(solutionLocationReducer({}, action));
  });

});
