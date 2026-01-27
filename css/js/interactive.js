function submitChecklist() {
  const checkboxes = document.querySelectorAll('#hse-checklist input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach(cb => {
    if(cb.checked) checkedCount++;
  });

  const total = checkboxes.length;
  const riskReduction = Math.round((checkedCount / total) * 100);

  const feedback = document.getElementById('dynamic-feedback');
  feedback.innerHTML = `
    ✅ You checked ${checkedCount} of ${total} items.<br>
    🎯 Estimated Risk Reduced: <strong>${riskReduction}%</strong><br>
    Great job! Each action you took today protected <strong>you and your community</strong>. 
    Keep making safety a habit – small daily steps make a big difference!
  `;
}
