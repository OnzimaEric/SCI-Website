/* ===============================
   SCI – Interactive Scripts
   =============================== */

/* Risk Matrix Popup */
const cells = document.querySelectorAll("#matrix-table td");
const popup = document.getElementById("popup");

cells.forEach(cell => {
  cell.addEventListener("click", e => {
    popup.style.display = "block";
    popup.style.left = e.pageX + 12 + "px";
    popup.style.top = e.pageY + 12 + "px";

    popup.innerHTML = `
      Risk Rating: ${cell.dataset.rating}<br>
      Likelihood: ${cell.dataset.likelihood}<br>
      Severity: ${cell.dataset.severity}<br>
      Action: ${cell.dataset.msg}
    `;
  });
});

document.addEventListener("click", e => {
  if (!e.target.closest("#matrix-table")) {
    popup.style.display = "none";
  }
});

/* Checklist Feedback */
function submitChecklist() {
  const checks = document.querySelectorAll("#hse-checklist input[type='checkbox']");
  let checked = 0;

  checks.forEach(c => {
    if (c.checked) checked++;
  });

  document.getElementById("dynamic-feedback").innerHTML = `
    <strong>Checklist Summary:</strong><br>
    You completed ${checked} safety actions today.<br>
    Every action reduces risk and strengthens community safety.
  `;
}
// Risk Matrix Interactivity
document.addEventListener('DOMContentLoaded', () => {
    const matrixCells = document.querySelectorAll('.risk-cell');

    matrixCells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            const likelihood = cell.dataset.likelihood;
            const severity = cell.dataset.severity;
            const risk = cell.dataset.risk;

            let tooltip = document.createElement('div');
            tooltip.className = 'matrix-tooltip';
            tooltip.innerHTML = `<strong>Likelihood:</strong> ${likelihood}<br>
                                 <strong>Severity:</strong> ${severity}<br>
                                 <strong>Risk Level:</strong> ${risk}`;
            document.body.appendChild(tooltip);

            const rect = cell.getBoundingClientRect();
            tooltip.style.left = rect.left + window.scrollX + 'px';
            tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight - 5 + 'px';
        });

        cell.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.matrix-tooltip');
            if (tooltip) tooltip.remove();
        });
    });
});
// HSE Checklist Form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#hse-checklist-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const checkedItems = form.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedItems.length === 0) {
            alert('Please check at least one item before submitting.');
            return;
        }
        alert(`Checklist submitted successfully! ${checkedItems.length} items checked.`);
        form.reset();
    });
});

