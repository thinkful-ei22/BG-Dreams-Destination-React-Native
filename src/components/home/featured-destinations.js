import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet} from 'react-native'


const FeaturedDestinations = (props) => {
  const handlePress = () => false

const startLocation =
{
  city: 'Atlanta',
  state: 'GA',
  country: 'United States',
  code: 'ATL'
}

  const destinations = 
[
  {
    city: 'Mumbai',
    state: 'MH',
    country: 'India',
    code: 'BOM',
    startDate: 'Nov 13',
    returnDate: 'Nov 27',
    vacationDays: 14,
    lowestPrice: 722,
    stops: 1
  },
  {
    city: 'London',
    state: '',
    country: 'ENG',
    code: 'LHR',
    startDate: 'Feb 6',
    returnDate: 'Feb 13',
    vacationDays: 7,
    lowestPrice: 501,
    stops: 2
  }
]
const stateOrCountry = (index) => {
let location;

if (destinations[index].state === ''){
  location = destinations[index].country
}
else {
  location = destinations[index].state
}
return location
}
const stopOrStops = (index) => {
  let stopInfo;
  if (destinations[index].stops > 1){
    stopInfo = <Text style ={styles.stopInfo}>
      {destinations[index].stops} stops
    </Text>
  }
  else {
    stopInfo = <Text style ={styles.stopInfo}>
    {destinations[index].stops} stop
  </Text>
  }
return stopInfo
}

return (
<View>
  <View style = {styles.containerMain}>
<Text style = {styles.header}>
Featured Destinations
</Text>

<View style ={styles.mumbaiContainer}>
  <Image source = {{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/02/76/16/90/splash.jpg'}}
  style = {styles.mumbaiImage} />
  <View style ={styles.tripDescription}>
  <Text style ={styles.descriptionHeader}>
  {destinations[0].city}, {stateOrCountry(0)}
  </Text>
  <Text style = {styles.descriptionText}>
  {startLocation.code} {startLocation.city} to {destinations[0].code} {destinations[0].city}{"\n"}
  {destinations[0].startDate} - {destinations[0].returnDate} • {destinations[0].vacationDays} days
  </Text>
  <Text style ={styles.price}>
  ${destinations[0].lowestPrice}+
  </Text>
  {stopOrStops(0)}

  <View style = {styles.button}>
  <Button  onPress = {handlePress}
         title = "FIND FLIGHTS"
         color = "green"
      />
      </View>
  </View>
  </View>

<View style ={styles.londonContainer}>
  <Image source = {{ uri: 'http://s.marketwatch.com/public/resources/MWimages/MW-BS558_pflond_MG_20140114165105.jpg'}}
  style = {styles.londonImage} />
  <View style ={styles.tripDescription}>
  <Text style ={styles.descriptionHeader}>
  {destinations[1].city}, {stateOrCountry(1)}
  </Text>
  <Text style = {styles.descriptionText}>
  {startLocation.code} {startLocation.city} to {destinations[1].code} {destinations[1].city}{"\n"}
  {destinations[1].startDate} - {destinations[1].returnDate} • {destinations[1].vacationDays} days
  </Text>
  <Text style ={styles.price}>
  ${destinations[1].lowestPrice}+
  </Text>
  {stopOrStops(1)}

  <View style = {styles.button}>
  <Button  onPress = {handlePress}
         title = "FIND FLIGHTS"
         color = "green"
      />
      </View>
  </View>
  </View>

</View>
</View>
)
}

export default FeaturedDestinations


const styles = StyleSheet.create ({
  containerMain: {
    flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 1000,
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  },
  mumbaiContainer: {
    marginTop: 10
  },
  mumbaiImage :{
    width: 275, 
    height: 175,
  },
  tripDescription: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRightWidth: 1,
    borderRightColor: 'grey'
  },
  descriptionHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15
  },
  descriptionText: {
    marginLeft: 15
  },
  price:{
    marginLeft: 35,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  },
  button: {
  borderWidth: 1,
  borderColor: 'black',
  width: 150,
  left: 110,
  bottom: 45
  },
  stopInfo: {
    marginLeft: 45
  },

  londonContainer: {
    marginTop: 10
  },
  londonImage :{
    width: 275, 
    height: 175,
  }

})