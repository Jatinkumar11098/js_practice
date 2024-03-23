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
function callMe(func) {
    func();
    func();
}

function returnSomeThing() {
    console.log("Hello My name is jatin");
}

callMe(returnSomeThing); 