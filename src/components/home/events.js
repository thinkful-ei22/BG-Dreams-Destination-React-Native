import React, {Component} from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView} from 'react-native'
import Navigation from './Navigation'
import Header from './Header'
class Events extends Component{

   handlePress = () => false

  events = 
   [
     {
       key: 0,
       name: 'Milan 2019',
       location: 'Milan & Venice, Italy',
       image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/e4/ec/venice-day-trip-from.jpg',
       startDate: 'June 1',
       returnDate: 'June 8',
       features: [
         'Round trip economy class airfare to/from JFK to MXP airport',
         'Airline fuel surcharges',
         '6 Nights at Starhotel Rosa Grand, Milan Superior Room',
         'Breakfast daily',
         'Travel Divas® “Red” Welcome Dinner',
         'Milan Panoramic & Walking Tour',
         'Entrance to La Scala Museum',
         'Entrance to Dumom',
         'Serravalle Outlet Mall Excursion',
         'Private Boat on Lake Como',
         'Free Time in Bellagio',
         'Venice Day Excursion',
         'Entrance to Doges Palace',
         'Entrance to St. Marks Basilica',
         'One Day at leisure to explore on your own',
         'Dreams Destination\'s Cocktails & Conversations Night Out',
         'Farewell Italian Dinner',
         'Dreams Destination Gift Package',
         'Dreams Destination hostess on-site',
         'All transfers with private bus'
       ],
       singlePrice: 5409,
       doublePrice: 3909,
     },
     {
      key: 1,
      name: 'Egypt 2019',
      location: 'Cairo, Luxor, & Aswan',
      image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/26/16/egypt-ii.jpg?w968',
      startDate: 'March 4',
      returnDate: 'March 12',
      features: [
        'Roundtrip Airfare from ATL to Cairo',
        'Intraflight from Cairo to Aswan',
        'Intraflight from Luxor to Cairo',
        '7 night accommodation',
        '4 nights at Four Seasons First Residence',
        '3 nights cruise aboard MS Sonesta St. George Nile Cruise',
        'Egyptian Museum',
        'Old Cairo & Ben Ezra Synagogue',
        'Khan el-Khalili Bazaar',
        'Great Pyramids & Sphinx',
        'Unfinished Obelisk & Temple of Philae',
        'Kom Ombo Temple & Edfu Temple',
        'Valley of the Kings & Temple of Queen Hatshepsut',
        'Karnak Temple & Luxor Temple',
        'Complimentary Camel Ride',
        'Naguib Mahfouz Tour',
        'All hotel taxes',
        'All transfers with air-conditioned vehicles',
        '14 meals: 6 breakfasts, 5 lunches, and 3 dinners',
        'Sightseeing as per itinerary',
        'Service of local English speaking licensed Egyptologist',
        'Dreams Destination Staff On-Site'
      ],
      singlePrice: 6399,
      doublePrice: 4499,
    },
    {
      key: 2,
      name: 'St. Lucia 2019',
      location: 'St. Lucia',
      image: 'http://wanderingtrader.com/wp-content/uploads/2017/01/Things-to-know-before-visiting-St-Lucia.jpg',
      startDate: 'April 4',
      returnDate: 'April 8',
      features: [
        '5 Days/4 Nights at Royalton St. Lucia',
        'All Inclusive including alcoholic beverages',
        'Travel Divas Meet & Greet',
        'Relaxing Pool Day',
        'Group Photo Session',
        'One Group Excursion (additional cost, to be announced)',
        'Farewell Cocktail Hour',
        'Dreams Destination Gift Bag',
        'Dreams Destination Hostess on-site'
      ],
      singlePrice: 2329,
      doublePrice: 1599,
    }
   ]

   mapEventDetails = (index) => {
    let mappedEventDetails =[]
    for (let i=0; i < this.events[index].features.length; i++){
      mappedEventDetails.push(
        <Text key = {i} style={styles.packageDetails}>
          • {this.events[index].features[i]} {"\n"}
        </Text>
      )
    }
    return mappedEventDetails
   }
  
   mapEvents = () => {
let mappedEvents = []
     for (let i=0; i < this.events.length; i++){
       mappedEvents.push(
         <View style = {styles.eventContainer} key = {this.events[i].key}>
         <Image source = {{uri: this.events[i].image}} style = {styles.eventImage} />
         <View style = {styles.eventDescription}>
         <Text style = {styles.eventDate}>
           {this.events[i].startDate} - {this.events[i].returnDate}
         </Text>
         <Text style={styles.eventName}>
           {this.events[i].name}
         </Text>
         <Text style={styles.eventLocation}>
           {this.events[i].location}
         </Text>
         <Text style={styles.packageHeader} >
           Trip Package includes:
         </Text>
         <View style= {styles.packageDescription}>
         {this.mapEventDetails(i)}
         </View>
         <Text style = {styles.packagePrice}>
         Single: ${this.events[i].singlePrice} per person | Double: ${this.events[i].doublePrice} per person
         </Text>
         <View style = {styles.button}>
         <Button  onPress = {this.handlePress}
             title = "BOOK NOW"
             color = "#FEFFFE"
          />
          </View>
         </View>
         </View>

       )
     }
     return mappedEvents
   }
 
render(){
return (
<ScrollView>
<Header/>
<Navigation />
  <View style = {styles.containerMain}>
<Text style = {styles.header}>
View All Events
</Text>
{this.mapEvents()}
</View>
</ScrollView>
)
}
}

export default Events


const styles = StyleSheet.create ({
  containerMain: {
    flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 3400,
      backgroundColor: '#DAD2D8'
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    color: '#90708C',
    fontWeight: 'bold',
    fontSize: 20
  },
  eventContainer: {
    marginTop: 20,
    backgroundColor: '#FEFFFE'
  },
  eventImage:{
    width: 350, 
    height: 250,
  },
  eventDescription: {
    
    borderLeftWidth: 1,
    borderLeftColor: '#90708C',
    borderBottomWidth: 1,
    borderBottomColor: '#90708C',
    borderRightWidth: 1,
    borderRightColor: '#90708C',
    width: 350
  },
  eventDate: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  eventName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  eventLocation: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center'
  },
  packageHeader: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  packageDetails:{
    textAlign: 'center'
  },
  packagePrice: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12
  },
  button: {
    borderWidth: 1,
    borderColor: '#DAD2D8',
    borderRadius: 10,
    backgroundColor: '#233D4D',
    width: 150,
    left: 100,
    marginTop: 10,
    marginBottom: 10
    }
})