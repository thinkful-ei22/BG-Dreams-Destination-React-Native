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

destinations = 
[
  {
    key: 0,
    city: 'Mumbai',
    state: 'MH',
    country: 'India',
    countryCode: 'IN',
    code: 'BOM',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/76/16/90/splash.jpg',
    startDate: 'Nov 13',
    returnDate: 'Nov 27',
    vacationDays: 14,
    lowestPrice: 722,
    stops: 1
  },
  {
    key: 1,
    city: 'London',
    state: '',
    country: 'England',
    countryCode: 'ENG',
    code: 'LHR',
    image: 'http://s.marketwatch.com/public/resources/MWimages/MW-BS558_pflond_MG_20140114165105.jpg',
    startDate: 'Feb 6',
    returnDate: 'Feb 13',
    vacationDays: 7,
    lowestPrice: 501,
    stops: 2
  },
  {
    key: 2,
    city: 'Dubai',
    state: '',
    country: 'United Arab Emirates',
    countryCode: 'UAE',
    code: 'DXB',
    image: 'https://www.arabianbusiness.com/sites/default/files/styles/full_img/public/images/2017/03/07/Dubai-skyline.jpg',
    startDate: 'Oct 2',
    returnDate: 'Oct 10',
    vacationDays: 8,
    lowestPrice: 882,
    stops: 1
  },
  {
    key: 3,
    city: 'Madrid',
    state: '',
    country: 'Spain',
    countryCode: 'ES',
    code: 'MAD',
    image: 'https://www.vinccihoteles.com/sites/default/files/styles/flexslider_full/public/madrid_0.jpg?itok=GXRm3YOp',
    startDate: 'Dec 1',
    returnDate: 'Dec 11',
    vacationDays: 10,
    lowestPrice: 472,
    stops: 1
  },
  {
    key: 4,
    city: 'Hong Kong',
    state: '',
    country: 'China',
    countryCode: 'CN',
    code: 'HKG',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/a7/8b/da/photo-by-traveling-photographe.jpg',
    startDate: 'Oct 26',
    returnDate: 'Nov 5',
    vacationDays: 10,
    lowestPrice: 695,
    stops: 2
  },
  {
    key: 5,
    city: 'Paris',
    state: '',
    country: 'France',
    countryCode: 'FR',
    code: 'CDG',
    image: 'https://cdn.theculturetrip.com/wp-content/uploads/2015/11/eur-france-paris.JPG',
    startDate: 'Jan 15',
    returnDate: 'Jan 22',
    vacationDays: 7,
    lowestPrice: 481,
    stops: 2
  },
  {
    key: 6,
    city: 'Orlando',
    fullState:'Florida',
    state: 'FL',
    country: 'United States',
    countryCode: 'US',
    code: 'MCO',
    image: 'https://fcda83403961100baa63-6b75d3a70c699e63772caac69eefc7e8.ssl.cf5.rackcdn.com/cdn_oCyjTVkfucZvZT3l7wPom3ehLGkPgB6N.jpg',
    startDate: 'Oct 20',
    returnDate: 'Oct 25',
    vacationDays: 5,
    lowestPrice: 39,
    stops: 0
  },
  {
    key: 7,
    city: 'Las Vegas',
    fullState:'Nevada',
    state: 'NV',
    country: 'United States',
    countryCode: 'US',
    code: 'LAS',
    image: 'https://i.ytimg.com/vi/AILjDaJ2gwc/maxresdefault.jpg',
    startDate: 'Oct 27',
    returnDate: 'Oct 31',
    vacationDays: 4,
    lowestPrice: 138,
    stops: 1
  },
  {
    key: 8,
    city: 'Los Angeles',
    fullState:'California',
    state: 'CA',
    country: 'United States',
    countryCode: 'US',
    code: 'LAX',
    image: 'http://embassynvisa.com/wp-content/uploads/2017/01/Los-Angeles-California-CA-800x500.jpg',
    startDate: 'Nov 10',
    returnDate: 'Nov 13',
    vacationDays: 3,
    lowestPrice: 162,
    stops: 1
  }

]

