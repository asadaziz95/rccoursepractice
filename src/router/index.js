import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen.js';
import MainScreen from './../screens/MainScreen/MainScreen.js';
import ImageScreen from './../screens/ImageScreen/ImageScreen.js';
import CounterScreen from './../screens/CounterScreen/CounterScreen.js';
import ColorScreen from './../screens/ColorScreen/ColorScreen.js';
import SquareScreen from '../screens/SquareScreen/SquareScreen.js';
import TextScreen from '../screens/TextScreen/TextScreen.js';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MainScreen: MainScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen,TextScreen,
  },
  {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(AppNavigator);
