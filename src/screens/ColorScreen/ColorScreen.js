import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title={'Change Color'}
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      {/* <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: randomRgb(),
        }}></View> */}
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return (
            <View
              style={{width: 100, height: 100, backgroundColor: item}}></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScreen;
