/**
    Check Palindrome
Write a function that takes a string and returns true if it’s a palindrome (reads the same forward and backward), 
ignoring spaces and capitalization.

Example:

"Racecar" → true

"Hello" → false
 */

let word: string = "RaceCar";
let word1: string = "Hello";
let word2: string = "kaYak";
let word3: string = "CalL";

function reverseString(toCheck: string): string{
    const loweWord = toCheck.toLowerCase();
    return loweWord.split("").reverse().join("");
};

function checkPalindrome(reversedWord: string, toCheck: string): boolean {
    const loweWord = toCheck.toLowerCase();
    if(reversedWord == loweWord){
        console.log("TRUE");
        return true;
    } else {
        console.log("FALSE");
        return false;
    }
};

checkPalindrome(reverseString(word), word);

checkPalindrome(reverseString(word1), word1);

checkPalindrome(reverseString(word2), word2);

checkPalindrome(reverseString(word3), word3);