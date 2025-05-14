// src/screens/SensorDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import SensorChart from '../components/SensorChart';
import SensorInfo from '../components/SensorInfo';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorDetail'>;

export default function SensorDetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const [sensorData, setSensorData] = useState<number[]>([]);
  const [status, setStatus] = useState<string>('Ativo');

  useEffect(() => {
    // Simular histórico de dados
    const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setSensorData(data);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>◀ Voltar</Text>
      </TouchableOpacity>

      {/* Gráfico */}
      <SensorChart data={sensorData} />

      {/* Informações do sensor */}
      <SensorInfo
        id={id}
        name={`Sensor #${id}`}
        status={status}
        lastUpdated={new Date().toLocaleString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001F3F',
  },
  backButton: {
    marginTop: 20,
    marginLeft: 16,
    backgroundColor: '#0052cc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
