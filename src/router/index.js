import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen.js';
import MainScreen from './../screens/MainScreen/MainScreen.js';
import ImageScreen from './../screens/ImageScreen/ImageScreen.js';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MainScreen: MainScreen,
    ImageScreen: ImageScreen,
  },
  {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(AppNavigator);
