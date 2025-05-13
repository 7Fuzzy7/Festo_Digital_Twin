import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { fetchSensorById } from '../services/api';
import { Sensor } from '../types/sensor';
import { VictoryLine } from 'victory-native';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorDetail'>;

const SensorDetailScreen = ({ route }: Props) => {
  const { sensorId } = route.params;
  const [sensor, setSensor] = useState<Sensor | null>(null);

  useEffect(() => {
    loadSensor();
  }, []);

  const loadSensor = async () => {
    const data = await fetchSensorById(sensorId);
    setSensor(data);
  };

  if (!sensor) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sensor.name}</Text>
      <Text>Valor Atual: {sensor.value}</Text>
      <Text>Status: {sensor.status}</Text>
      <Text style={styles.subtitle}>Histórico</Text>
      <VictoryLine data={sensor.history.map((h) => ({ x: new Date(h.timestamp), y: h.value }))} style={{ data: { stroke: '#007AFF' } }} />
      <Button title="Atualizar" onPress={loadSensor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginTop: 20, marginBottom: 10 },
});

export default SensorDetailScreen;