let barChart;

// Sample data for different years
const data = {
  2016: { climate_change: 900, pollution: 800, degradation: 700, resource_depletion: 750 },
  2017: { climate_change: 950, pollution: 820, degradation: 710, resource_depletion: 760 },
  2018: { climate_change: 920, pollution: 810, degradation: 690, resource_depletion: 740 },
  2019: { climate_change: 890, pollution: 800, degradation: 680, resource_depletion: 730 },
  2020: { climate_change: 880, pollution: 790, degradation: 670, resource_depletion: 720 },
  2021: { climate_change: 870, pollution: 780, degradation: 660, resource_depletion: 710 },
  2022: { climate_change: 950, pollution: 850, degradation: 750, resource_depletion: 800 },
  2023: { climate_change: 1000, pollution: 900, degradation: 800, resource_depletion: 850 },
  // Add more data for other years
};

// Function to create a bar chart
function createBarChart(selectedYear, selectedIndicator) {
  const chartData = data[selectedYear];
  const chartLabels = Object.keys(chartData);
  const chartValues = Object.values(chartData);

  if (barChart) {
    barChart.destroy(); // Destroy the existing chart to prevent canvas reuse error
  }

  const ctx = document.getElementById('bar-chart').getContext('2d');
  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: selectedIndicator,
          data: chartValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Function to update the dashboard based on selected date and indicator
function updateDashboard(selectedYear, selectedIndicator) {
  const currentDateElement = document.getElementById('current-date');
  currentDateElement.textContent = `Showing data for ${selectedYear}`;
  createBarChart(selectedYear, selectedIndicator);
}

// Initialize the dashboard with default values
updateDashboard(2020, 'climate_change');
