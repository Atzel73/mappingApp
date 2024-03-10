import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabs } from './screens/navigatorMap';
import { Target } from './Components/cardPsy';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator>

        <Tab.Screen name="Lugares" component={MyTabs} />
        
        
      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default App;
