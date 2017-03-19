import 'whatwg-fetch';

export const addWord = word => (dispatch) => {
  fetch(`http://word-pusher-server.herokuapp.com/api/dict/${word}`)
  .then(response => response.json())
  .then(data => dispatch({ type: 'addWord', result: data.result }))
  .catch();
};
export const deleteWord = word => ({ type: 'deleteWord', word });

export const addInput = text => ({ type: 'addInput', text });
export const selectInput = word => ({ type: 'selectInput', word });
