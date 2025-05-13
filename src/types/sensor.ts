export interface Sensor {
  id: number;
  name: string;
  value: number;
  status: 'OK' | 'Alerta';
  history: { timestamp: string; value: number }[];
}