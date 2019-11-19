import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = props => {
  let {title, imgSrc,imgScore} = props;
  return (
    <View>
      <Image source={imgSrc} />
      <Text>{title}</Text>
      <Text>Score:{imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
