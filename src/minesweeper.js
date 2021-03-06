class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('The game is over.');
    } else if (!this._board.hasSafeTiles()) {
      console.log('You are the champion!');
    } else {
      console.log('Current Board')
      this._board.print();
      }
    }
  }

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns);

    }

    get playerBoard() {
    return this._playerBoard;
    }

    flipTile (rowIndex, columnIndex) {
      if((this._rowIndex * this._columnIndex) !== ' ') {
      console.log('The tile has been flipped');
      return;
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
     }

     hasSafeTiles(numberOfTiles, numeberOfBoms) {
       return this._numberOfTiles !== this._numberOfBombs;
     }

  /*noBombsSpacesLeft() {
    this._noBombsSpacesLeft !== this._numberOfBombs;
  }*/

    print() {
      console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns) {
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

static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
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
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      if (board[randomRowIndex][randomColumnIndex] = 'B') {
         numberOfBombsPlaced++;
      }
     }  //potential to add bombs now//
     return board;
   }
 }
}

const g = new Game (3, 3, 3);
g.playMove(0,0);

/*let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
print(playerBoard);
console.log('Bomb Board: ');
print(bombBoard);


flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board ');
printBoard(playerBoard);*/
