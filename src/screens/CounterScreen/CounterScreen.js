import React, {useReducer} from 'react';
import {Text, View, Button} from 'react-native';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increament_counter':
      return {...state, counter: state.counter + action.payload};
    case 'decreament_counter':
      return {...state, counter: state.counter - action.payload};

    default:
      state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const {counter} = state;
  return (
    <View>
      <Button
        title={'Increase'}
        onPress={() => dispatch({type: 'increament_counter',payload:1})}
      />
      <Button
        title={'Decrease'}
        onPress={() => dispatch({type: 'decreament_counter',payload:1})}
      />
      <Text>Current Counter</Text>
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;

/// useing usestate

// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <View>
//       <Button title={'Increase'} onPress={() => setCounter(counter + 1)} />
//       <Button title={'Decrease'} onPress={() => setCounter(counter - 1)} />
//       <Text>Current Counter</Text>
//       <Text>{counter}</Text>
//     </View>
//   );
// };
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