const stateOrCountry = (index) => {
let location;

if (destinations[index].state === ''){
  location = destinations[index].countryCode
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

const displayFeatured = () => {
let featuredDestinations =[];
let firstIndex = Math.floor(Math.random() *destinations.length);

let secondIndex = Math.floor(Math.random() * destinations.length);

while (secondIndex === firstIndex){
secondIndex = Math.floor(Math.random() * destinations.length);
}

let thirdIndex = Math.floor(Math.random() * destinations.length);

while (thirdIndex === firstIndex || thirdIndex === secondIndex){
thirdIndex = Math.floor(Math.random() * destinations.length);
}

let firstDestination = 
<View style ={styles.destinationContainer} key = {destinations[firstIndex].key}>
  <Image source = {{ uri: destinations[firstIndex].image}}
  style = {styles.destinationImage} />
  <View style ={styles.tripDescription}>
  <Text style ={styles.descriptionHeader}>
  {destinations[firstIndex].city}, {stateOrCountry(firstIndex)}
  </Text>
  <Text style = {styles.descriptionText}>
  {startLocation.code} {startLocation.city} to {destinations[firstIndex].code} {destinations[firstIndex].city}{"\n"}
  {destinations[firstIndex].startDate} - {destinations[firstIndex].returnDate} • {destinations[firstIndex].vacationDays} days
  </Text>
  <Text style ={styles.price}>
  ${destinations[firstIndex].lowestPrice}+
  </Text>
  {stopOrStops(firstIndex)}

  <View style = {styles.button}>
  <Button  onPress = {handlePress}
         title = "FIND FLIGHTS"
         color = "#FEFFFE"
      />
      </View>
  </View>
  </View>;

featuredDestinations.push(firstDestination);

let secondDestination = 
<View style ={styles.destinationContainer} key = {destinations[secondIndex].key} >
  <Image source = {{ uri: destinations[secondIndex].image}}
  style = {styles.destinationImage} />
  <View style ={styles.tripDescription}>
  <Text style ={styles.descriptionHeader}>
  {destinations[secondIndex].city}, {stateOrCountry(secondIndex)}
  </Text>
  <Text style = {styles.descriptionText}>
  {startLocation.code} {startLocation.city} to {destinations[secondIndex].code} {destinations[secondIndex].city}{"\n"}
  {destinations[secondIndex].startDate} - {destinations[secondIndex].returnDate} • {destinations[secondIndex].vacationDays} days
  </Text>
  <Text style ={styles.price}>
  ${destinations[secondIndex].lowestPrice}+
  </Text>
  {stopOrStops(secondIndex)}

  <View style = {styles.button}>
  <Button  onPress = {handlePress}
         title = "FIND FLIGHTS"
         color = "#FEFFFE"
      />
      </View>
  </View>
  </View>;

featuredDestinations.push(secondDestination);

let thirdDestination = 
<View style ={styles.destinationContainer} key = {destinations[thirdIndex].key}>
  <Image source = {{ uri: destinations[thirdIndex].image}}
  style = {styles.destinationImage} />
  <View style ={styles.tripDescription}>
  <Text style ={styles.descriptionHeader}>
  {destinations[thirdIndex].city}, {stateOrCountry(thirdIndex)}
  </Text>
  <Text style = {styles.descriptionText}>
  {startLocation.code} {startLocation.city} to {destinations[thirdIndex].code} {destinations[thirdIndex].city}{"\n"}
  {destinations[thirdIndex].startDate} - {destinations[thirdIndex].returnDate} • {destinations[thirdIndex].vacationDays} days
  </Text>
  <Text style ={styles.price}>
  ${destinations[thirdIndex].lowestPrice}+
  </Text>
  {stopOrStops(thirdIndex)}

  <View style = {styles.button}>
  <Button  onPress = {handlePress}
         title = "FIND FLIGHTS"
         color = "#FEFFFE"
      />
      </View>
  </View>
  </View>;
featuredDestinations.push(thirdDestination);

return featuredDestinations
}

return (
<View>
  <View style = {styles.containerMain}>
<Text style = {styles.header}>
Popular Destinations
</Text>

{displayFeatured()}
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
      height: 1200,
      backgroundColor: '#DAD2D8'
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    color: '#90708C',
    fontWeight: 'bold',
    fontSize: 20
  },
  destinationContainer: {
    marginTop: 10,
    backgroundColor: '#FEFFFE'

  },
  destinationImage :{
    width: 275, 
    height: 175,
  },
  tripDescription: {
    borderLeftWidth: 1,
    borderLeftColor: '#90708C',
    borderBottomWidth: 1,
    borderBottomColor: '#90708C',
    borderRightWidth: 1,
    borderRightColor: '#90708C'
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
  borderColor: '#DAD2D8',
  backgroundColor: '#233D4D',
  borderRadius: 10,
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