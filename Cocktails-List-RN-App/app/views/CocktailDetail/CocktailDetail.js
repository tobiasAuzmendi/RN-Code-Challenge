import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'
import { selectDrink } from '../../redux/actions/selectDrink';
import Spinner from '../../components/Spinner/Spinner';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class CocktailDetail extends React.Component {

  constructor(props) {
    super(props);

    const drink = this.props.navigation.getParam('drink', null);
    selectDrink(drink.idDrink);
  }

  renderLoading = () => (
    <View style={{alignItems: 'center'}}>
      <Spinner size="small"/>
    </View>
  );

  renderDetailedInformation(drink) {
    const { hasDetailedInfo, ingredients, strInstructions } = drink;

    if (hasDetailedInfo) {
      return (
        <View>
          <View style={styles.mb16}>
            {
              ingredients.length &&
              ingredients.map((ingredient, key) => (
                <Text key={key} style={styles.sectionText}>{ingredient}</Text>)
              )
            }
          </View>
          <Text style={[styles.sectionText, styles.mb8]}>{`\u2022`} How to prepare</Text>
          {
            strInstructions &&
            <Text style={[styles.sectionText, styles.mb16]}>{strInstructions}</Text>
          }
        </View>
      );
    }
    return  this.renderLoading();
  }

  render() {
    const drinkParam = this.props.navigation.getParam('drink', null);
    const drink = this.props.drink || drinkParam;
    const { strDrink, strDrinkThumb } = drink;
    const goBack = () => {
      this.props.navigation.goBack();
    };

    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
        <View style={styles.header}>
          <Icon
            name='arrow-back'
            type='ionicons'
            backgroundColor= 'red'
            color={Colors.white}
            onPress={goBack}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText} numberOfLines={1}>{strDrink}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Image style={[styles.sectionImage, styles.mb16]} source={{uri: strDrinkThumb}} />
          {
            this.renderDetailedInformation(drink)
          }
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const drinks = state.cocktailsList.drinks;

  if (drinks && drinks.length) {
    const drinkIndex = drinks.findIndex(drink => drink.idDrink === state.selectedDrinkId);

    if (drinkIndex !== -1) {
      return { drink: drinks[drinkIndex] };
    } else {
      return {};
    }
  }
  return {};
}

export default connect(mapStateToProps)(CocktailDetail);