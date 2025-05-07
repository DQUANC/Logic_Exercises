/**
 Find Missing Number
Given an array of integers from 1 to N, where one number is missing, write a function to find the missing number.

Example:
Input: [1, 2, 4, 5, 6]
Output: 3 
 */

function findMissingNumber(arr: number[]): number {
    const n = arr.length + 1;  // because one number is missing
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
const inputArray = [1, 2, 4, 5, 6];
const missing = findMissingNumber(inputArray);
console.log(`Missing number is: ${missing}`);  // Output: 3
