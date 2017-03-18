import { combineReducers } from 'redux';

const words = (state = [], action) => {
  switch (action.type) {
    case 'addWord':
      return state.concat(action.result);
    case 'deleteWord':
      return state.filter(word => word.query !== action.word);
    default:
      return state;
  }
};

const input = (state = [], action) => {
  switch (action.type) {
    case 'addInput':
      return action.text.map(word => ({ text: word, select: false }));
    case 'selectInput':
      return state.map((word) => {
        if (word.text === action.word) { return { text: word.text, select: !word.select };}
        return word;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  input,
  words,
});

export default rootReducer;
