class TwoSum {
    constructor() {
        this.numArr = []
    }
    add(num) {
        return this.numArr.push(num)
    }
    find(num) {
        for (let i = 0; i < this.numArr.length; i++) {
            for (let j = 0; j < this.numArr.length; j++) {
                if (num - this.numArr[i] === this.numArr[j] && i !== j) {
                    return true
                }
            }
            
        }
        return false
    }
    remove(num) {
        let count = 0
        for (let i = this.numArr.length; i > 0; i--) {
            if (this.numArr[i] === num) {
                this.numArr.splice(i, 1);
                count += 1
            }
        }
        return count
    }
    
} 

const twosum = new TwoSum()
twosum.add(1)
twosum.add(3)
twosum.add(3)
twosum.add(5)
twosum.add(3)
console.log(twosum.find(4))
console.log(twosum.find(7))

console.log(twosum.remove(3))
console.log(twosum.find(4))