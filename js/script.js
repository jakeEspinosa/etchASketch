const gridDiv = document.getElementById('grid-div');

for (let i = 1; i < 17; i++) {
  const newRow = document.createElement('div');
  newRow.className = 'row';
  gridDiv.appendChild(newRow);
}

const nodeList = gridDiv.querySelectorAll('.row');

for (const child of nodeList) {
  for (i = 1; i < 17; i++) {
    const newBox = document.createElement('div');
    newBox.className = 'square';
    child.appendChild(newBox);
  }
}

const boxes = document.querySelectorAll('.square');

boxes.forEach(box => {
  box.addEventListener('mouseover', (hoveredBox) => {
    hoveredBox.currentTarget.classList.add('hoveredOver');
  });
});