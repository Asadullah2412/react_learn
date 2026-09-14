// functions 

// function functionName(parameters): returnType {
//     // function body
// }


// 1. Named Function

function add(num1: number, num2: number): number {
    return num1 + num2

}

let sum_2 = add(3, 4)

console.log(sum_2)



// 1.  Anonymous Function

const subtract = function (num1: number, num2: number): number {
    return num1 - num2

}

console.log(subtract(5, 2))


// Arrow functions

const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 5));


// Rest parameters 
function average(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return numbers.length === 0 ? 0 : total / numbers.length;
}

console.log("Average of the given numbers is:", average(10, 20, 30, 60));
console.log("Average of the given numbers is:", average(5, 6));
console.log("Average of the given numbers is:", average(4));