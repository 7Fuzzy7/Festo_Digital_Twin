import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { LinearGradient } from 'expo-linear-gradient';
import SensorChart from '../components/SensorChart';
import SensorInfo from '../components/SensorInfo';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorDetail'>;

export default function SensorDetailScreen({ route, navigation }: Props) {
  const { id, name } = route.params;

  // Dados simulados para o gráfico
  const historyData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

  // Mock de dados técnicos do sensor
  const status = Math.random() > 0.5 ? 'Ativo' : 'Inativo';
  const lastUpdated = '15/05/2025 - 20:45';

  return (
    <LinearGradient colors={['#001F3F', '#003366']} style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <SensorChart data={historyData} />

      <SensorInfo
        id={id}
        name={name}
        status={status}
        lastUpdated={lastUpdated}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#001F3F',
    fontWeight: 'bold',
  },
});
