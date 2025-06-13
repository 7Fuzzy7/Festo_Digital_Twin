import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default function ActuatorAnimation() {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: 100, // vai pra frente
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: 0, // volta pra trás
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    loopAnimation.start();

    return () => loopAnimation.stop();
  }, [position]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.piston, { transform: [{ translateX: position }] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 150,
    backgroundColor: '#ccc',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center',
  },
  piston: {
    width: 50,
    height: 30,
    backgroundColor: '#007BFF',
    borderRadius: 15,
  },
});
