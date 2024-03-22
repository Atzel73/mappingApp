import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { mapp } from './mapLocal';
import { targetPlaces } from '../Components/cardPlaces';
import { places } from '../Objects/objectPlaces';


//Aqui se importa el contenido de targetPlaces: son las tarjetas de los consultorios
//Se importa tambien el mapa


export const MyTabs = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handlePlaceSelected = place => {
    setSelectedMarker(place);
    setMarkers(prevMarkers => [
      ...prevMarkers,
      {
        id: prevMarkers.length + 1,
        coordinate: place.coordinate,
        title: place.instituto,
      },
    ]);
  };

  return (
    <View style={styles.mapContainer}>
      {mapp({selectedMarker, markers})}
      {targetPlaces({onPlaceSelected: handlePlaceSelected})}
    </View>
  );
}


const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
});
