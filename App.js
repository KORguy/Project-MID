import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import cameraScreen from './src/cameraScreen';
import rHomeScreen from './src/rHomeScreen';
import urHomeScreen from './src/urHomeScreen';
import PreviewScan from './src/PreviewScan';
import alertPage from './src/alertPage';

const AppNavigator = createStackNavigator (
  {
    urHome: urHomeScreen,
    rHome: rHomeScreen,
    cam: cameraScreen,
    preview: PreviewScan,
    alert: alertPage,
  },
  {
    initialRouteName: 'urHome',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
