const defaultState = {
  drinks: [],
  isLoading: true
};

function reducer(state = defaultState, { type, payload }) {
  switch(type) {
    case 'LOAD_DRINKS':
      return {
        isLoading: false,
        drinks: payload.drinks.map(drink => ({
          ...drink,
          hasDetailedInfo: false
        }))
      };
    case 'UPDATE_DRINK':
      const drinkIndex = state.drinks.findIndex(drink => drink.idDrink === payload.drink.idDrink);

      if (drinkIndex !== -1) {
        const newDrinks = [...state.drinks];
        newDrinks[drinkIndex] = {
          ...payload.drink,
          hasDetailedInfo: true
        };
        return {
          isLoading: false,
          drinks: newDrinks
        };
      }
      return state;
    default:
      return state;
  }
}
export default reducer;