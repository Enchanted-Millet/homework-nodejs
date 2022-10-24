//1(0,0) 2(0,1) 3(0,2) 4(0,3)
//12(1,0) 13(1,1) 14(1,2) 5(1,3)
//11(2,0) 16(2,1) 15(2,2) 6(2,3)
//10(3,0) 9(3,1) 8(3,2) 7(3,3)

const y = 4;
function spiralArray(n) {
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
}
const square3 = spiralArray(3);
const square4 = spiralArray(4);
console.log(square3[0]);
console.log(square3[1]);
console.log(square3[2]);
console.log(square4[0]);
console.log(square4[1]);
console.log(square4[2]);
console.log(square4[3]);
