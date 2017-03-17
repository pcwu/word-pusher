import 'whatwg-fetch';

export const addWord = word => (dispatch) => {
  dispatch({ type: 'addWord', word });
};

export const deleteWord = word => (dispatch) => {
  dispatch({ type: 'deleteWord', word });
};

export const addWords = words => (dispatch) => {
  dispatch({ type: 'addWords', words });
};

export const addInput = text => (dispatch) => {
  dispatch({ type: 'addInput', text });
};

export const fetchWord = word => (dispatch) => {
  fetch(
    `http://localhost:4000/api/dict/de/${word}`,
  )
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.log(error));
};
