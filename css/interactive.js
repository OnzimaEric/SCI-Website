// SCI Daily Safety Checklist - Interactive JS
// This function calculates how many items are checked and provides dynamic feedback
function submitChecklist() {
  // Select all checkboxes within the checklist section
  const checkboxes = document.querySelectorAll('#hse-checklist input[type="checkbox"]');
  let checkedCount = 0;

  // Count how many checkboxes are checked
  checkboxes.forEach(cb => {
    if(cb.checked) checkedCount++;
  });

  const total = checkboxes.length;

  // Calculate risk reduction percentage
  const riskReduction = Math.round((checkedCount / total) * 100);

  // Get the paragraph element to update feedback
  const feedback = document.getElementById('dynamic-feedback');

  // If feedback element doesn't exist, create it below the button
  if (!feedback) {
    const button = document.querySelector('#hse-checklist button');
    const newFeedback = document.createElement('p');
    newFeedback.id = 'dynamic-feedback';
    newFeedback.className = 'checklist-significance';
    button.insertAdjacentElement('afterend', newFeedback);
  }

  // Update feedback dynamically with motivational message
  document.getElementById('dynamic-feedback').innerHTML = `
    ✅ You checked <strong>${checkedCount}</strong> of <strong>${total}</strong> items.<br>
    🎯 Estimated Risk Reduced: <strong>${riskReduction}%</strong><br>
    🌟 Fantastic! Each action you took today protects <strong>you, your colleagues, and your community</strong>.<br>
    💡 Tip: The more you check, the safer your environment becomes! Explore other safety tips on our site.
  `;

  // Optional: scroll to feedback smoothly for emphasis
  document.getElementById('dynamic-feedback').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
