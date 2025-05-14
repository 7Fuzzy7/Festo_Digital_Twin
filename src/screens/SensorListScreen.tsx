// src/screens/SensorListScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorList'>;

const mockSensors = [
  { id: '1', name: 'Sensor de Pressão' },
  { id: '2', name: 'Sensor de Fluxo' },
  { id: '3', name: 'Sensor de Temperatura' },
];

export default function SensorListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensores</Text>
      <FlatList
        data={mockSensors}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item, index }) => (
          <Animated.View entering={FadeInDown.delay(index * 100).duration(500)}>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
              ]}
              onPress={() => navigation.navigate('SensorDetail', { id: item.id, name: item.name })}
            >
              <Text style={styles.cardText}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={24} color="#007BFF" />
            </Pressable>
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007BFF',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});
