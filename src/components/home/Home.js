import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import SignUp from './SignUp'
import PickerExample from './PickerExample'
import FeaturedDestinations from './featured-destinations'
import AllDestinations from './all-destinations'
import Events from './events'
import FeaturedEvent from './featured-events'

class Home extends Component {
  state = {
          header: 'Welcome to Dreams Destination!',
          subHeader: 'Find the Destination of your Dreams!',
          loggedIn: true,
          firstName: '',
          lastName: '',
          userName: '',
          email: '',
          password:'',
          confirmPass: '',
          footer: ''
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
  })
}
}


 
   checkLoggedIn = () =>{
    let returnComponent;
    if (this.state.loggedIn){
      returnComponent =     
      <ScrollView>
        <Header />
      <Navigation />
      <FeaturedEvent />
      <FeaturedDestinations />
      </ScrollView>
     }
     else {
       returnComponent = <SignUp 
       handleFirstName = {this.handleFirstName} 
       handleLastName = {this.handleLastName} 
       handleUserName = {this.handleUserName}
       handleEmail = {this.handleEmail}
       handlePassword = {this.handlePassword}
       handleConfirmPassword = {this.handleConfirmPassword}
       logIn = {this.logIn}/>
     }
     return returnComponent;
  }
      render(){
  return (
      <View>
    {/* <Header/> */}
    {this.checkLoggedIn()}
    <Footer footer = {this.state.footer} />
    </View>
  )
}
}

export default Home




