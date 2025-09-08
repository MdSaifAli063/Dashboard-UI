(function () {
  'use strict';

  function getCtx(id) {
    var el = document.getElementById(id);
    return el ? el.getContext('2d') : null;
  }

  // Chart.js global defaults
  if (window.Chart) {
    Chart.defaults.color = '#6b7280';
    Chart.defaults.font.family = "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial";
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.padding = 10;
  }

  // Colors palette
  var colors = {
    purple: '#6d28d9',
    purpleLight: '#a78bfa',
    indigo: '#4f46e5',
    blue: '#2563eb',
    orange: '#f97316',
    orangeLight: '#fdba74',
    pink: '#db2777',
    green: '#34d399',
    grayLight: '#e5e7eb'
  };

  // Bar Chart: Outpatients vs Inpatients
  (function renderBarChart() {
    var ctx = getCtx('barChart');
    if (!ctx) return;

    var gradientOut = ctx.createLinearGradient(0, 0, 0, 180);
    gradientOut.addColorStop(0, 'rgba(124,58,237,0.35)');
    gradientOut.addColorStop(1, 'rgba(124,58,237,0.05)');

    var gradientIn = ctx.createLinearGradient(0, 0, 0, 180);
    gradientIn.addColorStop(0, 'rgba(52,211,153,0.35)');
    gradientIn.addColorStop(1, 'rgba(52,211,153,0.05)');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Outpatients',
            backgroundColor: gradientOut,
            borderColor: colors.purple,
            borderWidth: 1,
            data: [320, 410, 380, 460, 520, 490, 560, 610, 580, 600, 640, 700],
            borderRadius: 6,
            maxBarThickness: 24
          },
          {
            label: 'Inpatients',
            backgroundColor: gradientIn,
            borderColor: colors.green,
            borderWidth: 1,
            data: [180, 220, 210, 240, 260, 270, 300, 320, 310, 330, 340, 360],
            borderRadius: 6,
            maxBarThickness: 24
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#9ca3af' }
          },
          y: {
            grid: { color: 'rgba(17,24,39,0.06)' },
            ticks: { color: '#9ca3af' }
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: { usePointStyle: true, boxWidth: 6 }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        }
      }
    });
  })();

  // Doughnut: Patients (Inpatients vs Outpatients)
  (function renderPatientsDoughnut() {
    var ctx = getCtx('patientsDoughnut');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Inpatients', 'Outpatients'],
        datasets: [{
          data: [45, 55],
          backgroundColor: [colors.purple, colors.green],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '65%',
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: function(ctx){ return ctx.label + ': ' + ctx.parsed + '%'; } } }
        }
      }
    });
  })();

  // Doughnut: Gender
  (function renderGenderDoughnut() {
    var ctx = getCtx('genderDoughnut');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Female', 'Male'],
        datasets: [{
          data: [42, 58],
          backgroundColor: [colors.orange, colors.purple],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '65%',
        plugins: { legend: { display: false } }
      }
    });
  })();

  // Line: Time Admitted (Today)
  (function renderTimeAdmitted() {
    var ctx = getCtx('timeAdmittedChart');
    if (!ctx) return;

    var hours = ['0h','2h','4h','6h','8h','10h','12h','14h','16h','18h','20h','22h'];
    var values = [4, 6, 5, 7, 10, 14, 12, 11, 9, 8, 6, 5];

    var gradient = ctx.createLinearGradient(0, 0, 0, 220);
    gradient.addColorStop(0, 'rgba(99,102,241,0.35)');
    gradient.addColorStop(1, 'rgba(99,102,241,0.02)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: hours,
        datasets: [{
          label: 'Admissions',
          data: values,
          borderColor: colors.indigo,
          backgroundColor: gradient,
          fill: true,
          tension: 0.35,
          pointRadius: 2,
          pointHoverRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: '#9ca3af' } },
          y: { grid: { color: 'rgba(17,24,39,0.06)' }, ticks: { color: '#9ca3af' } }
        }
      }
    });
  })();

  // Sparkline: Patients this month (purple)
  (function renderPurpleLine() {
    var ctx = getCtx('purpleLineChart');
    if (!ctx) return;

    // Fake last 12 days data
    var labels = Array.from({ length: 12 }, (_, i) => 'Day ' + (i + 1));
    var data = [220, 240, 230, 260, 250, 280, 300, 290, 310, 320, 315, 330];

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255,255,255,0.15)',
          fill: true,
          tension: 0.35,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  })();
})();