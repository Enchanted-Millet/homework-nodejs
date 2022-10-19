const calStr = (str) => {
    let val = 0
    for (i = 0; i < str.length; i++) {
        val += str.charCodeAt(i) - 96
    }
    return val
}

const calInput = (str) => {
    let result = {}
    let arr = str.trim().split(/\s+/);
    for (let i = 0; i < arr.length; i++) {
        if (result[calStr(arr[i])] === undefined) {
            result[calStr(arr[i])] = [arr[i]]
        } else {
            result[calStr(arr[i])].push(arr[i])
        }
        
    }
    return result
}

console.log(calInput('   abc cde   adb   dfb def ee     abcd cc  '))