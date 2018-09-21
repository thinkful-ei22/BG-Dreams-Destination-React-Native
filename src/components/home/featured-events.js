import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet} from 'react-native'


const FeaturedEvent = (props) => {
  const handlePress = () => false


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
        'Panoramic walking tour starting at Sforza Castle, proceeding to Duomo Square and then Victor Emmanuel Galleria',
        'Outlet Shopping at Serravalle Outlet Mall with over 300 named designers such as Prada, Dolce & Gabbana and Gucci with up to over 70% off',
        'Boat Tour on Lake Como',
        'Afternoon in the village of Bellagio',
        'Day Tour to Venice',
        'Dreams Destination Exclusive Night Out'
      ]
    },
    {
     key: 1,
     name: 'Egypt 2019',
     location: 'Cairo, Luxor, & Aswan',
     image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/26/16/egypt-ii.jpg?w968',
     startDate: 'March 4',
     returnDate: 'March 12',
     features: [
      'Egyptian Museum',
      'Old Cairo & Ben Ezra Synagogue',
      'Khan el-Khalili Bazaar',
      'Great Pyramids & Sphinx',
      'Unfinished Obelisk & Temple of Philae',
      'Kom Ombo Temple & Edfu Temple',
      'Valley of the Kings & Temple of Queen Hatshipsut',
      'Karnak Temple & Luxor Temple'
     ]
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

const displayFeatured = () => {
let randomIndex = Math.floor(Math.random() *events.length);

let featuredEvent = 
<View style = {styles.eventContainer} key = {this.events[randomIndex].key}>
<Image source = {{uri: this.events[randomIndex].image}} style = {styles.eventImage} />
<View style = {styles.eventDescription}>
<Text style = {styles.eventDate}>
  {this.events[randomIndex].startDate} - {this.events[randomIndex].returnDate}
</Text>
<Text style={styles.eventName}>
  {this.events[randomIndex].name}
</Text>
<Text style={styles.eventLocation}>
  {this.events[randomIndex].location}
</Text>
<Text style={styles.packageHeader} >
  Trip Package includes:
</Text>
<View style= {styles.packageDescription}>
{this.mapEventDetails(randomIndex)}
</View>

<View style = {styles.button}>
<Button  onPress = {handlePress}
    title = "BOOK NOW"
    color = "#FEFFFE"
 />
 </View>
</View>
</View>;

return featuredEvent
}

return (
<View>
  <View style = {styles.containerMain}>
<Text style = {styles.header}>
Featured Event
</Text>

{displayFeatured()}

</View>
</View>
)
}

export default FeaturedEvent


const styles = StyleSheet.create ({
  containerMain: {
    flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
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
  packageHeader: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
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
  packageDetails:{
    textAlign: 'center'
  },
  eventDate: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
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
  stopInfo: {
    marginLeft: 45
  },
  button: {
    borderWidth: 1,
    borderColor: '#DAD2D8',
    backgroundColor: '#233D4D',
    borderRadius: 10,
    width: 150,
    left: 100,
    marginTop: 10,
    marginBottom: 10
    }
})