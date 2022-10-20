TOTAL_NUM = 100;
coins = [50, 25, 5, 1];

function find2Solutions() {
  let solutions = [];
  helper(0, 100, [0, 0, 0, 0], solutions);
  return solutions;
}
function helper(startIndex, target, sol, solutions) {
  if (startIndex === 3) {
    sol[startIndex] =
      TOTAL_NUM - sol[0] * coins[0] - sol[1] * coins[1] - sol[2] * coins[2];
    let tempSum = sol[0] + sol[1] + sol[2] + sol[3];
    if (tempSum === 48) {
      let copySol = [...sol];
      solutions.push(copySol);
    }
    return;
  }
  //j is coins index
  for (let j = startIndex; j < coins.length - 1; j++) {
    //i is number of coins[j]
    for (let i = 0; i < target / coins[j]; i++) {
      sol[j] = i;
      helper(j + 1, target - coins[j] * i, sol, solutions);
      if (solutions.length === 2) break;
    }
  }
}

const solutions = find2Solutions();
console.log(solutions[0].toString());
console.log(solutions[1].toString());
