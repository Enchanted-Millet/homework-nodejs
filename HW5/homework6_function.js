// problem 1
// iterate the whole loop
function generateMatrix(n) {
    // special case
    if(n == 1) return [[1]] 
    var res = [];
    for (var i = 0; i < n; i++) {
        res[i] = [];
    }
    var circleNum = n - 1;
    var num = 1;
    var count = 0;
    while (circleNum) {
      var x = count;
      var y = count;
  
      var rect = n - (count * 2);
      if(rect == 1){
        res[y][x] = num
      }; 
  
      // up
      for(var i = 0; i < rect - 1; i++){
        res[y][x++] = num++;
      }
  
      // right
      for(var i = 0; i < rect - 1; i++){
        res[y++][x] = num++;
      }
  
      // down
      for(var i = 0; i < rect - 1; i++){
        res[y][x--] = num++;
      }
  
      // left
      for(var i = 0; i < rect - 1; i++){
        res[y--][x] = num++;
      }
  
      // record rounds
      circleNum--;

      count ++;
    }
    return res;
  };
  
  console.log(generateMatrix(4))