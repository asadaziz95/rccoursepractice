import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ImageDetail from '../../components/ImageDetail/ImageDetail.js';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require('../../assets/forest.jpg')}
        imgScore={2}
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require('../../assets/mountain.jpg')}
        imgScore={8}
      />
      <ImageDetail
        title="Beach"
        imgSrc={require('../../assets/beach.jpg')}
        imgScore={9}
      />
    </View>
  );
};

export default ImageScreen;
