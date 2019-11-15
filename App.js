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
import 

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default App;
