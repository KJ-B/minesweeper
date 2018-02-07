/*const printBoard = (board) => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
};*/
const unoBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

const printBoard = board => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

printBoard(unoBoard);
unoBoard[0][1] = 1;
unoBoard[1][0] = 'B';
printBoard(unoBoard);
