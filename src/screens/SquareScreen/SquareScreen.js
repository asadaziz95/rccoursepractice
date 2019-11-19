import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import ColorCounter from '../../components/ColorCounter/ColorCounter.js'
const SquareScreen = () => {
    return (
        <View>
          <ColorCounter color="Red" />
          <ColorCounter color="Blue" />
          <ColorCounter color="Green"/>
        </View>
    );
}

const style = StyleSheet.create({});
export default SquareScreen;