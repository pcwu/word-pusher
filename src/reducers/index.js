import { combineReducers } from 'redux';

const words = (state = [], action) => {
  switch (action.type) {
    case 'addWord':
      return state.concat(action.word);
    case 'deleteWord':
      return state.filter(word => word !== action.word);
    case 'addWords':
      return action.words;
    default:
      return state;
  }
};

const input = (state = [], action) => {
  switch (action.type) {
    case 'addInput':
      return action.text;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  words,
  input,
});

export default rootReducer;
