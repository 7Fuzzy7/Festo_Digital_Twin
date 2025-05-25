import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ActuatorAnimation from '../components/ActuatorAnimation';

const mockSensors = [
  { id: '1', name: 'Sensor de Pressão' },
  { id: '2', name: 'Sensor de Fluxo' },
  { id: '3', name: 'Sensor de Temperatura' },
];

export default function ActuatorScreen({ navigation }: any) {
  return (
    <LinearGradient colors={['#001F3F', '#003366']} style={styles.container}>
      <Text style={styles.title}>Atuador FESTO</Text>

      {/* 🔵 Simulação do atuador */}
      <ActuatorAnimation />

      <Text style={styles.subtitle}>Sensores conectados:</Text>

      <FlatList
        data={mockSensors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('SensorDetail', { id: item.id, name: item.name })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff20',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
});
