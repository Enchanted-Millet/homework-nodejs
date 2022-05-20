// Homework #3
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// function meetingSchedule(arr){
//     for (let i = 0; i < arr.length-1; i++){
//         if (arr[i][1] > arr[i+1][0]) return false;
//     }
//     return true;
// }

// console.log(meetingSchedule([[0, 30],[5, 10],[15, 20]]));
// console.log(meetingSchedule([[0, 5],[5, 10],[15, 20]]));




// Homework #4
// Missing Ranges
// Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

// function missingRanges (arr, lower, upper){
//     let ans = [];
//     if (lower < arr[0]-1) {
//         arr.push(lower + "->" + arr[0]-1);
//     }
//     for (let i = 0; i < arr.length -1; i++){
//         if(arr[i]+1 < arr[i+1]-1){
//             ans.push((arr[i]+1).toString() + "->" + (arr[i+1]-1).toString());
//         }
//         else if(arr[i]+1 === arr[i+1]-1){
//             ans.push((arr[i]+ 1).toString());
//         }
//     }
//     if (upper > arr[arr.length-1]) {
//         ans.push((upper).toString() + "->" +(arr[arr.length - 1]).toString());
//     }
//     return ans;
// }
// console.log(missingRanges([0,1,3,50,75],0,99));



// Homework #5
// Given two strings S and T, determine if they are both one edit distance apart.
// function stringDifference (s,t){
//     let length = Math.max(s.length,t.length);
//     let i = 0;
//     let count = 0;
//     while (i < length) {
//         if(s[i] !== t[i]) count++;
//         if(count > 1) return false;
//         i++;
//     }
//     if(count === 0) return false;
//     else return true;
// }

// console.log(stringDifference('abs','abc'));
// console.log(stringDifference('abs','abcd'));
// console.log(stringDifference('abc','abcd'));





// Homework #6
// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
// function shortestDistance(arr,word1,word2){
//     let arr1 = [];
//     let arr2 = [];
//     arr.forEach(function(element){
//         if(element === word1) {
//             arr1.push(arr.indexOf(element));
//         }
//     });
//     arr.forEach(function(element){
//         if(element === word2) {
//             arr2.push(arr.indexOf(element));
//         }
//     });
//     let ans = arr.length;
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr1.length; j++){
//             if(Math.abs(arr1[i]-arr2[j])<ans){
//                 ans = Math.abs(arr1[i]-arr2[j]);
//             }
//         }
//     }
//     return ans;
// }

// console.log(shortestDistance( ["practice", "makes", "perfect", "coding", "makes"],"coding","practice"));
// console.log(shortestDistance( ["practice", "makes", "perfect", "coding", "makes"],"makes","practice"));