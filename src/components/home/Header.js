import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
   return (
      <View style = {styles.container}>
         <Text style = {styles.header}>
         Welcome to Dreams Destination!         
         </Text>
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