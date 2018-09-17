import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './src/components/home/Home.js'

class reactTutorialApp extends Component {
   render() {
      return (
         <View>
            <Home />
         </View>
      );
   }
}
export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);