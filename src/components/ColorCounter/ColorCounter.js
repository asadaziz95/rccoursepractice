import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
const ColorCounter = props => {
  const {color} = props;
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const style = StyleSheet.create({});
export default ColorCounter;
