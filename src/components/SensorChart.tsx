// src/components/SensorChart.tsx
import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface SensorChartProps {
  data: number[];
}

export default function SensorChart({ data }: SensorChartProps) {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico do Sensor</Text>
      <LineChart
        data={{
          labels: data.map((_, index) => (index + 1).toString()),
          datasets: [{ data }],
        }}
        width={screenWidth - 40} // largura do gráfico
        height={220}
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#007BFF',
          backgroundGradientFrom: '#007BFF',
          backgroundGradientTo: '#00BFFF',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#fff',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  chart: {
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
});
