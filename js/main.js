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

