import axios from 'axios';
const BASE_URL = 'http://www.thecocktaildb.com/api/json/v1/1';

export const retrieveDrinks = async () => {
  const drinksResponseJson = await axios.get(`${BASE_URL}/filter.php?g=Cocktail_glass`);

  return drinksResponseJson.data.drinks;
}

export const getDrinkInformation = async (drinkId) => {
  const drinksResponseJson = await axios(`${BASE_URL}/lookup.php?i=${drinkId}`);
  const drinks = drinksResponseJson.data.drinks;

  if (drinks && drinks.length) {
    const drinkResponse = drinks[0];
    const drink = {};
    const ingredients = [];

    for (const key in drinkResponse) {
      if (key.substring(0, key.length-1) === 'strIngredient' && key.length === 'strIngredient'.length + 1) {
        if (drinkResponse[key]) {
          ingredients.push(drinkResponse[key]);
        }
      } else {
        drink[key] = drinkResponse[key];
      }
    }

    return {
      ...drink,
      ingredients
    };
  }
}