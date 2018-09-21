import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import { Actions } from 'react-native-router-flux';

const Navigation = () => {

  alertItemName = (item) => {
    alert(item.name)
  }
  goToHome = () => {
    Actions.home()
  }
  goToAllDestinations = () => {
    Actions.allDestinations()
  }
  goToAllEvents = () => {
    Actions.events()
  }

    return (
      <View>
        
          
            <TouchableOpacity
            style = {styles.container}
            onPress = {goToHome}>
            
            <Text style = {styles.text}>
            Home
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.container}
            onPress = {goToAllDestinations}>
            
            <Text style = {styles.text}>
            Find Your Dream Destination
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.container}
            onPress = {goToAllEvents}>
            
            <Text style = {styles.text}>
            View Our Dream Events
            </Text>
            </TouchableOpacity>
      </View>
    )
    }
export default Navigation

const styles = StyleSheet.create ({
  container : {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c'
  }
})