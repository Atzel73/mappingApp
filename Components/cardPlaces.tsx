import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { places } from '../Objects/objectPlaces';
import { ScreenWidth } from '@rneui/base';

const CARD_WIDTH = ScreenWidth * 0.8;
const CONTAINER_PADDING_HORIZONTAL = 16;

export const targetPlaces = ({ onPlaceSelected }: { onPlaceSelected: (place: any) => void }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [chedule, getChedule] = useState([]);
  const handlePlacePress = (place: any) => {
    setSelectedPlace(place);
    onPlaceSelected(place);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: CONTAINER_PADDING_HORIZONTAL,
      }}
    >
      <View style={styles.container}>

        {places.map((place, index) => (
          console.log(place.servicios),
          <ScrollView>
            <TouchableOpacity key={index} style={styles.cardContainer} onPress={() => handlePlacePress(place)}>
              <View style={[styles.card, { backgroundColor: '#E8DAF4' }]}>
                <Card>
                  <Card.Image style={styles.image} source={{ uri: place.photo }} />
                  <Card.Title style={styles.infoMax}>{place.instituto}</Card.Title>
                  <Card.Divider />

                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Ubicacion: </Text>
                    {place.domicilio}
                  </Text>
                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Codigo Postal: </Text>
                    {place.codigoPostal.toString()}
                  </Text>
                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Numero de telefono: </Text>
                    {place.telefono.toString()}
                  </Text>
                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Horarios: </Text>
                    {place.horarios}
                  </Text>
                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Servicios: </Text>
                    {place.servicios}

                  </Text>
                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Costos: </Text>
                    {place.costos}
                  </Text>
                  <Text style={styles.info}>
                    <Text style={styles.infoMax}>Requisitos para recibir atención: </Text>
                    {place.requisitosAtencion}
                  </Text>

                </Card>
              </View>
            </TouchableOpacity>
          </ScrollView>

        ))}


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginRight: 10,
  },
  card: {
    width: CARD_WIDTH,
    height: 'auto',
    borderRadius: 10,
    overflow: 'hidden', 
  },
  cardContent: {
    padding: 10,
    maxHeight: 200, 
  },
  image: {
    alignSelf: 'center',
    paddingTop: 10,
    marginEnd: 10,
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  info: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'justify',
  },
  infoMax: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'justify',
    fontFamily: 'arial',
    color: 'purple',
    fontWeight: 'bold',
  },
});
