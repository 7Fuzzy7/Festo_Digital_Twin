import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorList'>;

const mockSensors = [
  { id: '1', name: 'Sensor de Pressão' },
  { id: '2', name: 'Sensor de Fluxo' },
  { id: '3', name: 'Sensor de Temperatura' },
];

export default function SensorListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* 🔧 Novo botão para o Atuador Festo */}
      <TouchableOpacity
        style={[styles.item, styles.atuadorButton]}
        onPress={() => navigation.navigate('Actuator')}
      >
        <Text style={styles.atuadorText}>🔧 Atuador Festo</Text>
      </TouchableOpacity>

      <FlatList
        data={mockSensors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('SensorDetail', { id: item.id, name: item.name })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    padding: 16,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 5,
  },
  atuadorButton: {
    backgroundColor: '#004080',
    alignItems: 'center',
  },
  atuadorText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
