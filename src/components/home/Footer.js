import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Footer = (props) => {
   return (
      <View>
         <Text style = {styles.footer}>
            {props.footer}
         </Text>
      </View>
   )
}
export default Footer

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10
  }
})