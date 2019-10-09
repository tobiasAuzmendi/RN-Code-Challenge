import React from 'react';
import {
  ActivityIndicator
} from 'react-native';
import styles from './styles';

const Spinner = ({ size }) => (
  <ActivityIndicator size={size} color="#4EBCD1" style={styles.spinner}/>
);

export default Spinner;