import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginBottom: 32,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: Colors.white
  },
  cardContent: {
    flex: 1.5
  },
  cardImage: {
    flex: 1,
    height: 150,
    borderRadius: 5
  },
  drinkName: {
    fontSize: 24,
    color: '#363636',
    marginBottom: 8
  },
  textColor: {
    color: '#828282'
  },
  ingredientItem: {
    fontSize: 16
  },
  mt4: {
    marginTop: 4
  }
});