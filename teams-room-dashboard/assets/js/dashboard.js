/*
  Lightweight static dashboard script (no React)
  - generates mock device data
  - populates filters
  - computes metrics
  - draws Chart.js charts
*/
const colors = {
  primary:'#00A3E0', success:'#00C781', danger:'#FF4757', warning:'#FFB020', teal:'#1ABC9C', purple:'#9B59B6'
};

function generateMockData(){
  const countries=['USA','UK','Germany','France','Australia','Canada','Japan','Singapore'];
  const cities={ 'USA':['New York','San Francisco','Chicago'], 'UK':['London','Manchester'], 'Germany':['Berlin','Munich'], 'France':['Paris'], 'Australia':['Sydney'], 'Canada':['Toronto'], 'Japan':['Tokyo'], 'Singapore':['Singapore'] };
  const manufacturers=['Microsoft','Logitech','Poly','Crestron','Yealink'];
  const deviceTypes=['Teams Room Standard','Teams Room Premium','Teams Display','Teams Phone'];
  const data=[];
  let id=1000;
  countries.forEach(c=>{
    (cities[c]||[]).forEach(city=>{
      const n = 8 + Math.floor(Math.random()*10);
      for(let i=0;i<n;i++){
        const m = manufacturers[Math.floor(Math.random()*manufacturers.length)];
        const dt = deviceTypes[Math.floor(Math.random()*deviceTypes.length)];
        const baseQuality = 72 + Math.random()*22;
        const manufBonus = m==='Microsoft'?5:m==='Poly'?3:0;
        const typeBonus = dt.includes('Premium')?5:0;
        const q = Math.min(100, baseQuality+manufBonus+typeBonus+(Math.random()-0.5)*8);
        const poor = Math.max(0,100-q+(Math.random()-0.5)*8);
        const latency = 20 + (100-q)*0.45 + Math.random()*12;
        data.push({
          deviceId:`DEV-${id++}`,
          country:c, city, manufacturer:m, deviceType:dt,
          subnet:`10.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.0/24`,
          qualityScore: Math.round(q*10)/10,
          poorCallPct: Math.round(poor*10)/10,
          avgLatency: Math.round(latency*10)/10,
          packetLoss: Math.round((Math.random()*2 + (100-q)*0.04)*100)/100,
          totalCalls: Math.floor(Math.random()*500)+50
        });
      }
    });
  });
  return data;
}

function generateTimeSeries(){
  const days=30; const out=[];
  for(let i=days;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i);
    out.push({
      date:d.toISOString().split('T')[0],
      qualityScore: Math.round((78 + Math.random()*12)*10)/10,
      poorCallPct: Math.round((7 + Math.random()*6)*10)/10
    });
  }
  return out;
}

const devices = generateMockData();
let filters = { country:'All', city:'All', manufacturer:'All', deviceType:'All', subnet:'All' };

function unique(arr){ return Array.from(new Set(arr)); }

function populateFilters(){
  const countries = ['All', ...unique(devices.map(d=>d.country))];
  const countryEl = document.getElementById('filter-country');
  const cityEl = document.getElementById('filter-city');
  const manEl = document.getElementById('filter-manufacturer');
  const dtEl = document.getElementById('filter-deviceType');
  const snEl = document.getElementById('filter-subnet');

  countryEl.innerHTML = countries.map(c=>`<option>${c}</option>`).join('');
  manEl.innerHTML = ['All', ...unique(devices.map(d=>d.manufacturer))].map(x=>`<option>${x}</option>`).join('');
  dtEl.innerHTML = ['All', ...unique(devices.map(d=>d.deviceType))].map(x=>`<option>${x}</option>`).join('');
  snEl.innerHTML = ['All', ...unique(devices.map(d=>d.subnet)).slice(0,30)].map(x=>`<option>${x}</option>`).join('');
  updateCities();
  [countryEl, cityEl, manEl, dtEl, snEl].forEach(el=>el.addEventListener('change', onFilterChange));
}

function updateCities(){
  const country = document.getElementById('filter-country').value || 'All';
  const cities = ['All', ...unique(devices.filter(d=> country==='All' || d.country===country).map(d=>d.city))];
  document.getElementById('filter-city').innerHTML = cities.map(c=>`<option>${c}</option>`).join('');
}

