/*
You are given an array of  integers, , and a positive integer, . Find and print the number of  pairs where  and  +  is divisible by .

For example,  and . Our three pairs meeting the criteria are  and .

Function Description

Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array 
ar: an array of integers
k: the integer to divide the pair sum by
Input Format

The first line contains  space-separated integers,  and . 
The second line contains  space-separated integers describing the values of .

Constraints

Output Format

Print the number of  pairs where  and  +  is evenly divisible by .

Sample Input

6 3
1 3 2 6 1 2
Sample Output

 5
Explanation

Here are the  valid pairs when :


*/

function divisibleSumPairs(n, k, ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++ ) {
      let current = ar[i];
      
      for ( let j = i+1; j < ar.length; j++ ){
        let candidate = ar[j];
        if ( (current + candidate ) % k === 0 ) {
          sum++;
        }
      }
    }
  
  return sum;
  }
  
  console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));