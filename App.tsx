import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { mapp } from './screens/mapLocal';
import { targetPlaces } from './Components/cardPlaces';
import { places } from './Objects/objectPlaces';


import { Target } from './Components/cardPsy';
import  MyTabs  from './screens/navigatorMap';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();


function App() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Lugares" component={MyTabs} />
      <Tab.Screen name="Doctores" component={Target} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
