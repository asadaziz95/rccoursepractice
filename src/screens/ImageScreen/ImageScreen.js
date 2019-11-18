import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ImageDetail from '../../components/ImageDetail/ImageDetail.js';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Sea" />
      <ImageDetail title="Mountain" />
      <ImageDetail title="Desert" />
    </View>
  );
};

export default ImageScreen;
