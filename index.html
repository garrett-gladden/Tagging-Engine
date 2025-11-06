import React, { useState, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { AlertCircle, TrendingDown, TrendingUp, MapPin, Network, Monitor } from 'lucide-react';

// Kollective color palette
const colors = {
  primary: '#00A3E0',      // Kollective blue
  secondary: '#0066A1',    // Darker blue
  success: '#00C781',      // Green
  warning: '#FFB020',      // Orange/Amber
  danger: '#FF4757',       // Red
  purple: '#9B59B6',       // Purple
  teal: '#1ABC9C',         // Teal
  bg: '#0A0E1A',          // Dark background
  bgCard: '#151B2D',      // Card background
  bgHover: '#1F2937',     // Hover state
  border: '#2D3748',      // Border color
  text: '#E2E8F0',        // Primary text
  textMuted: '#94A3B8'    // Muted text
};

// Generate realistic mock data
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
        
        // Generate performance metrics with some realistic patterns
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

// Generate time series data
const generateTimeSeriesData = (filters) => {
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
  const [devices] = useState(generateMockData());
  const [selectedView, setSelectedView] = useState('overview');
  
  // Filters
  const [filters, setFilters] = useState({
    country: 'All',
    city: 'All',
    manufacturer: 'All',
    deviceType: 'All',
    subnet: 'All'
  });

  // Get unique values for filters
  const filterOptions = useMemo(() => ({
    countries: ['All', ...new Set(devices.map(d => d.country))],
    cities: ['All', ...new Set(devices.filter(d => filters.country === 'All' || d.country === filters.country).map(d => d.city))],
    manufacturers: ['All', ...new Set(devices.map(d => d.manufacturer))],
    deviceTypes: ['All', ...new Set(devices.map(d => d.deviceType))],
    subnets: ['All', ...new Set(devices.map(d => d.subnet))]
  }), [devices, filters.country]);

  // Apply filters
  const filteredDevices = useMemo(() => {
    return devices.filter(device => {
      if (filters.country !== 'All' && device.country !== filters.country) return false;
      if (filters.city !== 'All' && device.city !== filters.city) return false;
      if (filters.manufacturer !== 'All' && device.manufacturer !== filters.manufacturer) return false;
      if (filters.deviceType !== 'All' && device.deviceType !== filters.deviceType) return false;
      if (filters.subnet !== 'All' && device.subnet !== filters.subnet) return false;
      return true;
    });
  }, [devices, filters]);

  // Calculate metrics
  const metrics = useMemo(() => {
    const avgQuality = filteredDevices.reduce((sum, d) => sum + d.qualityScore, 0) / filteredDevices.length || 0;
    const avgPoorCall = filteredDevices.reduce((sum, d) => sum + d.poorCallPct, 0) / filteredDevices.length || 0;
    const totalCalls = filteredDevices.reduce((sum, d) => sum + d.totalCalls, 0);
    const devicesWithIssues = filteredDevices.filter(d => d.qualityScore < 80).length;
    
    return {
      avgQuality: Math.round(avgQuality * 10) / 10,
      avgPoorCall: Math.round(avgPoorCall * 10) / 10,
      totalDevices: filteredDevices.length,
      totalCalls,
      devicesWithIssues
    };
  }, [filteredDevices]);

  // Aggregate data by various dimensions
  const dataByCountry = useMemo(() => {
    const grouped = {};
    filteredDevices.forEach(device => {
      if (!grouped[device.country]) {
        grouped[device.country] = { country: device.country, totalDevices: 0, avgQuality: 0, sumQuality: 0 };
      }
      grouped[device.country].totalDevices++;
      grouped[device.country].sumQuality += device.qualityScore;
    });
    return Object.values(grouped).map(g => ({
      ...g,
      avgQuality: Math.round((g.sumQuality / g.totalDevices) * 10) / 10
    })).sort((a, b) => b.avgQuality - a.avgQuality);
  }, [filteredDevices]);

  const dataByManufacturer = useMemo(() => {
    const grouped = {};
    filteredDevices.forEach(device => {
      if (!grouped[device.manufacturer]) {
        grouped[device.manufacturer] = { 
          manufacturer: device.manufacturer, 
          devices: 0, 
          avgQuality: 0, 
          sumQuality: 0,
          poorCallPct: 0,
          sumPoorCall: 0
        };
      }
      grouped[device.manufacturer].devices++;
      grouped[device.manufacturer].sumQuality += device.qualityScore;
      grouped[device.manufacturer].sumPoorCall += device.poorCallPct;
    });
    return Object.values(grouped).map(g => ({
      ...g,
      avgQuality: Math.round((g.sumQuality / g.devices) * 10) / 10,
      poorCallPct: Math.round((g.sumPoorCall / g.devices) * 10) / 10
    })).sort((a, b) => b.avgQuality - a.avgQuality);
  }, [filteredDevices]);

  const dataByDeviceType = useMemo(() => {
    const grouped = {};
    filteredDevices.forEach(device => {
      if (!grouped[device.deviceType]) {
        grouped[device.deviceType] = { 
          deviceType: device.deviceType, 
          count: 0,
          avgQuality: 0,
          sumQuality: 0
        };
      }
      grouped[device.deviceType].count++;
      grouped[device.deviceType].sumQuality += device.qualityScore;
    });
    return Object.values(grouped).map(g => ({
      ...g,
      avgQuality: Math.round((g.sumQuality / g.count) * 10) / 10
    }));
  }, [filteredDevices]);

  // Outlier detection
  const outliers = useMemo(() => {
    const avg = metrics.avgQuality;
    const stdDev = Math.sqrt(
      filteredDevices.reduce((sum, d) => sum + Math.pow(d.qualityScore - avg, 2), 0) / filteredDevices.length
    );
    return filteredDevices
      .filter(d => d.qualityScore < avg - 1.5 * stdDev)
      .sort((a, b) => a.qualityScore - b.qualityScore)
      .slice(0, 10);
  }, [filteredDevices, metrics.avgQuality]);

  const timeSeriesData = generateTimeSeriesData(filters);

  const FilterButton = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'text-white' 
          : 'text-gray-400 hover:text-white'
      }`}
      style={{ backgroundColor: active ? colors.primary : 'transparent' }}
    >
      {children}
    </button>
  );

  const MetricCard = ({ title, value, subtitle, icon: Icon, trend, trendValue }) => (
    <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard, borderLeft: `4px solid ${colors.primary}` }}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium" style={{ color: colors.textMuted }}>{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color: colors.text }}>{value}</p>
          {subtitle && <p className="text-sm mt-1" style={{ color: colors.textMuted }}>{subtitle}</p>}
        </div>
        {Icon && (
          <div className="rounded-full p-3" style={{ backgroundColor: colors.bg }}>
            <Icon size={24} style={{ color: colors.primary }} />
          </div>
        )}
      </div>
      {trend && (
        <div className="flex items-center mt-3">
          {trend === 'up' ? (
            <TrendingUp size={16} style={{ color: colors.success }} />
          ) : (
            <TrendingDown size={16} style={{ color: colors.danger }} />
          )}
          <span className="text-sm ml-1" style={{ color: trend === 'up' ? colors.success : colors.danger }}>
            {trendValue}
          </span>
          <span className="text-sm ml-1" style={{ color: colors.textMuted }}>vs last week</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Teams Room Device Performance</h1>
        <p style={{ color: colors.textMuted }}>Real-time monitoring and analytics across your global deployment</p>
      </div>

      {/* Filters */}
      <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: colors.bgCard, borderColor: colors.border }}>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textMuted }}>Country</label>
            <select
              value={filters.country}
              onChange={(e) => setFilters({ ...filters, country: e.target.value, city: 'All' })}
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }}
            >
              {filterOptions.countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textMuted }}>City</label>
            <select
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }}
            >
              {filterOptions.cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textMuted }}>Manufacturer</label>
            <select
              value={filters.manufacturer}
              onChange={(e) => setFilters({ ...filters, manufacturer: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }}
            >
              {filterOptions.manufacturers.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textMuted }}>Device Type</label>
            <select
              value={filters.deviceType}
              onChange={(e) => setFilters({ ...filters, deviceType: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }}
            >
              {filterOptions.deviceTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textMuted }}>Subnet</label>
            <select
              value={filters.subnet}
              onChange={(e) => setFilters({ ...filters, subnet: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: colors.bg, borderColor: colors.border, color: colors.text }}
            >
              {filterOptions.subnets.slice(0, 20).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* View Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <FilterButton active={selectedView === 'overview'} onClick={() => setSelectedView('overview')}>
          Overview
        </FilterButton>
        <FilterButton active={selectedView === 'geographic'} onClick={() => setSelectedView('geographic')}>
          Geographic Analysis
        </FilterButton>
        <FilterButton active={selectedView === 'trends'} onClick={() => setSelectedView('trends')}>
          Trends
        </FilterButton>
        <FilterButton active={selectedView === 'comparative'} onClick={() => setSelectedView('comparative')}>
          Comparative Analysis
        </FilterButton>
        <FilterButton active={selectedView === 'outliers'} onClick={() => setSelectedView('outliers')}>
          Outlier Detection
        </FilterButton>
        <FilterButton active={selectedView === 'network'} onClick={() => setSelectedView('network')}>
          Network Correlation
        </FilterButton>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Average Quality Score"
          value={metrics.avgQuality}
          subtitle={`Across ${metrics.totalDevices} devices`}
          icon={Monitor}
          trend="up"
          trendValue="+2.3%"
        />
        <MetricCard
          title="Poor Call Percentage"
          value={`${metrics.avgPoorCall}%`}
          subtitle={`Of ${metrics.totalCalls.toLocaleString()} total calls`}
          icon={AlertCircle}
          trend="down"
          trendValue="-1.5%"
        />
        <MetricCard
          title="Devices with Issues"
          value={metrics.devicesWithIssues}
          subtitle="Quality score < 80"
          icon={AlertCircle}
        />
        <MetricCard
          title="Geographic Coverage"
          value={filterOptions.countries.length - 1}
          subtitle={`${filterOptions.cities.length - 1} cities monitored`}
          icon={MapPin}
        />
      </div>

      {/* Overview View */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Performance by Manufacturer</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataByManufacturer}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis dataKey="manufacturer" stroke={colors.textMuted} />
                <YAxis stroke={colors.textMuted} />
                <Tooltip 
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                  labelStyle={{ color: colors.text }}
                />
                <Legend />
                <Bar dataKey="avgQuality" fill={colors.primary} name="Avg Quality Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Device Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataByDeviceType}
                  dataKey="count"
                  nameKey="deviceType"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {dataByDeviceType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[colors.primary, colors.secondary, colors.teal, colors.purple][index % 4]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-lg p-6 lg:col-span-2" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Quality Score vs Poor Call Percentage by Manufacturer</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataByManufacturer}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis dataKey="manufacturer" stroke={colors.textMuted} />
                <YAxis stroke={colors.textMuted} />
                <Tooltip 
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                  labelStyle={{ color: colors.text }}
                />
                <Legend />
                <Bar dataKey="avgQuality" fill={colors.success} name="Avg Quality Score" />
                <Bar dataKey="poorCallPct" fill={colors.danger} name="Poor Call %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Geographic Analysis View */}
      {selectedView === 'geographic' && (
        <div className="space-y-6">
          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Quality Heatmap by Country</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dataByCountry} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis type="number" stroke={colors.textMuted} domain={[0, 100]} />
                <YAxis dataKey="country" type="category" stroke={colors.textMuted} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                  labelStyle={{ color: colors.text }}
                />
                <Bar dataKey="avgQuality" name="Avg Quality Score">
                  {dataByCountry.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.avgQuality > 85 ? colors.success : entry.avgQuality > 75 ? colors.warning : colors.danger} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Device Deployment by Region</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dataByCountry.slice(0, 8).map((country, idx) => (
                <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: colors.bg }}>
                  <div className="flex items-center justify-between mb-2">
                    <MapPin size={20} style={{ color: colors.primary }} />
                    <span className="text-2xl font-bold">{country.totalDevices}</span>
                  </div>
                  <p className="text-sm font-medium">{country.country}</p>
                  <p className="text-xs mt-1" style={{ color: colors.textMuted }}>
                    Quality: {country.avgQuality}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Trends View */}
      {selectedView === 'trends' && (
        <div className="space-y-6">
          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">30-Day Quality Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis dataKey="date" stroke={colors.textMuted} />
                <YAxis stroke={colors.textMuted} />
                <Tooltip 
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                  labelStyle={{ color: colors.text }}
                />
                <Legend />
                <Line type="monotone" dataKey="qualityScore" stroke={colors.primary} strokeWidth={2} name="Quality Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
              <h3 className="text-lg font-semibold mb-4">Poor Call Percentage Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis dataKey="date" stroke={colors.textMuted} />
                  <YAxis stroke={colors.textMuted} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                    labelStyle={{ color: colors.text }}
                  />
                  <Line type="monotone" dataKey="poorCallPct" stroke={colors.danger} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
              <h3 className="text-lg font-semibold mb-4">Network Latency Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis dataKey="date" stroke={colors.textMuted} />
                  <YAxis stroke={colors.textMuted} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                    labelStyle={{ color: colors.text }}
                  />
                  <Line type="monotone" dataKey="avgLatency" stroke={colors.warning} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Comparative Analysis View */}
      {selectedView === 'comparative' && (
        <div className="space-y-6">
          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Manufacturer Performance Comparison</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dataByManufacturer}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis dataKey="manufacturer" stroke={colors.textMuted} />
                <YAxis stroke={colors.textMuted} />
                <Tooltip 
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                  labelStyle={{ color: colors.text }}
                />
                <Legend />
                <Bar dataKey="avgQuality" fill={colors.primary} name="Quality Score" />
                <Bar dataKey="poorCallPct" fill={colors.danger} name="Poor Call %" />
                <Bar dataKey="devices" fill={colors.teal} name="Device Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
              <h3 className="text-lg font-semibold mb-4">Device Type Performance</h3>
              <div className="space-y-4">
                {dataByDeviceType.map((dt, idx) => (
                  <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: colors.bg }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{dt.deviceType}</span>
                      <span className="text-lg font-bold">{dt.avgQuality}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${dt.avgQuality}%`,
                          backgroundColor: dt.avgQuality > 85 ? colors.success : dt.avgQuality > 75 ? colors.warning : colors.danger
                        }}
                      />
                    </div>
                    <p className="text-xs mt-1" style={{ color: colors.textMuted }}>
                      {dt.count} devices
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
              <h3 className="text-lg font-semibold mb-4">Advanced Query Results</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.bg }}>
                  <p className="text-sm font-mono mb-2" style={{ color: colors.primary }}>
                    Query: Poly devices in USA with &gt;10% poor calls
                  </p>
                  <p className="text-2xl font-bold">
                    {filteredDevices.filter(d => 
                      d.manufacturer === 'Poly' && 
                      d.country === 'USA' && 
                      d.poorCallPct > 10
                    ).length}
                  </p>
                  <p className="text-xs" style={{ color: colors.textMuted }}>devices match criteria</p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.bg }}>
                  <p className="text-sm font-mono mb-2" style={{ color: colors.primary }}>
                    Query: Teams Room Premium vs Standard avg quality
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs" style={{ color: colors.textMuted }}>Premium</p>
                      <p className="text-xl font-bold">
                        {Math.round(filteredDevices
                          .filter(d => d.deviceType === 'Teams Room Premium')
                          .reduce((sum, d) => sum + d.qualityScore, 0) / 
                          filteredDevices.filter(d => d.deviceType === 'Teams Room Premium').length * 10) / 10 || 0}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: colors.textMuted }}>Standard</p>
                      <p className="text-xl font-bold">
                        {Math.round(filteredDevices
                          .filter(d => d.deviceType === 'Teams Room Standard')
                          .reduce((sum, d) => sum + d.qualityScore, 0) / 
                          filteredDevices.filter(d => d.deviceType === 'Teams Room Standard').length * 10) / 10 || 0}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.bg }}>
                  <p className="text-sm font-mono mb-2" style={{ color: colors.primary }}>
                    Query: Highest variance subnet
                  </p>
                  <p className="text-sm font-bold">
                    {(() => {
                      const subnets = {};
                      filteredDevices.forEach(d => {
                        if (!subnets[d.subnet]) subnets[d.subnet] = [];
                        subnets[d.subnet].push(d.qualityScore);
                      });
                      const variances = Object.entries(subnets).map(([subnet, scores]) => {
                        const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
                        const variance = scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length;
                        return { subnet, variance };
                      });
                      const highest = variances.sort((a, b) => b.variance - a.variance)[0];
                      return highest ? highest.subnet : 'N/A';
                    })()}
                  </p>
                  <p className="text-xs" style={{ color: colors.textMuted }}>with highest quality variance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Outlier Detection View */}
      {selectedView === 'outliers' && (
        <div className="space-y-6">
          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Devices Requiring Attention</h3>
            <p className="text-sm mb-4" style={{ color: colors.textMuted }}>
              Devices with quality scores &gt;1.5 standard deviations below average ({metrics.avgQuality})
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: colors.border }}>
                    <th className="text-left py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Device ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Location</th>
                    <th className="text-left py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Manufacturer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Type</th>
                    <th className="text-right py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Quality Score</th>
                    <th className="text-right py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Poor Call %</th>
                    <th className="text-left py-3 px-4 text-sm font-medium" style={{ color: colors.textMuted }}>Subnet</th>
                  </tr>
                </thead>
                <tbody>
                  {outliers.map((device, idx) => (
                    <tr key={idx} className="border-b hover:bg-opacity-50" style={{ borderColor: colors.border }}>
                      <td className="py-3 px-4 text-sm">{device.deviceId}</td>
                      <td className="py-3 px-4 text-sm">{device.city}, {device.country}</td>
                      <td className="py-3 px-4 text-sm">{device.manufacturer}</td>
                      <td className="py-3 px-4 text-sm">{device.deviceType}</td>
                      <td className="py-3 px-4 text-sm text-right">
                        <span className="px-2 py-1 rounded text-xs font-medium" style={{ 
                          backgroundColor: colors.danger + '20', 
                          color: colors.danger 
                        }}>
                          {device.qualityScore}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-right">{device.poorCallPct}%</td>
                      <td className="py-3 px-4 text-sm font-mono text-xs">{device.subnet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Quality Score Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis 
                  type="number" 
                  dataKey="qualityScore" 
                  name="Quality Score" 
                  stroke={colors.textMuted}
                  domain={[0, 100]}
                />
                <YAxis 
                  type="number" 
                  dataKey="poorCallPct" 
                  name="Poor Call %" 
                  stroke={colors.textMuted}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                />
                <Scatter name="Devices" data={filteredDevices} fill={colors.primary} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Network Correlation View */}
      {selectedView === 'network' && (
        <div className="space-y-6">
          <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
            <h3 className="text-lg font-semibold mb-4">Quality vs Network Metrics</h3>
            <ResponsiveContainer width="100%" height={350}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                <XAxis 
                  type="number" 
                  dataKey="avgLatency" 
                  name="Latency (ms)" 
                  stroke={colors.textMuted}
                />
                <YAxis 
                  type="number" 
                  dataKey="qualityScore" 
                  name="Quality Score" 
                  stroke={colors.textMuted}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                />
                <Scatter name="Latency Impact" data={filteredDevices}>
                  {filteredDevices.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.qualityScore > 85 ? colors.success : entry.qualityScore > 75 ? colors.warning : colors.danger} 
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
              <h3 className="text-lg font-semibold mb-4">Packet Loss Impact</h3>
              <ResponsiveContainer width="100%" height={250}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                  <XAxis 
                    type="number" 
                    dataKey="packetLoss" 
                    name="Packet Loss %" 
                    stroke={colors.textMuted}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="qualityScore" 
                    name="Quality Score" 
                    stroke={colors.textMuted}
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{ backgroundColor: colors.bgCard, border: `1px solid ${colors.border}` }}
                  />
                  <Scatter name="Devices" data={filteredDevices} fill={colors.primary} />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: colors.bgCard }}>
              <h3 className="text-lg font-semibold mb-4">Network Health by Subnet (Top 10)</h3>
              <div className="space-y-3">
                {(() => {
                  const subnets = {};
                  filteredDevices.forEach(d => {
                    if (!subnets[d.subnet]) {
                      subnets[d.subnet] = { 
                        subnet: d.subnet, 
                        devices: 0, 
                        sumQuality: 0, 
                        sumLatency: 0 
                      };
                    }
                    subnets[d.subnet].devices++;
                    subnets[d.subnet].sumQuality += d.qualityScore;
                    subnets[d.subnet].sumLatency += d.avgLatency;
                  });
                  return Object.values(subnets)
                    .map(s => ({
                      ...s,
                      avgQuality: s.sumQuality / s.devices,
                      avgLatency: s.sumLatency / s.devices
                    }))
                    .sort((a, b) => b.devices - a.devices)
                    .slice(0, 10)
                    .map((subnet, idx) => (
                      <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: colors.bg }}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-mono">{subnet.subnet}</span>
                          <span className="text-sm font-bold">{Math.round(subnet.avgQuality * 10) / 10}</span>
                        </div>
                        <div className="flex justify-between text-xs" style={{ color: colors.textMuted }}>
                          <span>{subnet.devices} devices</span>
                          <span>{Math.round(subnet.avgLatency)}ms avg latency</span>
                        </div>
                      </div>
                    ));
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;