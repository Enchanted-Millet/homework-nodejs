function pickCoins() {
    const result = [];
    for (let fifty = 0; fifty < 2; fifty++) {
        for (let twentyFive = 0; twentyFive < 4; twentyFive++) {
            for (let five = 0; five < 20; five++) {
                for (let one = 0; one < 49; one++) {
                    if (
                        fifty + twentyFive + five + one === 48 &&
                        fifty * 50 + twentyFive * 25 + five * 5 + one === 100
                    ) {
                        result.push([fifty, twentyFive, five, one]);
                    }
                }
            }
        }
    }
    return result;
}

function pickCoinsDFS(target = 100, count = 48) {
    const ans = [];
    const coins = [50, 25, 5, 1];
    const dfs = (
        moneyLeft = target,
        countLeft = count,
        level = 0,
        sol = []
    ) => {
        if (level === 3) {
            //! has to be equal since here it needs to make sure we get all count left with 1 cent
            if (moneyLeft === countLeft) {
                sol[level] = moneyLeft;
                ans.push(sol);
            }
            return;
        }

        for (let i = 0; i <= Math.floor(moneyLeft / coins[level]); i++) {
            sol[level] = i;
            dfs(moneyLeft - i * coins[level], countLeft - i, level + 1, [
                ...sol
            ]);
        }
    };

    dfs();
    return ans;
}

function pickCoinsDFS2(target = 100, totalCount = 8) {
    const ans = [];
    const dfs = (
        moneyLeft = target,
        level = 0,
        sol = [0, 0, 0, 0],
        duplicate = new Set()
    ) => {
        if (moneyLeft < 0) {
            return;
        }
        if (level === totalCount) {
            if (moneyLeft === 0) {
                if (!duplicate.has(sol.toString())) {
                    ans.push(sol);
                    duplicate.add(sol.toString());
                }
            }
            return;
        }
        sol[0]++;
        dfs(moneyLeft - 50, level + 1, [...sol], duplicate);
        sol[0]--;
        sol[1]++;
        dfs(moneyLeft - 25, level + 1, [...sol], duplicate);
        sol[1]--;
        sol[2]++;
        dfs(moneyLeft - 5, level + 1, [...sol], duplicate);
        sol[2]--;
        sol[3]++;
        dfs(moneyLeft - 1, level + 1, [...sol], duplicate);
        sol[3]--;
    };
    dfs();
    return ans;
}

console.log(pickCoinsDFS2());

// console.log('1. With brute force');
// console.time();
// console.log('result is', pickCoins());
// console.timeEnd();
// console.log('');

// console.log('2. With DFS recursion');
// console.time();
// console.log('result is', pickCoinsDFS());
// console.timeEnd();
