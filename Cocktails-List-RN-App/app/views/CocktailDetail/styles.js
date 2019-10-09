import { StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#4EBCD1',
    paddingHorizontal: 16,
    marginTop: Platform.OS === 'ios' ? 24 : 0
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16
  },
  titleContainer: {
    flex: 1,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,
    color: Colors.white
  },
  sectionContainer: {
    marginBottom: 32,
    padding: 16,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    color: Colors.red
  },
  sectionImage: {
    height: 250,
    borderRadius: 5
  },
  sectionText: {
    color: '#828282',
    fontSize: 16
  },
  mb8: {
    marginBottom: 8
  },
  mb16: {
    marginBottom: 16
  }
});
