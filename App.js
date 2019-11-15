/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import ListView from './src/components/ListView/index.js';

const ListView = () => {
  const friends = [
    {name: 'Friend #1', age: '23'},
    {name: 'Friend #2', age: '21'},
    {name: 'Friend #3', age: '19'},
    {name: 'Friend #4', age: '21'},
    {name: 'Friend #5', age: '22'},
    {name: 'Friend #6', age: '23'},
    {name: 'Friend #7', age: '24'},
    {name: 'Friend #8', age: '25'},
    {name: 'Friend #9', age: '26'},
    {name: 'Friend #10', age: '27'},
    {name: 'Friend #11', age: '28'},
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={friends => friends.name}
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {'Name :' + item.name + 'Age :' + item.age}
          </Text>
        );
      }}
    />
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ListView />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default App;
