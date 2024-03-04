/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {mapp} from './screens/mapLocal';

import {enableLatestRenderer} from 'react-native-maps';

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { getLocation } from './functions/geoLocation';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  enableLatestRenderer();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.text}></Text>
        </View>
      </ScrollView>
      <View style={styles.mapContainer}>
        {mapp()}
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  text : {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mapContainer: {
    //flex: 1, // Ocupar todo el espacio disponible
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default App;
