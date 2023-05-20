const cells = document.querySelectorAll('.cell');
const result = document.querySelector('#result');
const res = document.querySelector('#resetButton');

let gameOn = true;
let actualPlayer = 'X';
const board = [['','',''],['','',''],['','','']];

cells.forEach((cell,index) => {
  cell.addEventListener('click', () => {
   
    if(cell.textContent === '' && gameOn){
      cell.classList.add('clicked');
      cell.textContent = actualPlayer;
      const row = Math.floor(index / 3) ;
      const col = index % 3;
      board[row][col] = actualPlayer;
      checkWinner();
      isTie();
      actualPlayer = actualPlayer === 'X' ? 'O' : 'X';
    }
  })
})

const checkWinner = () => {
  const winningConditions = 
        [
          //rows
          [0,1,2],
          [3,4,5],
          [6,7,8],
          //columns
          [0,3,6],
          [1,4,7],
          [2,5,8],
          //diagonals
          [0,4,8],
          [2,4,6],
        ];
for(let condition of winningConditions ){
   const [a, b, c] = condition;
    if(board[Math.floor(a/3)][a % 3] === actualPlayer &&          board[Math.floor(b / 3)][b % 3] === actualPlayer &&
          board[Math.floor(c / 3)][c % 3] === actualPlayer){
      alert(`Player ${actualPlayer} win!`);
       result.innerHTML = `Player ${actualPlayer} win!`;
      gameOn = false;
      break;
    }
  }
};
const isTie = () => {
  if(!board.flat().includes('')){
    alert('Tie');
    result.innerHTML = 'Tie';
    gameOn = false;
  }
};

const reset = () => {
  gameOn = true;
  actualPlayer = 'X';
  board.forEach(row => row.fill(''));
  cells.forEach(cell => {
    cell.classList.remove('clicked');
    cell.textContent = '';
  });
  result.innerHTML = 'Player X turn';
}

res.addEventListener('click', reset);
