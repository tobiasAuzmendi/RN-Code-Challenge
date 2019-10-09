import { StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white
  },
  body: {
    marginTop: Platform.OS === 'ios' ? 24 : 0,
    flex: 1,
    backgroundColor: '#4EBCD1'
  },
  spinnerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  }
});
