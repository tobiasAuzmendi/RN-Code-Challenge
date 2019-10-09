import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import Spinner from '../../../components/Spinner/Spinner';
import { updateDrink } from '../../../redux/actions/cocktailsList';
import { getDrinkInformation } from '../../../services/DrinksService';
import { connect } from 'react-redux';

class DrinkCard extends React.PureComponent {

  constructor(props) {
    super(props);

    getDrinkInformation(props.drink.idDrink).then((drink) => {
      props.updateDrink(drink);
    });
  }

  renderIngredients(drink) {
    const { hasDetailedInfo, ingredients } = drink;

    if (hasDetailedInfo) {
      return (
        <View>
          {
            ingredients.map((ingredient, key) => {
              return key < 2 ?
                (<Text key={key} style={[styles.ingredientItem, styles.textColor]}>{`\u2022 ${ingredient}`}</Text>) :
                (key === 2) ?
                (<Text key={key} style={[styles.mt4, styles.textColor]}>y {ingredients.length - 2} ingredientes más.</Text>) :
                null;
            })
          }
        </View>
      );
    }
    return  this.renderLoading();
  }

  renderLoading = () => (
    <Spinner size="small"/>
  );

  render() {
    const { navigateToDrinkDetail, drink } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => { navigateToDrinkDetail(drink) }}>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Text style={styles.drinkName}>{drink.strDrink}</Text>
            {
              this.renderIngredients(drink)
            }
          </View>
          <Image source={{uri: drink.strDrinkThumb}} style={styles.cardImage} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDrink: drinks => dispatch(updateDrink(drinks))
});

export default connect(null, mapDispatchToProps)(DrinkCard);