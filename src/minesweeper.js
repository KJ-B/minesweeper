class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = (nubmerOfRows * numberOfColumns);
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns);

    //get playerBoard() {
    //return this._playerBoard;
    }

    flipTile (rowIndex, columnIndex) {
      if((this._rowIndex * this._columnIndex) !== ' ') {
      console.log('The tile has been flipped');
      return flipTile;
    } else if ((this._rowIndex * this._columnIndex) == 'B') {
      //((this._rowIndex * this._columnIndex) = 'B')
      console.log('Checking for bombs');
    } else {
      (this._rowIndex * this._columnIndex) === this._NumberOfNeighborBombs(rowIndex, columnIndex);

     }
     this._numberOfTiles--;


   }

   NumberOfNeighborBombs (rowIndex, columnIndex) {
     const neighborOffsets = [
       [-1, -1],
       [-1, 0],
       [-1, 1],
       [0, -1],
       [0, 1],
       [1, -1],
       [1, 0],
       [1, 1]
     ];

     numberOfRows = this._bombBoard.length;
     numberOfColumns = this._bombBoard[0].length;

     this._numberOfBombs = 0;

     neighborOffsets.forEach(offset => {
       this._neighborRowIndex = this._rowIndex + offset[0];
       this._neighborColumnIndex = this.columnIndex + offset[1];

     if (this._neighborRowIndex >= 0 && this._neighborRowIndex < this._numberOfRows && this._neighborColumnIndex >= 0
       && this._neighborColumnIndex < this._numberOfColumns) {
         if ((this._neighborRowIndex * this._neighborColumnIndex) === 'B') {
         }
        }
       });
     return this._numberOfBombs;
     };

     hasSafeTiles(numberOfTiles, numeberOfBoms) {
       return this._numberOfTiles !== this._numberOfBombs {
       }
     }
  }

}

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B';

      numberOfBombsPlaced++;

      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      if (board[randomRowIndex][randomColumnIndex] = 'B') {
         numberOfBombsPlaced++;
      }
     }  //potential to add bombs now//
   };
  return board;
};




const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board ');
printBoard(playerBoard);
