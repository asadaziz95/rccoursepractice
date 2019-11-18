import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListView;
