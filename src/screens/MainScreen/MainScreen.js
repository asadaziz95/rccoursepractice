import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const MainScreen = props => {
  let {navigation} = props;
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="List Screen" />
      <Button
        onPress={() => navigation.navigate('ImageScreen')}
        title="Image Screen"
      />
      <Button
        onPress={() => navigation.navigate('CounterScreen')}
        title="Visit Counter App"
      />
    </View>
  );
};

export default MainScreen;
