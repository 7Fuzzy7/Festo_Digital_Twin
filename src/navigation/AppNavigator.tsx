import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SensorListScreen from '../screens/SensorListScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Sensor } from '../types/sensor';

export type RootStackParamList = {
  Splash: undefined;
  SensorList: undefined;
  SensorDetail: { sensorId: number };
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SensorList" component={SensorListScreen} options={{ title: 'Sensores' }} />
        <Stack.Screen name="SensorDetail" component={SensorDetailScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;