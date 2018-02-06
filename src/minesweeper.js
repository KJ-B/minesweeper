const printBoard = (board) => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
};
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];
printBoard(board);
board.fill('|');
console.log(board);
console.log(board);
console.log(board);
