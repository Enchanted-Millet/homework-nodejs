target = 100;
array1 = [1, 5, 25, 50];

function find2Solutions(array) {
  let solutions = [];

  while (solutions.length < 2) {
    let target = 100;
    let solution = [];
    while (target > 0) {
      let index = Math.floor(Math.random() * 4);
      target = target - array[index];
      solution.push(array[index]);
    }

    if (target === 0) {
      solutions.push(new Array(solution));
      if (
        solutions.length == 2 &&
        solutions[1].toString() === solutions[0].toString()
      ) {
        solutions.pop();
      }
    }
  }
  return solutions;
}
const answer = find2Solutions(array1);
console.log(answer[0].toString(), answer[1].toString());
