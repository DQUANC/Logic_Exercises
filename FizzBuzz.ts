/**
- FizzBuzz
Write a function that prints the numbers from 1 to N. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".
 */

function FizzBuzz(N: number): void {
    for(let i: number = 0; i <= N; i++ ){
        if((i % 3) === 0){
            console.log(`Fizz`);
        } else if((i % 5) === 0){
            console.log(`Buzz`);
        } else {
            console.log(i);
        };
    };
};

FizzBuzz(25);