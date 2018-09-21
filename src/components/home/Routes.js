import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home'
import AllDestinations from './all-destinations'
import Events from './events'
const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "allDestinations" component = {AllDestinations} title = "View All Destinations" />
         <Scene key = "events" component = {Events} title = "Events" />
      </Scene>
   </Router>
)
export default Routes