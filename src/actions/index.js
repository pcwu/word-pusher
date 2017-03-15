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
