import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { masters } from '../Objects/objectPsy';

export const Target = () => {
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {masters.map(master => {
            return (
              <Card>
                <Card.Image
                  style={styles.image}
                  source={{
                    uri: master.photo,
                  }}
                />
                <Card.Title>{master.name}</Card.Title>
                <Text style={styles.info}> Edad: {master.age}</Text>
                <Text style={styles.info}>Ubicacion: {master.location}</Text>
                <Text style={styles.info}> Calle: {master.street}</Text>
                <Text style={styles.info}> Titulo: {master.profession}</Text>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    marginRight: 10,
    width: 150, 
  },
  image: {
    width: '100%',
    height: 150, 
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    marginTop: 4,
  },
});
