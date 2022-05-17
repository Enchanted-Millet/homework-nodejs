class TwoSum {
    constructor() {
        this.num = [];
    }
    add(x) {
        this.num.push(x);
    }

    find(x) {
        let len = this.num.length
        let input = this.num 
        let check = false

        for (let i = 0; i < len; i++) {
            for (let j = i+1; j < len; j++) {
                if (input[i] + input[j] === x) check = true
            }
        }
        return check
    }

    remove(x) {
        // console.log(this.num)
        let input = this.num
        let len = input.length // original length 
        let res = input.filter(i => i !== x)
        this.num = res // update the data
        // console.log(this.num)
        return len - this.num.length // return # of removed occurance
    }
}
