import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  goToSignUp = () => {
    Actions.signUp()
  }
  goToLogIn = () => {
    Actions.logIn()
  }
   return (
      <View style = {styles.container}>
         <Text style = {styles.header}>
         Welcome to Dreams Destination!         
         </Text>
         <TouchableOpacity
            style = {styles.signUpContainer}
            onPress = {goToSignUp}>
{/*             
            <Text style = {styles.text}>
            Sign Up
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.signUpContainer}
            onPress = {goToSignUp}>
            
            <Text style = {styles.text}>
            Log In
            </Text> */}
            </TouchableOpacity>

         <Text style = {styles.subHeader}>
         Find the Destination of your Dreams!
         </Text> 
         
      </View>
   )
}
export default Header

const styles = StyleSheet.create({
  container:{
    borderBottomWidth: 1,
    borderBottomColor: '#f4c842'
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  },
  subHeader: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  }
})