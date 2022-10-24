class TwoSum {
    constructor() {
        this.numbers = [];
    }
    add(n) {
        this.numbers.push(n);
    }

    find(n) {
        const obj = {};
        for (let num of this.numbers) {
            if (num in obj) {
                return true;
            } else {
                obj[n - num] = num;
            }
        }
        return false;
    }

    remove(n) {
        let count = 0;
        // this.numbers = this.numbers.filter(num => {
        //     if (num === n) count++;
        //     return num !== n;
        // });
        let idx = 0;
        while (idx < this.numbers.length) {
            if (this.numbers[idx] === n) {
                count++;
                this.numbers.splice(idx, 1);
                // slice, splice
            } else {
                idx++;
            }
        }
        return count;
    }
}

const sol = new TwoSum();
sol.add(1);
sol.add(2);
sol.add(3);
sol.add(4);
sol.add(4);
sol.add(5);
console.log(sol.find(6));
console.log(sol.remove(4));
console.log(sol.numbers);
console.log(sol.find(8));
