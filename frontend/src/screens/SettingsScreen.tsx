import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [apiUrl, setApiUrl] = useState('http://localhost:3000');

  const saveSettings = () => {
    alert(`URL salva: ${apiUrl}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text>URL da API:</Text>
      <TextInput style={styles.input} value={apiUrl} onChangeText={setApiUrl} placeholder="Digite a URL" />
      <Button title="Salvar" onPress={saveSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 },
});

export default SettingsScreen;