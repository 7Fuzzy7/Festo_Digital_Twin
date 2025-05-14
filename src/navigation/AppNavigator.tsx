// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SensorListScreen from '../screens/SensorListScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen';

export type RootStackParamList = {
  Splash: undefined;
  SensorList: undefined;
  SensorDetail: { id: string; name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ title: 'Digital Twin FESTO' }}
        />
        <Stack.Screen
          name="SensorList"
          component={SensorListScreen}
          options={{ title: 'Sensores' }}
        />
        <Stack.Screen
          name="SensorDetail"
          component={SensorDetailScreen}
          options={({ route }) => ({
            title: route.params.name, // 👉 Exibe o nome do sensor no título
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
