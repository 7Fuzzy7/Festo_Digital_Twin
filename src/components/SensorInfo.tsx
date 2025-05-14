// src/components/SensorInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SensorInfoProps {
  id: string;
  name: string;
  status: string;
  lastUpdated: string;
}

export default function SensorInfo({ id, name, status, lastUpdated }: SensorInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo do Sensor:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>ID do Sensor:</Text>
      <Text style={styles.value}>{id}</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={[styles.value, { color: status === 'Ativo' ? '#0f0' : '#f00' }]}>
        {status}
      </Text>

      <Text style={styles.label}>Última Atualização:</Text>
      <Text style={styles.value}>{lastUpdated}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff10',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    color: '#ccc',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
});
