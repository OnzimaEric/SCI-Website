/* interactive.js - SCI HSE Dashboard, Risk Matrix & Checklist */

window.addEventListener('DOMContentLoaded', () => {

    // ===== HSE Dashboard Chart =====
    const ctx = document.getElementById('hseChart')?.getContext('2d');
    if(ctx) {
        const hseChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Incidents', 'Inspections', 'Training', 'Audits', 'Near Misses'],
                datasets: [{
                    label: 'This Month',
                    data: [5, 12, 8, 6, 2], // example data
                    backgroundColor: ['#e74c3c','#3498db','#f1c40f','#2ecc71','#9b59b6']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true, position: 'top' },
                    title: { display: true, text: 'HSE Dashboard - Example Data' }
                },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Count' } }
                }
            }
        });
    }

    // ===== Interactive Risk Matrix =====
    const matrixCells = document.querySelectorAll('#risk-matrix td');
    matrixCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const severity = cell.parentElement.firstElementChild.textContent;
            const likelihood = cell.cellIndex; // 1-5 (column index)
            const riskLevel = cell.textContent;
            alert(`Severity: ${severity}\nLikelihood: ${likelihood}\nRisk Level: ${riskLevel}`);
        });
    });

    // ===== Daily Safety Checklist Button =====
    window.submitChecklist = function() {
        const checklist = document.querySelectorAll('#hse-checklist input[type="checkbox"]');
        let completed = [];
        checklist.forEach((item, idx) => {
            if(item.checked) completed.push(idx+1);
        });
        if(completed.length === 0) {
            alert("You have not checked any items yet!");
        } else {
            alert(`Checklist submitted!\nItems completed: ${completed.join(', ')}`);
        }
    };

});
