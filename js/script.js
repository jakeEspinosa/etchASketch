

const gridDiv = document.getElementById('grid-div');

function createRows(rows){
  for (let i = 1; i < rows + 1; i++) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    gridDiv.appendChild(newRow);
  }
}

function populateRows(squares) {
  const rowList = gridDiv.querySelectorAll('.row');

  for (const child of rowList) {
    for (i = 1; i < squares + 1; i++) {
      const newBox = document.createElement('div');
      newBox.className = 'square';
      child.appendChild(newBox);
    }
  }
}



function etchASketch() {
  const boxes = document.querySelectorAll('.square');

  boxes.forEach(box => {
    box.addEventListener('mouseover', (hoveredBox) => {
      hoveredBox.currentTarget.classList.add('hoveredOver');
    });
  });
}

function initializeGrid(size) {
  createRows(size);
  populateRows(size);
  etchASketch();
}

function clearGrid() {
  while (gridDiv.firstChild) {
    gridDiv.removeChild(gridDiv.firstChild);
  }
}

initializeGrid(16);

const resizeButton = document.querySelector('#resize');

resizeButton.addEventListener('click', resizeGrid);