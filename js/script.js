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

function resizeGrid() {
  while (true) {
    let gridSize = parseInt(prompt('What size would you like the grid to be?'));
    if (gridSize <= 100) {
      clearGrid();
      initializeGrid(gridSize);
      break;
    } else {
      alert('Please enter a number less than or equal to 100!');
    }
  }
}

function resetGrid() {
  const boxes = document.querySelectorAll('.square');

  boxes.forEach(box => {
    box.classList.remove('hoveredOver')
  });
}

initializeGrid(16);

const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', resizeGrid);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', resetGrid)