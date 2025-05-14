import { Sensor } from '../types/sensor';

export async function fetchSensorById(id: string): Promise<Sensor> {
  // Simulação mockada
  return {
    id,
    name: `Sensor ${id}`,
    history: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
  };
}
