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
  constructor(props){
    super(props)
  this.state = {
          header: 'Welcome to Dreams Destination!',
          subHeader: 'Find the Destination of your Dreams!',
          loggedIn: false
       }
      }
       
   checkLoggedIn = () =>{
    let returnComponent;
    if (!this.state.loggedIn){
      console.log(SignUp.state)
      returnComponent =     
      <Footer footer = {this.state.footer} />
     }
     return returnComponent;
  }
      render(){
  return (
    <ScrollView>
        <Header />
      <Navigation />
      <FeaturedEvent />
      <FeaturedDestinations />
      {this.checkLoggedIn()}
      </ScrollView>
  )
}
}

export default Home




