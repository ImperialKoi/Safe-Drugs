import React, { useMemo } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

interface Point {
  lat: number;
  lng: number;
  anomaly?: boolean;
}

const sampleData: Point[] = [
  { lat: 37.00, lng: -122.00 },
  { lat: 37.01, lng: -122.02 },
  { lat: 36.99, lng: -122.01 },
  { lat: 37.02, lng: -122.03 },
  { lat: 37.00, lng: -122.00 },
  { lat: 36.98, lng: -122.04 },
  // Outliers:
  { lat: 38.00, lng: -120.00 },
];

const Dashboard: React.FC = () => {
  // Calculate the mean of the sample points.
  const mean = useMemo(() => {
    const total = sampleData.reduce(
      (acc, p) => {
        acc.lat += p.lat;
        acc.lng += p.lng;
        return acc;
      },
      { lat: 0, lng: 0 }
    );
    return {
      lat: total.lat / sampleData.length,
      lng: total.lng / sampleData.length,
    };
  }, []);

  // Compute distances from the mean and flag anomalies.
  const processedPoints = useMemo(() => {
    const distances = sampleData.map(p =>
      Math.sqrt(Math.pow(p.lat - mean.lat, 2) + Math.pow(p.lng - mean.lng, 2))
    );
    const avgDistance = distances.reduce((a, b) => a + b, 0) / distances.length;
    const stdDev = Math.sqrt(
      distances.map(d => Math.pow(d - avgDistance, 2)).reduce((a, b) => a + b, 0) /
        distances.length
    );
    const threshold = avgDistance * stdDev + 0.5;

    return sampleData.map((p, i) => ({
      ...p,
      anomaly: distances[i] > threshold,
    }));
  }, [mean]);

  // Separate normal and anomalous points for charting.
  const normalPoints = processedPoints
    .filter(p => !p.anomaly)
    .map(p => ({ x: p.lng, y: p.lat }));
  const anomalyPoints = processedPoints
    .filter(p => p.anomaly)
    .map(p => ({ x: p.lng, y: p.lat }));

  // Prepare chart data.
  const data = {
    datasets: [
      {
        label: 'Normal Stops',
        data: normalPoints,
        backgroundColor: 'blue',
      },
      {
        label: 'Anomalous Stops',
        data: anomalyPoints,
        backgroundColor: 'red',
      },
    ],
  };

  // Define options and cast the position literal correctly.
  const options: ChartOptions<'scatter'> = {
    plugins: {
      title: {
        display: true,
        text: 'Anomaly Detection on Travel Data',
      },
    },
    scales: {
      x: {
        type: 'linear',
        // Explicitly cast position as a literal type
        position: 'bottom' as const,
        title: {
          display: true,
          text: 'Longitude',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Latitude',
        },
      },
    },
  };

  return (
    <div>
      <h2>Anomaly Detector</h2>
      {/* Using a unique key ensures that the chart instance is re-created properly */}
      <Scatter key={JSON.stringify(data)} data={data} options={options} />
    </div>
  );
};

export default Dashboard;