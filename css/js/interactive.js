// ===================== HSE Dashboard =====================
if (document.getElementById('hseChart')) {
  const ctx = document.getElementById('hseChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Incidents', 'Inspections', 'Training Completed'],
      datasets: [{
        label: 'HSE Data',
        data: [3, 20, 12], // example data
        backgroundColor: ['#ef476f', '#06d6a0', '#ffd166']
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

// ===================== Risk Matrix Interaction =====================
document.querySelectorAll('#risk-matrix td').forEach(td => {
  td.addEventListener('click', () => {
    const level = td.innerText;
    let message = '';

    switch(level) {
      case 'Low':
        message = 'Low risk: monitor regularly.';
        break;
      case 'Medium':
        message = 'Medium risk: take precautions and review controls.';
        break;
      case 'High':
        message = 'High risk: immediate action required!';
        break;
      default:
        message = 'Click a valid risk cell.';
    }

    alert(`Risk Level: ${level}\nAction: ${message}`);
  });
});

// ===================== Checklist Submission =====================
function submitChecklist() {
  const items = document.querySelectorAll('#hse-checklist input');
  let completed = 0;
  items.forEach(i => { if(i.checked) completed++ });
  alert(`Checklist completed: ${completed} / ${items.length}`);
}
