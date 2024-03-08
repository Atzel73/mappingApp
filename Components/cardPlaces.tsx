import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { places } from '../Objects/objectPlaces';
import { ScreenWidth } from '@rneui/base';

const CARD_WIDTH = ScreenWidth * 0.9;
const SPACE_FOR_CARD_INSET = ScreenWidth * 0.1 -10;
export const  targetPlaces = () => {
    return( 
        <>
        
      <ScrollView horizontal 
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      style={styles.chipView}
      contentInset={{
        top:0,
        left:0,
        bottom:0,
        right:0,

      }}
      snapToInterval={CARD_WIDTH + 20}
      
      snapToAlignment='center'
>
        <View style={styles.container}>
            {places.map(place => {
                return(
                  <TouchableOpacity style={styles.chipTouch}>
                  <ScrollView >
                    <Card>
                        <Card.Image
                  style={styles.image}
                  source={{
                    uri: place.photo,
                  }}
                />
                <Card.Title style={styles.infoMax}>{place.instituto}</Card.Title>
                <Text style={styles.info}> <Text style={styles.infoMax}>Ubicacion: </Text>{place.domicilio}</Text>
                <Text style={styles.info}> <Text style={styles.infoMax}>Codigo Postal: </Text>{place.codigoPostal.toString()}</Text>
                <Text style={styles.info}> <Text style={styles.infoMax}>Numero de telefono: </Text>{place.telefono.toString()}</Text>
                <Text style={styles.info}> <Text style={styles.infoMax}>Horarios: </Text>{place.horarios}</Text>
                
                <Text style={styles.info}> <Text style={styles.infoMax}>Costos: </Text>{place.costos}</Text>
                <Text style={styles.info}> <Text style={styles.infoMax}>Requisitos para recibir atencion: </Text>{place.requisitosAtencion}</Text>
                    </Card>
                    </ScrollView>
                    </TouchableOpacity>
                );
            })}
        </View>
      </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
  chipTouch:{
    flexDirection: 'row',
    borderRadius:20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
  },
  chipView: {
    position: 'absolute',
    paddingHorizontal: 10,  
    },
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    card: {
      marginRight: 10,
      width: 150, 
    },
    image: {
      width: '50%',
      height: 150, 
      marginBottom: 8,
    },
    info: {
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
    },
    
    infoMax: {
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
      fontFamily: 'arial',
      color: 'purple',
    },
  });
  