import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const SignUp = (props) => {
  // constructor(props){
  // state = {
  //  
  // }
 
  
  // login = (firstName, lastName, pass, confirmPass) => {

  //   if (pass !== confirmPass){
  //     alert ('Passwords do not match!')
  //   }
  //   else {
  //     alert ('Sign up successful. Welcome to the Destination of your Dreams ' + firstName + ' ' + lastName )

  //   }
  // }
  
    return (
      <View style = {styles.container}>

      <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "First Name"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {props.handleFirstName} 
      
      />

 <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Last Name"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {props.handleLastName} />

       <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "User Name"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {props.handleUserName} />

      <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Email"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {props.handleEmail} />

      <TextInput style = {styles.input}
               secureTextEntry={true}
               underlineColorAndroid = "transparent"
               placeholder = "Password (Min. 1 number, 7 characters)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {props.handlePassword}/>

<TextInput style = {styles.input}
               secureTextEntry={true}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {props.handleConfirmPassword}/>


               <TouchableOpacity
               style = {styles.submitButton}
               onPress = {props.logIn}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </View>
    )
  }
export default SignUp

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})