/*

- Array storing the value of each cell
- Function that draws the grid of cells from the array of values
- MoveUp, MoveDown, MoveLeft, MoveRight
- Don't animate it yet

*/

var size = 4;

var values = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var addNewTile = function(values) {
  if (!gameLost()) {
    var newTileAdded = false;
    while (!newTileAdded) {
      var row = Math.floor(Math.random() * size);
      var col = Math.floor(Math.random() * size);
      var value = (Math.floor(Math.random() * 2) + 1)*2;
      if (values[row][col] == 0) {
        values[row][col] = value;
        newTileAdded = true;
      }
    }
    drawGrid(values);
  }
}

var gameLost = function() {
  var gameLost = true;
  for(var i=0; i<size; i++) {
    for(var j=0; j< size; j++) {
      if (values[i][j] == 0) {
        gameLost = false;
      }
    }
  }
  return gameLost;
}

var drawGrid = function(values) {
  for (var i=0; i < size; i++) {
    for (var j=0; j < size; j++) {
      var string = i + '_' + j;
      if (values[i][j] != 0) {
        var backgroundColor = "#D3D3D3";
        var color = "#696969";
        switch(values[i][j]) {
            case 2:
              backgroundColor = "#D3D3D3";
              color = "#696969";
              break;
            case 4:
                backgroundColor = "#9fdfbf";
                color = "#696969";
                break;
            case 8:
                backgroundColor = "#ffbf80";
                color = "#696969";
                break;
            case 16:
                backgroundColor = "#ff944d";
                color = "#696969";
                break;
            case 32:
                backgroundColor = "#ff6666";
                color = "#696969";
                break;
            case 64:
                backgroundColor = "#ff6666";
                color = "#696969";
                break;
            default:
              backgroundColor = "#ffe066";
              color = "#696969";
              break;
        }
        document.getElementById(string).innerHTML = "<div class='tile' style='background-color:" + backgroundColor + "; color:" + color +";'" + ">" + values[i][j] + "</div>";
      } else {
        document.getElementById(string).innerHTML = " ";
      }
    }
  }
}

addNewTile(values);

document.addEventListener("keydown", keyDown, false);

function keyDown(key) {
  var keyCode = key.keyCode;
  if (keyCode == 38) moveup();
  else if (keyCode == 39) moveright();
  else if (keyCode == 40) movedown();
  else if (keyCode == 37) moveleft();
}

var moveright = function() {
    for (var i=0; i < size; i++) {
        var row = [];
        for (var j=0; j<size; j++) {
          if (values[i][j] != 0) {
            row.push(values[i][j]);
          }
        }

        while(row.length < size) {
          row.unshift(0);
        }

        for (var j=size-1; j >= 0; j--) {
          if (row[j] == 0){
            j = -1;
          } else if (row[j] == row[j-1]) {
            row[j] += row[j-1];
            row.splice(j-1, 1);
            row.unshift(0);
          }
        }

        for (var j=0; j<size; j++) {
          values[i][j] = row[j];
        }
    }

    addNewTile(values);
}

var moveleft = function() {

      for (var i=0; i < size; i++) {
          var row = [];
          for (var j=0; j < size; j++) {
            if (values[i][j] !=0) {
              row.push(values[i][j]);
            }
          }

          while(row.length < size) {
            row.push(0);
          }

          for (var j=0; j < size; j++) {
            if (row[j] == 0){
              j = size;
            } else if (row[j] == row[j+1]) {
              row[j] += row[j+1];
              row.splice(j+1, 1);
              row.push(0);
            }
          }

          values[i] = row;
      }

      addNewTile(values);
}


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

      addNewTile(values);
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

      addNewTile(values);
}
