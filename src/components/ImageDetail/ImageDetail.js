import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

const ImageDetail = props => {
  let {title} = props;
  return (
    <View>
      <Text>Name:{title}</Text>
        <Image src={} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
