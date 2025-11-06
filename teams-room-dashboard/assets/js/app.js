// This file contains the JavaScript code necessary to run the application.
// It includes the React code transformed to work without a build system,
// and it will handle rendering the dashboard.

const colors = {
  primary: '#00A3E0',
  secondary: '#0066A1',
  success: '#00C781',
  warning: '#FFB020',
  danger: '#FF4757',
  purple: '#9B59B6',
  teal: '#1ABC9C',
  bg: '#0A0E1A',
  bgCard: '#151B2D',
  bgHover: '#1F2937',
  border: '#2D3748',
  text: '#E2E8F0',
  textMuted: '#94A3B8'
};

const generateMockData = () => {
  const countries = ['USA', 'UK', 'Germany', 'France', 'Australia', 'Canada', 'Japan', 'Singapore'];
  const cities = {
    'USA': ['New York', 'San Francisco', 'Chicago', 'Austin', 'Seattle'],
    'UK': ['London', 'Manchester', 'Edinburgh'],
    'Germany': ['Berlin', 'Munich', 'Frankfurt'],
    'France': ['Paris', 'Lyon', 'Marseille'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'Japan': ['Tokyo', 'Osaka', 'Nagoya'],
    'Singapore': ['Singapore']
  };
  const manufacturers = ['Microsoft', 'Logitech', 'Poly', 'Crestron', 'Yealink'];
  const deviceTypes = ['Teams Room Standard', 'Teams Room Premium', 'Teams Display', 'Teams Phone'];
  const buildings = ['HQ Building A', 'HQ Building B', 'Remote Office', 'Branch Office', 'Data Center'];
  
  const data = [];
  let deviceId = 1000;
  
  countries.forEach(country => {
    cities[country].forEach(city => {
      const numDevices = Math.floor(Math.random() * 15) + 5;
      for (let i = 0; i < numDevices; i++) {
        const manufacturer = manufacturers[Math.floor(Math.random() * manufacturers.length)];
        const deviceType = deviceTypes[Math.floor(Math.random() * deviceTypes.length)];
        const building = buildings[Math.floor(Math.random() * buildings.length)];
        const subnet = `10.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.0/24`;
        
        const baseQuality = 75 + Math.random() * 20;
        const manufacturerBonus = manufacturer === 'Microsoft' ? 5 : manufacturer === 'Poly' ? 3 : 0;
        const deviceTypeBonus = deviceType.includes('Premium') ? 5 : 0;
        
        const qualityScore = Math.min(100, baseQuality + manufacturerBonus + deviceTypeBonus + (Math.random() - 0.5) * 10);
        const poorCallPct = Math.max(0, 100 - qualityScore + (Math.random() - 0.5) * 10);
        const avgLatency = 20 + (100 - qualityScore) * 0.5 + Math.random() * 15;
        const packetLoss = Math.max(0, (100 - qualityScore) * 0.05 + Math.random() * 2);
        
        data.push({
          deviceId: `DEV-${deviceId++}`,
          country,
          city,
          building,
          manufacturer,
          deviceType,
          subnet,
          qualityScore: Math.round(qualityScore * 10) / 10,
          poorCallPct: Math.round(poorCallPct * 10) / 10,
          avgLatency: Math.round(avgLatency * 10) / 10,
          packetLoss: Math.round(packetLoss * 100) / 100,
          totalCalls: Math.floor(Math.random() * 500) + 100,
          activeUsers: Math.floor(Math.random() * 50) + 10
        });
      }
    });
  });
  
  return data;
};

const generateTimeSeriesData = () => {
  const days = 30;
  const data = [];
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toISOString().split('T')[0],
      qualityScore: 82 + Math.random() * 10 - (i > 20 ? 5 : 0),
      poorCallPct: 8 + Math.random() * 5 + (i > 20 ? 3 : 0),
      avgLatency: 35 + Math.random() * 15,
      packetLoss: 0.5 + Math.random() * 1.5
    });
  }
  return data;
};

const Dashboard = () => {
  const devices = generateMockData();
  const timeSeriesData = generateTimeSeriesData();

  // Render the dashboard (this part would need to be implemented)
};

document.addEventListener('DOMContentLoaded', () => {
  Dashboard();
});