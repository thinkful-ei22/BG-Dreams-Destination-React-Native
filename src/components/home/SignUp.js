import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Header from './Header'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password:'',
    confirmPass: '',
    footer: '',
    loggedIn: true
 }

 goToHome = () => {
  Actions.home()
}

 handleFirstName = (text) => {
  
  this.setState({ firstName: text}, function(){
  })

}
handleLastName = (text) => {
    this.setState({ lastName: text})
  }
  handleUserName = (text) => {
    this.setState({ userName: text})
  }
  handleEmail = (text) => {
    this.setState({ email: text})
  }
  handlePassword = (text) => {
    this.setState({ password: text})
  }
  handleConfirmPassword = (text) => {
    this.setState({ confirmPass: text})
  }
logIn = () => {

  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

  if (this.state.firstName === ''){
    alert ('First name is required')
  }
  else if (this.state.lastName === ''){
    alert ('Last name is required')
  }  
  else if (this.state.userName === ''){
    alert ('User name is required')
  } 
  else if (this.state.email === ''){
    alert ('Email is required')
  } 
  else if (!re.test(this.state.email)){
    alert ('Email is not valid')
  } 
  else if (this.state.password === ''){
    alert ('Password is required')
  } 
  else if (/\d/.test(this.state.password) === false){
    alert ('Password must contain a number')
  }
  else if (this.state.password.length < 7){
    alert ('Password is must have 7 characters or more')
  } 
  else if (this.state.password !== this.state.confirmPass){
    alert ('Passwords must match')
  } 
  else {
  this.setState({ 
    loggedIn: true,
    footer: 'Logged in as: ' + this.state.firstName + ' ' + this.state.lastName
  }, function () {
    goToHome()
  })
}
}

render (){
return (
      <ScrollView style = {styles.container}>
 <Header />
      <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "First Name"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleFirstName} 
      
      />

 <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Last Name"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleLastName} />

       <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "User Name"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleUserName} />

      <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Email"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleEmail} />

      <TextInput style = {styles.input}
               secureTextEntry={true}
               underlineColorAndroid = "transparent"
               placeholder = "Password (Min. 1 number, 7 characters)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

<TextInput style = {styles.input}
               secureTextEntry={true}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleConfirmPassword}/>


               <TouchableOpacity
               style = {styles.submitButton}
               onPress = {this.logIn}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </ScrollView>
    )
  }
}
export default SignUp

const styles = StyleSheet.create({
  container: {
     paddingTop: 23,
     height: 1000
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