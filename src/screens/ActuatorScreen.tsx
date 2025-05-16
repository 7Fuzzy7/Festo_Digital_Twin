// continue no mesmo arquivo ActuatorScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ActuatorScreen() {
  // 🔧 Dados simulados
  const position = '12.5 cm';
  const pressure = '5.2 bar';
  const status = 'Ativo';
  const lastUpdate = '15/05/2025 20:45';

  return (
    <LinearGradient colors={['#001F3F', '#003366']} style={styles.container}>
      <Text style={styles.title}>Atuador Festo - Aço Inoxidável</Text>

      <Image
        source={require('../../assets/atuador.png')} // ajuste o caminho da imagem
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.infoBox}>
        <Text style={styles.label}>Posição do êmbolo:</Text>
        <Text style={styles.value}>{position}</Text>

        <Text style={styles.label}>Pressão de entrada:</Text>
        <Text style={styles.value}>{pressure}</Text>

        <Text style={styles.label}>Status:</Text>
        <Text style={[styles.value, { color: status === 'Ativo' ? '#0f0' : '#f00' }]}>
          {status}
        </Text>

        <Text style={styles.label}>Última atualização:</Text>
        <Text style={styles.value}>{lastUpdate}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
  },
  infoBox: {
    backgroundColor: '#ffffff10',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
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
