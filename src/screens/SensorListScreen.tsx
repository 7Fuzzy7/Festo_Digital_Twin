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
      <FlatList
        data={mockSensors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('SensorDetail', { id: item.id })}
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
  item: { padding: 16, backgroundColor: '#eee', marginBottom: 10, borderRadius: 5 },
});
