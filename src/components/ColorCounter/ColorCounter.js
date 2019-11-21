import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
const ColorCounter = props => {
  const {color, onIncrease, onDecrease} = props;

  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => {
          onIncrease();
        }}
        title={`Increase ${color}`}
      />
      <Button
        onPress={() => {
          onDecrease();
        }}
        title={`Decrease ${color}`}
      />
    </View>
  );
};

const style = StyleSheet.create({});
export default ColorCounter;
