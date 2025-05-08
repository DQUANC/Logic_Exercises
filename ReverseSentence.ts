/**
 
- Reverse Words in a Sentence
Given a sentence, reverse the order of the words.

Example:
Input: "hello world from typescript"
Output: "typescript from world hello" 
 
 */

function reverseSentence(sentence: string): string{
    let splited: string[] = sentence.split(' ');
    let reversed: string = splited.reverse().join(' ');
    return reversed;
}

const Input: string = "hello world from typescript";

console.log(Input,'-- -- -- -- -- >' ,reverseSentence(Input));