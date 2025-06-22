console.log('Dummy website script loaded');

document.addEventListener('DOMContentLoaded', () => {
  const selectEl = document.getElementById('item-select');
  const displayEl = document.getElementById('selected-item');
  if (selectEl && displayEl) {
    selectEl.addEventListener('change', () => {
      displayEl.textContent = selectEl.value;
    });
  }
});