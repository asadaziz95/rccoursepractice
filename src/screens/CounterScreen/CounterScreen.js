import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title={'Increase'} onPress={() => setCounter(counter + 1)} />
      <Button title={'Decrease'} onPress={() => setCounter(counter - 1)} />
      <Text>Current Counter</Text>
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;

// counter with using class component

// class CounterScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {counter: 0};
//   }
//   increaseCounter = () => {
//     this.setState({
//       counter: this.state.counter+1,
//     });
//   };
//   decreaseCounter = () => {
//     this.setState({
//         counter: this.state.counter-1,
//       });
//   };
//   render() {
//     return (
//       <View>
//         <Button title={'Increase'} onPress={() => this.increaseCounter()} />
//         <Button title={'Decrease'} onPress={() => this.decreaseCounter()} />
//         <Text>Current Counter</Text>
//         <Text>{this.state.counter}</Text>
//       </View>
//     );
//   }
// }

// export default CounterScreen;
