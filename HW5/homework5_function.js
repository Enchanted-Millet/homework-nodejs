// problem 1
function getSquareRoot(number){
    return Math.sqrt(number)
}
var number = 16
console.log(getSquareRoot(number))

// problem 2
// idea: go through each elements in array and count how many 1s to save in 'count' var. 
// if the current element becomes 0 then reset 'count' and update current_max
function consecutiveArray(arr){
    let arr_len = arr.length
    let current_max = 0
    let count = 0

    for (let i = 0; i < arr_len; i++) {
        if (arr[i] == 0)
            count = 0;


        else {
            count++
            current_max = Math.max(current_max, count);
        }
    }
    return current_max;
}

let arr = new Array(1,1,1,0,1,1,0,0,1,1,1,1)
console.log(consecutiveArray(arr))

// problem 3
// idea from https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/
function longestCommonPrefix(arr){
    let arr_len = arr.length
    // special case
    if (arr_len == 0)
        return "";
    if (arr_len == 1)
        return arr[0];

    arr.sort();
   
    /* find the minimum length from first and last string */
    let end = Math.min(arr[0].length, arr[arr_len - 1].length);
   
    /* find the common prefix between the first and
           last string */
    let i = 0;
    while (i < end && arr[0][i] == arr[arr_len - 1][i])
        i++;
   
    let common = arr[0].substring(0, i);
    if (common.length > 0)
        return common;
    else
        return -1
      
}

let input = ["apple", "ape", "app"]
console.log(longestCommonPrefix(input))

// problem 4
function fizzBuzz(n){

    let arr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 != 0)
            arr.push('Fizz');
        if (i % 3 != 0 && i % 5 == 0)
            arr.push('Buzz')
        if (i % 3 == 0 && i % 5 == 0)
            arr.push('FizzBuzz')
        // if I use 'else' instead of another 'if' statement here,
        // why it will also print out 5, 3 and 15?
        if (i % 3 != 0 && i % 5 != 0)
            arr.push(i)
        }

    
    return arr;

}
console.log(fizzBuzz(15))