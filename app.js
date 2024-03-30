// for (let i = 0; i <= 5; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 0; j <= i; j++) {
//         console.log(`   j is ${j}`);
//     }
// // }
// let count = 1;
// let max = parseInt(prompt("Welcome! Enter your max range"));
// while (!max) {
//     max = parseInt(prompt("Please enter the valid integer!!!"));
// }
// let guess_max = Math.floor((Math.random() * max) + 1);
// let guess = parseInt(prompt("Enter your guess"));
// while (!guess) {
//     guess = parseInt(prompt("Please enter the valid integer!!!"));
// }
// while (parseInt(guess) !== guess_max) {
//     if (guess > guess_max)
//         guess = prompt("Too high! Try again or press (q) to exit");
//     else if (guess < guess_max) {
//         guess = prompt("Too Low! Try again or press (q) to exit");
//     }
//     else if (guess === 'q') {
//         console.log("You pressed 'q' to quit the game"); break;
//     }
//     else
//         console.log('Please enter the valid integer or press (q) to exit');
//     count += 1;
// }
// if (guess !== 'q')
//     console.log(`You guess the secret number with ${count} attempts`)

// const people = [
//     ['Jatin', 'Rohan', 'Karan'],
//     ['Isha', 'Deepika', 'Varinder', 'Prabhjot'],
//     ['KK', 'Manpreet', 'Deshu']
// ];

// for (let person of people) {
//     console.log(person);
//     for (let name of person) {
//         console.log(name);
//     }
// }

// const employee = {
//     name: 'jatin',
//     address: '32 fellmore dr',
//     car: 'yes'
// }
// for (let v in employee) {
//     console.log(employee[v]);
// }
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log('------------------')
// for (let v of Object.keys(employee)) {
//     console.log(v)
// }

// for (let v of Object.values(employee)) {
//     console.log(v)
// }


// -----To Do list app------


// let item;
// let choice = prompt("What would you want to do? (add, remove, list or quit)");
// const toDoArray = [];
// while (choice !== 'quit' && choice !== 'q') {
//     choice = prompt("Choose action ---> add, remove, list, quit");
//     if (choice === 'add') {
//         item = prompt('Enter item to add');
//         toDoArray.push(item);
//         console.log(`${item} has added to the list`);
//     }
//     else if (choice === 'list') {
//         console.log('<------------------------->');
//         for (let value of toDoArray) {
//             console.log(`${toDoArray.indexOf(value)}: ${value}`);
//         }
//         console.log('<------------------------->');
//     }
//     else if (choice === 'remove') {
//         let index = prompt('Enter the index[ ] you want to remove');
//         console.log(`'${toDoArray[index]}' at index [${index}] is  removed from the list`);
//         toDoArray.splice(index, 1);
//         console.log(toDoArray);

//     }
// }

// Starting functions
// high order functions 
function isBetween(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
function callMe(func) {
    func();
    func();
}

function returnSomeThing() {
    console.log("Hello My name is jatin");
}

callMe(returnSomeThing);
// learning this keyword
const pet = {
    name: 'dog',
    color: 'black',
    bark() {
        console.log(`${this.name} is barking!!!`);
    }
}
// foreach, map, arrow function as a array method 
const arr = ['1', '2', '3'];
for (let ele of arr) {
    console.log(ele);
}

arr.forEach(function (ele) {
    console.log(`${ele} is the element in the arr array`);
})

let array = arr.map((ele) => {
    return ele * 2;
})
console.log(arr);
console.log(array);


let arrow = function (num) {
    return `${num} is in function expression`;
}
let arrow2 = (num) => {
    return `${num} is in arrow function`;
}
let arrow3 = num => {
    return `${num} is in arrow function with no brackets`;
}
let arrow4 = num => (
    `${num} is in arrow function with no return keyword`
)

let arrow5 = num => `${num} is in implicit arrow function`


// -----------------------------------------------------------------------
// Simple function expression 
let moreMusic01 = function (music) {
    return `${music} is new music`;
}
// Simple arrow function 
let moreMusic02 = (music) => {
    return `${music} is new music`;
}
// No parantheis arrow funtion 
let moreMusic03 = music => {
    return `${music} is new music`;
}
// Implicit arrow function 
let moreMusic04 = music => (
    `${music} is new music`
);
// one liner arrow function
let moreMusic05 = (music) => `${music} is new music`;
