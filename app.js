// for (let i = 0; i <= 5; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 0; j <= i; j++) {
//         console.log(`   j is ${j}`);
//     }
// }
let count = 0;
let max = parseInt(prompt("Welcome, Enter your max"));
while (!max) {
    max = parseInt(prompt("Please enter the valid integer!!!"));
}
let guess_max = Math.floor((Math.random() * max) + 1);
let guess = parseInt(prompt("Enter your guess"));
while (parseInt(guess) !== guess_max) {
    if (guess > guess_max)
        guess = prompt("Too high!!, Try again");
    else if (guess < guess_max) {
        guess = prompt("Too Low, Try again!!");
    }
    else if (guess === 'q') {
        console.log("You quit"); break;
    }
    count += 1;
}
if (guess !== 'q')
    console.log(`You got right answer with ${count} times`)