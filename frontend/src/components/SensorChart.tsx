import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface SensorChartProps {
  data: number[];
}

export default function SensorChart({ data }: SensorChartProps) {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ marginVertical: 10 }}>
      <LineChart
        data={{
          labels: data.map((_, index) => index.toString()), // Índices como rótulo
          datasets: [{ data }],
        }}
        width={screenWidth - 32}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#1E1E1E',
          backgroundGradientFrom: '#007BFF',
          backgroundGradientTo: '#00BFFF',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => '#FFFFFF',
          propsForDots: {
            r: '3',
            strokeWidth: '1',
            stroke: '#fff',
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          marginHorizontal: 16,
        }}
      />
    </View>
  );
}
