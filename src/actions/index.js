export const addWords = () => (dispatch) => {
  dispatch({ type: 'add' });
};

export const addInput = text => (dispatch) => {
  dispatch({ type: 'addInput', text });
};
