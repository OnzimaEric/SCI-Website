// Initialize HSE Dashboard Chart
if(document.getElementById('hseChart')){
  const ctx = document.getElementById('hseChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Incidents', 'Inspections', 'Training Completed'],
          datasets: [{
              label: 'HSE Data',
              data: [12, 19, 8], // Replace with your data
              backgroundColor: ['#ef476f','#06d6a0','#ffd166']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: { display: false },
              title: { display: true, text: 'HSE Dashboard Overview' }
          },
          scales: {
              y: { beginAtZero: true }
          }
      }
  });
}

// Risk Matrix Click Interaction
document.querySelectorAll('#risk-matrix td').forEach(td => {
  td.addEventListener('click', () => {
    alert(`Risk Level: ${td.innerText}`);
  });
});

// Checklist Submission
function submitChecklist() {
  const items = document.querySelectorAll('#hse-checklist input');
  let completed = 0;
  items.forEach(i => { if(i.checked) completed++ });
  alert(`Checklist completed: ${completed} / ${items.length}`);
}
