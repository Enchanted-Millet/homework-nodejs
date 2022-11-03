const meeting1 = [
  [0, 30],
  [15, 20],
  [5, 10],
];
const meeting2 = [
  [0, 10],
  [15, 30],
  [35, 40],
  [50, 60],
];
function attendAllMeeting(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] > arr[i + 1][0]) {
      return false;
    }
  }
  return true;
}
console.log(attendAllMeeting(meeting1));
console.log(attendAllMeeting(meeting2));
