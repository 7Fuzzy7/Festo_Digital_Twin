import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { LinearGradient } from 'expo-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
    const { width } = Dimensions.get('window');
    const logoSize = width * 0.25; // ajuste de tamanho da logo (50% da largura da tela)

    return (
        <LinearGradient
            colors={['#001F3F', '#003366']}
            style={styles.container}
        >
            <Image
                source={require('../../assets/splash-icon.png')} // coloque o caminho correto da imagem
                style={[styles.logo, { width: logoSize, height: logoSize }]}
                resizeMode="contain"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SensorList')}
            >
                <Text style={styles.buttonText}>COMEÇAR</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 5,
        marginBottom: 50, // sobe o botão para não ficar grudado na borda inferior
    },
    buttonText: {
        color: '#00BFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
