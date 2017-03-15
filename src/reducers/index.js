import { combineReducers } from 'redux';

const words = (state = [], action) => {
  return state;
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
