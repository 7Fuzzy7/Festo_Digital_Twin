import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import SensorListScreen from '../screens/SensorListScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen';
import ActuatorScreen from '../screens/ActuatorScreen';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  SensorList: undefined;
  SensorDetail: { id: string; name: string };
  Actuator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); // ✅ ESTA LINHA É ESSENCIAL

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SensorList" component={SensorListScreen} />
        <Stack.Screen name="SensorDetail" component={SensorDetailScreen} />
        <Stack.Screen name="Actuator" component={ActuatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
