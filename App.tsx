import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { mapp } from './screens/mapLocal';
import { places} from './Objects/objectPlaces';
import { targetPlaces } from './Components/cardPlaces';

function App() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handlePlaceSelected = (place: any) => {
    setSelectedMarker(place);
    // Agrega el marcador al estado de marcadores
    setMarkers([...markers, { id: markers.length + 1, ...place }]);
  };

  return (
    <View style={styles.mapContainer}>
      {mapp(selectedMarker)} {/* Pasa el lugar seleccionado al mapa */}
      <targetPlaces onPlaceSelected={handlePlaceSelected} />
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
