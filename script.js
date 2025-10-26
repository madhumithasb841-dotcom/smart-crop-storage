// script.js

// Dashboard Simulation
let simInterval = null;

// DOM elements
const tempEl = document.getElementById('temp');
const humEl = document.getElementById('hum');
const statusEl = document.getElementById('status');

// Function to generate random sensor readings
function updateStats() {
  const t = (20 + Math.random() * 20).toFixed(1); // Temp 20°C - 40°C
  const h = Math.floor(40 + Math.random() * 60);  // Humidity 40% - 100%
  
  tempEl.textContent = t + ' °C';
  humEl.textContent = h + ' %';

  if (t > 30 || h > 80) {
    statusEl.textContent = 'ALERT — Action Required';
    statusEl.style.color = 'crimson';
  } else {
    statusEl.textContent = 'SAFE';
    statusEl.style.color = '#228B22';
  }
}

// Button event handlers
document.getElementById('simulateBtn').onclick = () => {
  if (!simInterval) {
    updateStats();
    simInterval = setInterval(updateStats, 2000);
  }
};

document.getElementById('stopBtn').onclick = () => {
  clearInterval(simInterval);
  simInterval = null;
};
