import { combineReducers, createStore } from 'redux';
import cocktailsList from './reducers/cocktailsList';
import selectedDrinkId from './reducers/selectDrink';

const reducer = combineReducers({
    cocktailsList,
    selectedDrinkId
});

const store = createStore(reducer);

export default store;