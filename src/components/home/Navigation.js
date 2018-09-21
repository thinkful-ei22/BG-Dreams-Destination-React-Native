import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
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
      <View style = {styles.container}>
        
          
            <TouchableOpacity
            style = {styles.button}
            onPress = {goToHome}>
            
            <Text style = {styles.text}>
            Home
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.button}
            onPress = {goToAllDestinations}>
            
            <Text style = {styles.text}>
            Find Your Dream Destination
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.button}
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
  container: {
    backgroundColor: '#DAD2D8'
  },
  button : {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#233D4D',
    alignItems: 'center',
  },
  text: {
    color: '#FEFFFE'
  }
})