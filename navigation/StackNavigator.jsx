import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TabBar from './TabBar';


const Stack = createNativeStackNavigator();
const appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabBar" component={TabBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default appnavigation