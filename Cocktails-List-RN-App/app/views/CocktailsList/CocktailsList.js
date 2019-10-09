import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import DrinkCard from './DrinkCard/DrinkCard';
import { loadDrinks } from '../../redux/actions/cocktailsList';
import { retrieveDrinks } from '../../services/DrinksService';
import styles from './styles';
import Spinner from '../../components/Spinner/Spinner';

class CocktailsList extends React.Component {

    constructor(props) {
      super(props);

      retrieveDrinks().then((drinks) => {
        props.loadDrinks(drinks);
      });
    }

    renderLoading = () => (
      <View style={styles.spinnerContainer}>
        <Spinner size="large"/>
      </View>
    );

    navigateToDrinkDetail = (drink) => {
      return this.props.navigation.navigate('CocktailDetail', {
        drink: drink
      })
    }

    renderCocktailsList = (drinks) => {
      return (
        <View style={styles.body}>
          <FlatList
            initialNumToRender={10}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={300}
            data= {drinks}
            ListHeaderComponent={() => (
                <Text style={styles.header}>Random drinks 0.1</Text>
            )}
            renderItem= {({item, key}) => (
                <DrinkCard drink={item} key={key} navigateToDrinkDetail={this.navigateToDrinkDetail}/>
            )}
          />
        </View>
      );
    }

    render() {
      const { isLoading, drinks } = this.props;

      if(isLoading) {
        return this.renderLoading();
      }

      return this.renderCocktailsList(drinks);
    }
}

const mapStateToProps = ({ cocktailsList }) => ({
  drinks: cocktailsList.drinks,
  isLoading: cocktailsList.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadDrinks: drinks => dispatch(loadDrinks(drinks))
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsList);