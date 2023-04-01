let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
let Xscore = document.querySelector("#x_score");
Xwins = 0;
let Oscore = document.querySelector("#o_score");
Owins = 0;
let tie = document.querySelector("#tie_score");
draw = 0;
let currentPlayer = 'X';

const cells = document.querySelectorAll('.cell');

//   0  1   2
// 0['' '' '']
// 1['' '' '']
// 2['' '' '']

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    const row = cell.id.charAt(0);
    const col = cell.id.charAt(1);
      
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      cell.textContent = currentPlayer;

      // Color of symbols
      if (currentPlayer == "X") {
        cell.classList.remove("o");
        cell.classList.add("x");
      }
      else {
      cell.classList.remove("x");
      cell.classList.add("o");
      }
      
      if (checkWin()) {
          alert(currentPlayer + ' wins!');
          // Count score
          if (currentPlayer === "X") {
            Xwins++;
            Xscore.textContent = Xwins;
          }
          else {
            Owins++;
            Oscore.textContent = Owins;

          }
          resetGame();
      } 
      else if (checkDraw()) {
          alert('Draw!');
          draw++;
          tie.textContent = draw;
          resetGame();
      } 
      else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
      return true;
    }
  }
  
  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === currentPlayer && board[1][j] === currentPlayer && board[2][j] === currentPlayer) {
      return true;
    }
  }
  
  // Check diagonals
  if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
  }
  if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
  }
  
  return false;
}
  
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}
  
function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  cells.forEach((cell) => {
  cell.textContent = '';
  });
}

function resetAll() {
  Xwins = 0;
  Owins = 0;
  draw = 0;
  Xscore.textContent = Xwins;
  Oscore.textContent = Owins;
  tie.textContent = draw;
}

// Reset current game button 
const ResetGame = document.querySelector("#game");
ResetGame.addEventListener('click', () => { resetGame() });

// Reset all games button 
const ResetAll = document.querySelector("#all");
ResetAll.addEventListener('click', () => { resetGame(); resetAll(); });