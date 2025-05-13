import sensorsData from '../../mock/sensors.json';
import { Sensor } from '../types/sensor';

export const fetchSensors = async (): Promise<Sensor[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return sensorsData as Sensor[];
};

export const fetchSensorById = async (id: number): Promise<Sensor> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const sensor = sensorsData.find((s) => s.id === id) as Sensor;
  if (!sensor) throw new Error('Sensor não encontrado');
  return sensor;
};