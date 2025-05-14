import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SensorListScreen from '../screens/SensorListScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen';

export type RootStackParamList = {
  Splash: undefined;
  SensorList: undefined;
  SensorDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SensorList" component={SensorListScreen} />
        <Stack.Screen name="SensorDetail" component={SensorDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
