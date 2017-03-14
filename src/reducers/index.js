import { combineReducers } from 'redux';

const words = (state = [], action) => {
  return state;
};


const rootReducer = combineReducers({
  words,
});

export default rootReducer;
