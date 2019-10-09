const defaultState = null;

function reducer(state = defaultState, { type, payload }) {
  switch(type) {
    case 'SELECT_DRINK':
      return payload.drinkId;
    default:
      return state;
  }
}
export default reducer;