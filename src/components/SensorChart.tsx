import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  data: number[];
};

export default function SensorChart({ data }: Props) {
  return (
    <View>
      <Text>Histórico de valores: {data.join(', ')}</Text>
    </View>
  );
}
