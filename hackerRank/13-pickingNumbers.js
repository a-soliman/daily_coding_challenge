/**
 Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to . For example, if your array is , you can create two subarrays meeting the criterion:  and . The maximum length subarray has elements.

Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

pickingNumbers has the following parameter(s):

a: an array of integers
Input Format

The first line contains a single integer , the size of the array . 
The second line contains  space-separated integers .

Constraints

The answer will be .
Output Format

A single integer denoting the maximum number of integers you can choose from the array such that the absolute difference between any two of the chosen integers is .

Sample Input 0

6
4 6 5 3 3 1
Sample Output 0

3
Explanation 0

We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e.,  and ), so we print the number of chosen integers, , as our answer.

Sample Input 1

6
1 2 2 3 1 2
Sample Output 1

5
Explanation 1

We choose the following multiset of integers from the array: . Each pair in the multiset has an absolute difference  (i.e., , , and ), so we print the number of chosen integers, , as our answer.
 */

function pickingNumbers(a) {
    let hash = {};
    a.forEach(num => {
      if ( !hash[num] ) {
        hash[num] = [
          getLower(num, a),
          getHeigher(num, a)
        ];
      }
    });
    
    let result = getLongestSub(hash);
    return result;
  }
  
  function getHeigher(num, a) {
      let count = 0;
      a.forEach(item => {
        if ( item >= num && item - num <= 1 ) count++;
      });
    return count;
  }
  
  function getLower(num, a) {
    let count = 0;
    a.forEach(item => {
      if ( num >= item && num - item <= 1 ) count++;
    });
    return count;
  }
  
  function getLongestSub(hash) {
    let result = 0;
    
    for ( let key in hash ) {
      let current = hash[key];
      current.forEach(item => {
         if ( item > result ) result = item;
      });
    }
    return result;
  }
  console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));