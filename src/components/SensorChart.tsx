// src/components/SensorChart.tsx
import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

type SensorChartProps = {
  data: number[];
};

export default function SensorChart({ data }: SensorChartProps) {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: data.map((_, index) => (index + 1).toString()),
          datasets: [{ data }],
        }}
        width={Dimensions.get('window').width - 32} // largura do gráfico
        height={220}
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#2196f3',
          },
        }}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
});
