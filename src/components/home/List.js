import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        button: 'Home'
      },
      {
        id: 1,
        button: 'Find Your Dreams Destination'
      },
      {
        id: 2,
        button: 'View Booked Destinations'
      },
      {
        id: 3,
        button: 'FAQ & Contact'
      }
    ]
  }
  alertItemName = (item) => {
    alert(item.name)
  }
  render (){
    return (
      <View>
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
            key = {item.id}
            style = {styles.container}
            onPress = {() => this.alertItemName(item)}>
            
            <Text style = {styles.text}>
            {item.button}
            </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

export default List

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