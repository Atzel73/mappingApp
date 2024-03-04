// En tu archivo donde está definida la función, por ejemplo, MapComponent.tsx
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export const mapp =  () => {
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
        showsUserLocation = {true}
        showsMyLocationButton = {true}
      >
        <Marker 
        coordinate={{
          
          latitude: 24.02799, 
          longitude: -104.65242,
        }}
        
        image={require('../assets/marker/mark.png')}
        title="Salud DIgna" 
        ></Marker>
        <Marker 
          coordinate={{
            latitude: 24.034448463319098, 
            longitude: -104.66188153014127,
          }}
          image={require('../assets/marker/mark.png')}
          title="Centro neurologico"
          description="Dr. Antonio de Jesus"
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


        <Marker 
          coordinate={{
            latitude: 24.042438266751862, 
            longitude: -104.63741197616963,
          }}
          image={require('../assets/marker/mark.png')}
          title="Psique centro de formación y Psicoterapia"
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
