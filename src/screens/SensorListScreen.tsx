import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'SensorList'>;

const mockSensors = [
    { id: '1', name: 'Sensor de Pressão' },
    { id: '2', name: 'Sensor de Fluxo' },
    { id: '3', name: 'Sensor de Temperatura' },
];

export default function SensorListScreen({ navigation }: Props) {
    return (
        <LinearGradient
            colors={['#001F3F', '#003366']}
            style={styles.container}
        >
            <Text style={styles.title}>Selecione um Sensor</Text>
            <FlatList
                data={mockSensors}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('SensorDetail', { id: item.id, name: item.name })}
                    >
                        <Text style={styles.cardText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
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
    listContent: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#003366',
        textAlign: 'center',
    },
});
