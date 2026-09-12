// 1. Variables

// declare type and value in a single statement 

let name: string = "asad";
const age: number = 22;
let isActive: boolean = true;
let country = 'Qatar';
// console.log(country)

function greetUser(name: string, country: string): string {
    return `Hello , ${name}! you are accessing our content from ${country}`
}

let greeting = greetUser(name, country)
console.log(greeting)

// let keyword allows you to change its value but const doent allow you to alter

