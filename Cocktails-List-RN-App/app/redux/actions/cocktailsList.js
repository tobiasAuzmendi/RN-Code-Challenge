export const loadDrinks = drinks => ({
  type: 'LOAD_DRINKS',
  payload: {
    drinks
  }
});

export const updateDrink = drink => ({
  type: 'UPDATE_DRINK',
  payload: {
    drink
  }
});

