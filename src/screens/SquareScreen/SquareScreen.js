import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from '../../components/ColorCounter/ColorCounter.js';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return state.red + action.payload > 255 ||
        state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const {red, green, blue} = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'red', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({
            type: 'red',
            payload: -1 * COLOR_INCREMENT,
          })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'blue', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({
            type: 'blue',
            payload: -1 * COLOR_INCREMENT,
          })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'green', payload: COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({
            type: 'green',
            payload: -1 * COLOR_INCREMENT,
          })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
};

const style = StyleSheet.create({});
export default SquareScreen;

// using use State
// import React, {useState} from 'react';
// import {Text, View, Button, StyleSheet} from 'react-native';
// import ColorCounter from '../../components/ColorCounter/ColorCounter.js';
// const COLOR_INCREMENT = 15;
// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const changeColor = (color, change) => {
//     switch (color) {
//       case 'red':
//         red + change > 255 || red + change < 0
//           ? null
//           : setRed(red + change);
//         return;
//       case 'green':
//         green + change > 255 || green + change < 0
//           ? null
//           : setGreen(green + change);
//         return;
//       case 'blue':
//         blue + change > 255 || blue + change < 0
//           ? null
//           : setBlue(blue + change);
//         return;

//       default:
//         return;
//     }
//   };
//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => {
//           changeColor('red', COLOR_INCREMENT);
//         }}
//         onDecrease={() => {
//           changeColor('red', -1 * COLOR_INCREMENT);
//         }}
//         color="Red"
//       />
//       <ColorCounter
//         onIncrease={() => {
//           changeColor('blue', COLOR_INCREMENT);
//         }}
//         onDecrease={() => {
//           changeColor('blue', -1 * COLOR_INCREMENT);
//         }}
//         color="Blue"
//       />
//       <ColorCounter
//         onIncrease={() => {
//           changeColor('green', COLOR_INCREMENT);
//         }}
//         onDecrease={() => {
//           changeColor('green', -1 * COLOR_INCREMENT);
//         }}
//         color="Green"
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}></View>
//     </View>
//   );
// };

// const style = StyleSheet.create({});
// export default SquareScreen;
