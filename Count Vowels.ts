/**
- Count Vowels
Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

Example:
Input: "typescript" → Output: 3 
*/

const word: string = "hol";
const vowels: string[] = ["a", "e", "i", "o", "u"];
/*
function countVowels(wordToCheck: string, vowels: string[]): number{
    let wordLower: string = wordToCheck.toLocaleLowerCase();
    let str: string[] = wordLower.split('');
    let N: number = str.length;
    let counter = 0
    for(let i: number = 0; i <= N; i++){
        if(str[i] === vowels[0]){
            counter++
        } else if(str[i] === vowels[1]){
            counter++
        } else if(str[i] === vowels[2]){
            counter++
        } else if(str[i] === vowels[3]){
            counter++
        } else if(str[i] === vowels[4]){
            counter++
        } else if(str[i] === vowels[5]){
            counter++
        };
    };
    return counter;
};
*/
function countVowels(str: string): number {
    const vowels = 'aeiou';
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(`The word contains: `, countVowels(word));