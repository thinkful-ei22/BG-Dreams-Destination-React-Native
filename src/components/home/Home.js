import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import PresentationalComponent from './PresentationalComponent'
import List from './List.js'
import Inputs from './Inputs.js'


const Home = () => {
  state = {
          header: 'Welcome to Dreams Destination!',
          subHeader: 'Find the Destination of your Dreams!'
       }
  return (
    // <List />
    <View>
      <View style = {style.container1}>
    <PresentationalComponent header = {this.state.header} subHeader= {this.state.subHeader} />
    <Inputs />
    </View>
    </View>
  )
}
export default Home

const style = StyleSheet.create ({
  container1: {
     borderBottomWidth: 1,
     borderBottomColor: '#f4c842'
  }
})


// const Home = () => {
//   return (
//     <View>
//     <View style = {style.container1}>
//     <View style = {style.blackImg}/>
//     <View style = {style.yellowImg}/>
//  </View>

//  <View style = {style.container2}>
//     <View style = {style.blackImg}/>
//     <View style = {style.yellowImg}/>
//  </View>

//  <View style = {style.container3}>
//     <View style = {style.blackImg}/>
//     <View style = {style.yellowImg}/>
//  </View>

//  <View style = {style.container4}>
//     <View style = {style.blackImg}/>
//     <View style = {style.yellowImg}/>
//  </View>

//  <View style = {style.container5}>
//     <View style = {style.blackImg}/>
//     <View style = {style.yellowImg}/>
//  </View>
//  </View>
//   )
// }

// export default Home

// const style = StyleSheet.create ({
//   container1: {
//      borderBottomWidth: 1,
//      borderBottomColor: '#f4c842'
//   },
//   container2: {
//      flexDirection: 'row',
//      justifyContent: 'space-around',
//      alignItems: 'center',
//      borderBottomWidth: 1,
//      borderBottomColor: '#f4c842'
//   },
//   container3: {
//      flexDirection: 'row',
//      justifyContent: 'flex-end',
//      borderBottomWidth: 1,
//      borderBottomColor: '#f4c842'
//   },
//   container4: {
//      alignItems: 'center',
//      borderBottomWidth: 1,
//      borderBottomColor: '#f4c842'
//   },
//   container5: {
//      flexDirection: 'row',
//      justifyContent: 'center',
//      alignItems: 'center',
//   },
//   blackImg: {
//      backgroundColor: 'black',
//      height: 90,
//      width: 90
//   },
//   yellowImg: {
//      backgroundColor: 'yellow',
//      height: 50,
//      width: 50
//   }
// })



// class Home extends Component {
//    state = {
//       myState: 'Welcome to Dreams Destination!'
//    }
//    updateState = () => this.setState({myState: 'We bring you the destination of your dreams!'})
//    render() {
//       return (
//          <View>
//             <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState} />
//          </View>
//       );
//    }
// }
// export default Home;