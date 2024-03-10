import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { masters } from '../Objects/objectPsy';

export const Target = () => {
  return (
    <>
      <ScrollView >
        <View style={styles.container} >
          {masters.map(master => {
            return (
              <View style={styles.user} >
                <Card>
                  <Card.Image
                    style={styles.image}
                    source={{
                      uri: master.photo,
                    }}
                  />
                  <Card.Title>{master.name}</Card.Title>
                  <Card.Divider />
                  <Text style={styles.info}> Edad: {master.age}</Text>
                  <Text style={styles.info}> Ubicacion: {master.location}</Text>
                  <Text style={styles.info}> Calle: {master.street}</Text>
                  <Text style={styles.info}> Titulo: {master.profession}</Text>
                  <Card.Divider />
                </Card>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#E8DAF4' 
  },
user: {
  flexDirection: 'column',
  marginBottom: 6,
},
  card: {
    marginRight: 10,
    width: 150,
  },
  image: {
    alignSelf: 'center',
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
});
