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

  const handlePlacePress = place => {
    setSelectedPlace(place);
    onPlaceSelected(place); // Llama a la función externa con el lugar seleccionado
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {places.map((place, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContainer}
            onPress={() => handlePlacePress(place)} // Maneja la presión de la tarjeta
          >
            <Card>{/* Contenido de la tarjeta */}</Card>
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

