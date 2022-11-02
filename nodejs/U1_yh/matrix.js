const spiralArray = (n) => {
  let sprArray = new Array(n);
  for (let i = 0; i < n; i++) {
    sprArray[i] = new Array(n);
  }
  let number = 1;
  //start and end decide on each side of a square, where to start and end
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    //x,y decide each round of square's boundary and size
    let x = start;
    let y = end;
    for (let i = start; i <= end; i++) {
      sprArray[x][i] = number++;
      if (i === end) {
        start++;
        for (let j = start; j <= end; j++) {
          sprArray[j][y] = number++;
          if (j === end) {
            start--;
            end--;
            for (let i = end; i >= start; i--) {
              sprArray[y][i] = number++;
              if (i === start) {
                start++;
                for (let j = end; j >= start; j--) {
                  sprArray[j][x] = number++;
                }
              }
            }
          }
        }
      }
    }
  }
  return sprArray;
};

export default spiralArray;
