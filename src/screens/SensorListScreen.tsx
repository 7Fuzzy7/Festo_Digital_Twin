import { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { fetchSensors } from '../services/api';
import { Sensor } from '../types/sensor';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorList'>;

const SensorListScreen = ({ navigation }: Props) => {
  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    loadSensors();
  }, []);

  const loadSensors = async () => {
    const data = await fetchSensors();
    setSensors(data);
  };

  const renderItem = ({ item }: { item: Sensor }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('SensorDetail', { sensorId: item.id })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text>Valor: {item.value}</Text>
      <Text style={item.status === 'OK' ? styles.ok : styles.alert}>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={sensors} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.settingsText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  name: { fontSize: 18, fontWeight: 'bold' },
  ok: { color: 'green' },
  alert: { color: 'red' },
  settingsButton: { padding: 15, backgroundColor: '#007AFF', alignItems: 'center' },
  settingsText: { color: '#fff', fontSize: 16 },
});

export default SensorListScreen;