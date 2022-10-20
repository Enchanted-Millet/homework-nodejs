class TwoSum {
  constructor(num, sum) {
    this.arr = [];
  }
  add(num) {
    this.arr.push(num);
  }
  print() {
    console.log(this.arr.toString());
  }
  find(sum) {
    let isFind = false;
    let set = new Set();
    for (let num of this.arr) {
      let pairNum = sum - num;
      if (set.has(pairNum)) {
        console.log(`a pair of ${pairNum}, ${num} is in this array`);
        set.delete(pairNum);
        isFind = true;
      } else {
        set.add(num);
      }
    }
    return isFind;
  }
  remove(n) {
    let l = this.arr.length;
    let updatedArr = this.arr.filter((num) => num !== n);
    this.arr = [...updatedArr];
    console.log(`has removed ${l - this.arr.length} of ${n}`);
    return l - this.arr.length;
  }
}
const ts = new TwoSum();
ts.add(1);
ts.add(3);
ts.add(4);
ts.add(8);
ts.add(5);
ts.add(2);
ts.add(3);
ts.add(2);
ts.add(1);
ts.add(5);
ts.add(5);
ts.print();
ts.find(7);
ts.remove(3);
