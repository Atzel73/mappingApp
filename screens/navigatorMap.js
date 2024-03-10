import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { mapp } from './screens/mapLocal';
import { targetPlaces } from './Components/cardPlaces';
import { places } from './Objects/objectPlaces';





const Tab = createBottomTabNavigator();

function MyTabs() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handlePlaceSelected = place => {
    setSelectedMarker(place);
    setMarkers([
      ...markers,
      {
        id: markers.length + 1,
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

export default MyTabs;