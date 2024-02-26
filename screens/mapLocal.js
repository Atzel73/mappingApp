// En tu archivo donde está definida la función, por ejemplo, MapComponent.tsx
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';


export const mapp = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker 
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          image={require('../assets/marker/mark.png')}
          title="test"
          description="test description"
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Favorite Place</Text>
                <Text style={styles.description}>This is a description</Text>
                <Image style={styles.image} source={require('../assets/banners/banner.jpg')} />
              </View>
              <View style={styles.arrowBorder}></View>
              <View style={styles.arrow}></View>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  image:{
    width: 120,
    height: 80,
  },
  arrow:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder:{
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
  name:{
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
    display: 'flex',
    
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
