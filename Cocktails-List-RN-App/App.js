import React from 'react';
import CocktailsList from './app/views/CocktailsList/CocktailsList';
import CocktailDetail from './app/views/CocktailDetail/CocktailDetail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './app/redux/store';

const appNavigator = createStackNavigator({
    CocktailsList: {
        screen: CocktailsList,
        navigationOptions: {
            header: null
        }
    },
    CocktailDetail: {
        screen: CocktailDetail,
        navigationOptions: {
            header: null
        }
    }
});

const AppContainer = createAppContainer(appNavigator);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default App;
