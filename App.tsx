import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { mapp } from './screens/mapLocal';
import { targetPlaces } from './Components/cardPlaces';
import { places } from './Objects/objectPlaces';

function App() {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);

  const handlePlaceSelected = (place: any) => {
    setSelectedMarker(place);
    setMarkers([...markers, {id: markers.length + 1, ...place}]);
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

export default App;
