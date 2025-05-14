import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { fetchSensorById } from '../services/api';
import { Sensor } from '../types/sensor';
import SensorChart from '../components/SensorChart';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorDetail'>;

export default function SensorDetailScreen({ route }: Props) {
  const [sensor, setSensor] = useState<Sensor | null>(null);
  const { id } = route.params;

  useEffect(() => {
    fetchSensorById(id).then(setSensor);
  }, [id]);

  if (!sensor) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sensor.name}</Text>
      <SensorChart data={sensor.history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});
