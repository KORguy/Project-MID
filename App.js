import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import cameraScreen from './src/cameraScreen';
import HomeScreen from "./src/HomeScreen";
import PreviewScan from './src/PreviewScan';
import alertPage from './src/alertPage';
import InputPage from './src/InputPage';

const AppNavigator = createStackNavigator (
  {
    Home: HomeScreen,
    cam: cameraScreen,
    preview: PreviewScan,
    alert: alertPage,
    datainput: InputPage
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  
  render() {
    return <AppContainer />;
  }
}