function onFilterChange(e){
  const id = e.target.id.replace('filter-','');
  filters[id] = e.target.value;
  if(id==='country') updateCities();
  render();
}

function applyFilters(){
  return devices.filter(d=>{
    if(filters.country!=='All' && d.country!==filters.country) return false;
    if(filters.city!=='All' && d.city!==filters.city) return false;
    if(filters.manufacturer!=='All' && d.manufacturer!==filters.manufacturer) return false;
    if(filters.deviceType!=='All' && d.deviceType!==filters.deviceType) return false;
    if(filters.subnet!=='All' && d.subnet!==filters.subnet) return false;
    return true;
  });
}

let charts = {};
function renderCharts(filtered){
  // Manufacturer bar
  const byMan = {};
  filtered.forEach(d=>{
    if(!byMan[d.manufacturer]) byMan[d.manufacturer] = {sum:0,count:0};
    byMan[d.manufacturer].sum += d.qualityScore; byMan[d.manufacturer].count++;
  });
  const manLabels = Object.keys(byMan);
  const manData = manLabels.map(l=> Math.round((byMan[l].sum/byMan[l].count)*10)/10 );

  if(charts.manufacturer) charts.manufacturer.destroy();
  const ctxMan = document.getElementById('chart-manufacturer').getContext('2d');
  charts.manufacturer = new Chart(ctxMan, {
    type:'bar',
    data:{labels:manLabels,datasets:[{label:'Avg Quality',data:manData,backgroundColor:colors.primary}]},
    options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true,max:100}}}
  });

  // Device pie
  const byType = {};
  filtered.forEach(d=> byType[d.deviceType] = (byType[d.deviceType]||0)+1 );
  const typeLabels = Object.keys(byType);
  const typeData = typeLabels.map(l=>byType[l]);
  if(charts.devicepie) charts.devicepie.destroy();
  const ctxPie = document.getElementById('chart-devicepie').getContext('2d');
  charts.devicepie = new Chart(ctxPie, {
    type:'pie',
    data:{labels:typeLabels,datasets:[{data:typeData,backgroundColor:[colors.primary,colors.teal,colors.purple,colors.warning]}]}
  });

  // Trend line
  const ts = generateTimeSeries();
  if(charts.trend) charts.trend.destroy();
  const ctxTrend = document.getElementById('chart-trend').getContext('2d');
  charts.trend = new Chart(ctxTrend, {
    type:'line',
    data:{labels:ts.map(t=>t.date),datasets:[{label:'Quality Score',data:ts.map(t=>t.qualityScore),borderColor:colors.primary,fill:false}]},
    options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:false,max:100}}}
  });
}

function renderMetrics(filtered){
  const el = document.getElementById('metrics'); el.innerHTML='';
  const avgQuality = filtered.reduce((s,d)=>s+d.qualityScore,0)/ (filtered.length||1);
  const avgPoor = filtered.reduce((s,d)=>s+d.poorCallPct,0)/(filtered.length||1);
  const totalCalls = filtered.reduce((s,d)=>s+d.totalCalls,0);
  const devicesWithIssues = filtered.filter(d=>d.qualityScore<80).length;

  const metricItems = [
    {title:'Average Quality Score', value:Math.round(avgQuality*10)/10, sub:`Across ${filtered.length} devices`},
    {title:'Poor Call %', value:`${Math.round(avgPoor*10)/10}%`, sub:`${totalCalls.toLocaleString()} total calls`},
    {title:'Devices w/ Issues', value:devicesWithIssues, sub:'Quality < 80'},
    {title:'Geographic Coverage', value: unique(devices.map(d=>d.country)).length, sub: `${unique(devices.map(d=>d.city)).length} cities` }
  ];

  metricItems.forEach(m=>{
    const card = document.createElement('div'); card.className='metric card';
    card.innerHTML = `<h4>${m.title}</h4><div class="value">${m.value}</div><div class="muted">${m.sub || ''}</div>`;
    el.appendChild(card);
  });
}

function render(){
  const filtered = applyFilters();
  renderMetrics(filtered);
  renderCharts(filtered);
}

// init
populateFilters();
render();

// Expose for console debugging
window._dashboard = { devices, render, filters };