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


// 2. Data types

// array

const arr: (string | number)[] = ['lala', 1, 'mama'];
console.log(arr)



enum Status {
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 2,
    Cancelled = "CANCELLED"
}

let currentStatus: Status = Status.Active;
console.log(currentStatus);

let cancelledStatus: Status = Status.Cancelled;
console.log(cancelledStatus);