// src/screens/SensorDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import SensorChart from '../components/SensorChart';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorDetail'>;

const generateRandomValues = () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

export default function SensorDetailScreen({ route }: Props) {
  const { id, name } = route.params;
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    setValues(generateRandomValues());
  }, [id]);

  const calculateAverage = (arr: number[]) =>
    arr.reduce((a, b) => a + b, 0) / arr.length;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      {/* Novo componente gráfico */}
      {values.length > 0 && <SensorChart data={values} />}

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Último Valor:</Text>
        <Text style={styles.infoValue}>{values[values.length - 1]}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Média dos Valores:</Text>
        <Text style={styles.infoValue}>
          {values.length > 0 ? calculateAverage(values).toFixed(2) : 'N/A'}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Valor Máximo:</Text>
        <Text style={styles.infoValue}>
          {values.length > 0 ? Math.max(...values) : 'N/A'}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Valor Mínimo:</Text>
        <Text style={styles.infoValue}>
          {values.length > 0 ? Math.min(...values) : 'N/A'}
        </Text>
      </View>

      <View style={styles.historyBox}>
        <Text style={styles.historyTitle}>Histórico de Valores:</Text>
        <Text style={styles.historyText}>{values.join(', ')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: { fontSize: 16, fontWeight: '600', color: '#555' },
  infoValue: { fontSize: 18, fontWeight: 'bold', color: '#000', marginTop: 4 },
  historyBox: { marginTop: 20 },
  historyTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  historyText: { fontSize: 14, color: '#333' },
});
