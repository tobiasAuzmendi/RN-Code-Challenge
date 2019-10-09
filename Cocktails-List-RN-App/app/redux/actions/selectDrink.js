import store from '../store';

export const selectDrink = (drinkId) => {
  store.dispatch(updateSelectedDrink(drinkId));
}

const updateSelectedDrink = drinkId => ({
  type: 'SELECT_DRINK',
  payload: {
    drinkId
  }
});
