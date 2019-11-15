import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListView = () => {
    const friends = [
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' },
        { name: 'Friend #10' },
        { name: 'Friend #11' },
    ];
    return (
        <FlatList data={friends} renderItem={(element) => {return <Text>{element}</Text>}}/>

    )
}

const styles = StyleSheet.create({

})


export default ListView;

