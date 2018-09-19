import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
   return (
      <View>
         <Text style = {styles.header}>
            {props.header}
         </Text>
         <Text style = {styles.subHeader}>
         {props.subHeader}
         </Text> 
      </View>
   )
}
export default Header

const styles = StyleSheet.create({
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