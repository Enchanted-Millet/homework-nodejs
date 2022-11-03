const arr1 = [1, 3, 50, 75];
lower1 = 0;
upper1 = 99; // if upper>=75, lower <= 0
//["2", "4->49", "51->74", "76->99"]

const arr2 = [3, 25, 26, 27, 75, 78];
lower2 = 2;
upper2 = 79; // if upper>=78, lower <= 0
//['2', '4 ->24', '28 ->74', '76 ->77', '79']

function intervels(arr, lower, upper) {
  let results = [];

  let first =
    lower < arr[0]
      ? `${lower}`
      : "" + lower === arr[0] - 1
      ? +`-> ${arr[0] - 1}`
      : "";
  if (first) {
    results.push(first);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      continue;
    }
    if (arr[i] + 1 === arr[i + 1] - 1) {
      results.push(`${arr[i] + 1}`);
      continue;
    }
    results.push(`${arr[i] + 1} ->${arr[i + 1] - 1}`);
  }
  if (upper > arr[arr.length - 1] + 1) {
    results.push(`${arr[arr.length - 1] + 1} -> ${upper}`);
  }
  if (upper === arr[arr.length - 1] + 1) {
    results.push(`${upper}`);
  }
  return results;
}

console.log(intervels(arr1, lower1, upper1));
console.log(intervels(arr2, lower2, upper2));
