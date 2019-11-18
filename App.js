import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Router from './src/router/index.js';

const App: () => React$Node = () => {
  return <Router />;
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default App;
