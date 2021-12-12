// CREATING BOARD
let board = document.querySelector('.board');
let cells = [];

// creates objects in array
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    let cellObj = {
      x : j,
      y : i
    }
    cells.push(cellObj)
  } 
} 

// coloring even & odd cells
for (let cell of cells) {
  if (cell.y % 2 == 0 && cell.x % 2 == 0) cell.color = 'light';
  if (cell.y % 2 != 0 && cell.x % 2 != 0) cell.color = 'light';
}

// creating elements in x & y dimentions
for (let i of cells) {
  let cell = document.createElement('div');
  cell.classList.add(`y_${i.y}`, `x_${i.x}`, 'cell', `color_${i.color}`);
  board.appendChild(cell);
}

// ADD 3D 
let btnThreed = document.querySelector('.three__d');

btnThreed.addEventListener('click', (e) => {
  btnThreed.classList.toggle('changeColor')
  board.classList.toggle('add__3d');
  if (e.target.textContent == '3D') e.target.textContent = '2D';
  else e.target.textContent = '3D';
})

// CHARACTER MOVES 
let boardCells = document.querySelectorAll('.cell');
let buttons = document.querySelectorAll('.btn');
let chosen = '';

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('king')) chosen = 'king';
    if (e.target.parentElement.classList.contains('queen')) chosen = 'queen';
    if (e.target.parentElement.classList.contains('knight')) chosen = 'knight';
    if (e.target.parentElement.classList.contains('bishop')) chosen = 'bishop';
    if (e.target.parentElement.classList.contains('tower')) chosen = 'tower';
    if (e.target.parentElement.classList.contains('pawn')) chosen = 'pawn';

    for (let btn of buttons) {
      btn.style.background = 'white';
    }
    e.target.parentElement.style.background = 'orange';
  })
}

for (let cell of boardCells) {
  cell.addEventListener('mouseover', (e) => {
    let x = Number(e.target.classList[1].slice(-1));
    let y = Number(e.target.classList[0].slice(-1));

    document.querySelector('.screenX').textContent = `x = ${x}`;  
    document.querySelector('.screenY').textContent = `y = ${y}`; 

    for (let cell of boardCells) {
      cell.classList.remove('moves')
    }

    if (chosen == 'king') {
      for (let cell of boardCells) {
        for (let i = 1; i <= 8; i++) {
          cell.classList.contains(`y_${y+1}`) && cell.classList.contains(`x_${x+1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+1}`) && cell.classList.contains(`x_${x}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+1}`) && cell.classList.contains(`x_${x-1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y}`) && cell.classList.contains(`x_${x-1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y}`) && cell.classList.contains(`x_${x+1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-1}`) && cell.classList.contains(`x_${x-1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-1}`) && cell.classList.contains(`x_${x}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-1}`) && cell.classList.contains(`x_${x+1}`) ? cell.classList.add('moves') : true;
        }
      }
    }

    if (chosen == 'queen') {
      for (let cell of boardCells) {
        for (let i = 8; i >= 1; i--) {
          cell.classList.contains(`y_${y}`) && cell.classList.contains(`x_${i}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-i}`) && cell.classList.contains(`x_${x-i}`) ? cell.classList.add('moves') : true;
        }
        for (let i = 1; i <= 8; i++) {
          cell.classList.contains(`y_${i}`) && cell.classList.contains(`x_${x}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+i}`) && cell.classList.contains(`x_${x+i}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-i}`) && cell.classList.contains(`x_${x+i}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+i}`) && cell.classList.contains(`x_${x-i}`) ? cell.classList.add('moves') : true;
        }
      }
    }

    if (chosen == 'tower') {
      for (let cell of boardCells) {
        for (let i = 1; i <= 8; i++) {
          cell.classList.contains(`y_${i}`) && cell.classList.contains(`x_${x}`) ? cell.classList.add('moves') : true;
        }
        for (let i = 8; i >= 1; i--) {
          cell.classList.contains(`y_${y}`) && cell.classList.contains(`x_${i}`) ? cell.classList.add('moves') : true;
        }
      }
    }

    if (chosen == 'knight') {
      for (let cell of boardCells) {
        for (let i = 1; i <= 8; i++) {
          cell.classList.contains(`y_${y+1}`) && cell.classList.contains(`x_${x+2}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+2}`) && cell.classList.contains(`x_${x+1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+2}`) && cell.classList.contains(`x_${x-1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+1}`) && cell.classList.contains(`x_${x-2}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-1}`) && cell.classList.contains(`x_${x+2}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-1}`) && cell.classList.contains(`x_${x-2}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-2}`) && cell.classList.contains(`x_${x-1}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-2}`) && cell.classList.contains(`x_${x+1}`) ? cell.classList.add('moves') : true;
        }
      }
    }

    if (chosen == 'bishop') {
      for (let cell of boardCells) {
        for (let i = 8; i >= 1; i--) {
          cell.classList.contains(`y_${y-i}`) && cell.classList.contains(`x_${x-i}`) ? cell.classList.add('moves') : true;
        }
        for (let i = 1; i <= 8; i++) {
          cell.classList.contains(`y_${y+i}`) && cell.classList.contains(`x_${x+i}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y-i}`) && cell.classList.contains(`x_${x+i}`) ? cell.classList.add('moves') : true;
          cell.classList.contains(`y_${y+i}`) && cell.classList.contains(`x_${x-i}`) ? cell.classList.add('moves') : true;
        }
      }
    }

    if (chosen == 'pawn') {
      for (let cell of boardCells) {
        for (let i = 1; i <= 8; i++) {
          cell.classList.contains(`y_${y-1}`) && cell.classList.contains(`x_${x}`) ? cell.classList.add('moves') : true;
          y == 7 ? cell.classList.contains(`y_${y-2}`) && cell.classList.contains(`x_${x}`) ? cell.classList.add('moves') : true : false;
          y == 8 ? cell.classList.remove('moves') : true ;
        }
      }
    }
  })

  board.addEventListener('mouseleave', (e) => {
    for (let cell of boardCells) {
      cell.classList.remove('moves');
      document.querySelector('.screenX').textContent = `x = 0`;  
      document.querySelector('.screenY').textContent = `y = 0`;
    }
  });
}