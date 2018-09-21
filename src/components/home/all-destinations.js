import React, { Component } from 'react';
import { Text, View, Image,TextInput, Button, StyleSheet, ScrollView} from 'react-native'
import Navigation from './Navigation'
import Header from './Header'
class AllDestinations extends Component{

  state = {
    searchInput: ''
  }
   handlePress = () => false

startLocation =
{
  city: 'Atlanta',
  state: 'GA',
  country: 'United States',
  code: 'ATL'
}

 destinations = 
[
  {

    city: 'Mumbai',
    fullState: '',
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
    city: 'London',
    fullState:'',
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
    city: 'Dubai',
    fullState:'',
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
    city: 'Madrid',
    fullState:'',
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
    city: 'Hong Kong',
    fullState:'',
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
    city: 'Paris',
    fullState:'',
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



 stateOrCountry = (locations, index) => {
let location;

if (locations[index].state === ''){
  location = locations[index].countryCode
}
else {
  location = locations[index].state
}
return location
}

stopOrStops = (locations, index) => {
  let stopInfo;
  if (locations[index].stops === 0){
    stopInfo = <Text style ={styles.stopInfo}>
    Nonstop
    </Text>
  }
  else if (locations[index].stops > 1){
    stopInfo = <Text style ={styles.stopInfo}>
      {locations[index].stops} stops
    </Text>
  }
  else {
    stopInfo = <Text style ={styles.stopInfo}>
    {locations[index].stops} stop
  </Text>
  }
return stopInfo
}


searchDestinations = (input) => {

  console.log(input + '<<input')

  filteredDestinations = this.destinations

  if (input !== ''){
  let filteredCityDestinations= this.destinations.filter(destination => destination.city.toLowerCase().startsWith(input.toLowerCase()))

  let filteredStateDestinations= this.destinations.filter(destination => destination.fullState.toLowerCase().startsWith(input.toLowerCase()))

  let filteredCountryDestinations= this.destinations.filter(destination => destination.country.toLowerCase().startsWith(input.toLowerCase()))



  filteredDestinations = filteredCityDestinations.concat(filteredCountryDestinations, filteredStateDestinations)
}

return filteredDestinations
}





render(){
  viewAll = this.searchDestinations(this.state.searchInput).map((destination, index) => {
    console.log(destination)
      return (
    <View style = {styles.countryContainer} key ={index}>
    <Image source = {{uri: destination.image}} style = {styles.tripImage}/>
    <View style = {styles.tripDescription}>
    <Text style ={styles.descriptionHeader}>
      {destination.city}, {this.stateOrCountry(this.searchDestinations(this.state.searchInput),index)}
      </Text>
      <Text style = {styles.descriptionText}>
      {this.startLocation.code} {this.startLocation.city} to {destination.code} {destination.city}{"\n"}
      {destination.startDate} - {destination.returnDate} • {destination.vacationDays} days
      </Text>
      <Text style ={styles.price}>
      ${destination.lowestPrice}+
      </Text>
      {this.stopOrStops(this.searchDestinations(this.state.searchInput),index)}
      <View style = {styles.button}>
      <Button  onPress = {this.handlePress}
             title = "FIND FLIGHTS"
             color = "#FEFFFE"
          />
          </View>
    </View>
    </View>
      )
    }) 
return (
<ScrollView>
<Header/>
<Navigation />
  <View style = {styles.containerMain}>
  <Text style = {styles.searchTitle}>
   Destination Search 
  </Text>
  <TextInput style = {styles.input}
  underlineColorAndroid = "transparent"
  placeholder = "Search by city, state, or country"
  placeholderTextColor = "#49306B"
  autoCapitalize = "none"
  onChangeText = {(text) => {
    console.log(text + ' <<<text')
    this.setState({searchInput: text}, function (){
      this.searchDestinations(this.state.searchInput)
    })}
   } />

<Text style = {styles.header}>
View Destinations
</Text>
{viewAll}
</View>
</ScrollView>
)
}
}

export default AllDestinations


const styles = StyleSheet.create ({
  containerMain: {
    flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 3300,
      backgroundColor: '#DAD2D8'
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    color: '#90708C',
    fontWeight: 'bold',
    fontSize: 20
  },
  searchTitle:{
    textAlign: 'center',
    fontWeight: 'bold',
top: 15,
marginBottom: 5,
color: '#90708C'
  },

  input: {
    margin: 15,
    height: 40,
    borderColor: '#90708C',
    borderWidth: 1,
    backgroundColor: '#FEFFFE',
    width: 300
 },
  countryContainer: {
    marginTop: 10,
    backgroundColor: '#FEFFFE'

  },
  tripImage:{
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
  borderColor: 'black',
  backgroundColor: '#233D4D',
  borderRadius: 10,
  width: 150,
  left: 110,
  bottom: 45
  },
  stopInfo: {
    marginLeft: 45
  }

})