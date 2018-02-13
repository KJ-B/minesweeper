
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    row.push(' ');
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(4, 3));
