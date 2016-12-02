/*

- Array storing the value of each cell
- Function that draws the grid of cells from the array of values
- MoveUp, MoveDown, MoveLeft, MoveRight
- Don't animate it yet

*/

var size = 4;

var values = [
    [1, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];

var drawGrid = function() {
  for (var i=0; i < size; i++) {
    for (var j=0; j < size; j++) {
      var string = i + '_' + j;
      document.getElementById(string).innerHTML = values[i][j];
    }
  }
}

drawGrid();

var movedown = function() {
      for (var i=0; i < size; i++) {
          var column = [];
          for (var j=0; j<size; j++) {
            if (values[j][i] != 0) {
              column.push(values[j][i]);
            }
          }

          while(column.length < size) {
            column.unshift(0);
          }

          for (var j=size-1; j >= 0; j--) {
            if (column[j] == 0){
              j = -1;
            } else if (column[j] == column[j-1]) {
              column[j] += column[j-1];
              column.splice(j-1, 1);
              column.unshift(0);
            }
          }

          for (var j=0; j<size; j++) {
            values[j][i] = column[j];
          }
      }

      drawGrid();
}


var moveup = function() {

      for (var i=0; i < size; i++) {
          var column = [];
          for (var j=0; j<size; j++) {
            if (values[j][i] != 0) {
              column.push(values[j][i]);
            }
          }

          while(column.length < size) {
            column.push(0);
          }

          for (var j=0; j < size; j++) {
            if (column[j] == 0){
              j = size;
            } else if (column[j] == column[j+1]) {
              column[j] += column[j+1];
              column.splice(j+1, 1);
              column.push(0);
            }
          }

          for (var j=0; j<size; j++) {
            values[j][i] = column[j];
          }
      }

      drawGrid();
}
