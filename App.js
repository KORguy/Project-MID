import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import cameraScreen from './src/cameraScreen';
import HomeScreen from "./src/HomeScreen";
import PreviewScan from './src/PreviewScan';
import alertPage from './src/alertPage';
import InputPage from './src/InputPage';
import confirmPage from './src/confirmPage';
import additionalPage from './src/additionalPage.js';

const AppNavigator = createStackNavigator (
  {
    Home: HomeScreen,
    cam: cameraScreen,
    preview: PreviewScan,
    alert: alertPage,
    datainput: InputPage,
    confirm: confirmPage,
    additional: additionalPage,
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
