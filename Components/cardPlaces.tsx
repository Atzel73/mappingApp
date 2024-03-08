import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { places } from '../Objects/objectPlaces';
import { ScreenWidth } from '@rneui/base';
import { Animated } from 'react-native-maps';

const CARD_WIDTH = ScreenWidth * 0.9;


export const targetPlaces = ({
  onPlaceSelected,
}: {
  onPlaceSelected: (place: any) => void;
}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlacePress = (place: any) => {
    setSelectedPlace(place);
    onPlaceSelected(place);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {places.map((place, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => handlePlacePress(place)}>
            <Card>
              <Card.Image style={styles.image} source={{uri: place.photo}} />
              <Card.Title style={styles.infoMax}>{place.instituto}</Card.Title>
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
                <Text style={styles.infoMax}>Costos: </Text>
                {place.costos}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.infoMax}>
                  Requisitos para recibir atencion:{' '}
                </Text>
                {place.requisitosAtencion}
              </Text>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  cardContainer: {
    marginRight: 10,
  },
  card: {
    width: CARD_WIDTH,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  infoMax: {
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
    fontFamily: 'arial',
    color: 'purple',
    fontWeight: 'bold',
  },
});

