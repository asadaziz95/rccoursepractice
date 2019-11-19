import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
class CounterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  render() {
    return (
      <View>
        <Button title={'Increase'} />
        <Button title={'Increase'} />
        <Text>Current Counter</Text>
      </View>
    );
  }
}

export default CounterScreen;
