import { View, Image, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Button title="Começar" onPress={() => navigation.navigate('SensorList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 200, height: 200, marginBottom: 20 },
});

export default SplashScreen;