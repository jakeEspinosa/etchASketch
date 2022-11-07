const gridDiv = document.getElementById('grid-div');

for (let i = 1; i < 17; i++) {
  const newRow = document.createElement('div');
  newRow.className = 'row';
  gridDiv.appendChild(newRow);
}