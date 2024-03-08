import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export const mapp = ({ selectedMarker, markers }) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          
          latitude: 24.02799, 
          longitude: -104.65242,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >

        {/* Marcador seleccionado */}
        {selectedMarker && (
          <Marker
            coordinate={{
              latitude: selectedMarker.latitude,
              longitude: selectedMarker.longitude,
            }}
            title={selectedMarker.instituto}
          />
        )}

        {/* Marcadores adicionales */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.instituto}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 80,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  description: {
    fontSize: 15,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 20,
    width: 260,
  },
  container: {
    height: 400,
    width: 400,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  map: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
