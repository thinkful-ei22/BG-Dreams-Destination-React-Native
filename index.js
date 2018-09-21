import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './src/components/home/Home.js'
import Routes from './src/components/home/Routes.js'
class reactTutorialApp extends Component {
   render() {
      return (
<Routes />
      );
   }
}
export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);