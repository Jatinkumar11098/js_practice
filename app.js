// for (let i = 0; i <= 5; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 0; j <= i; j++) {
//         console.log(`   j is ${j}`);
//     }
// }
let count = 0;
let max = parseInt(prompt("Welcome, Enter your max"));
let guess_max = Math.floor((Math.random() * max) + 1);
let guess = parseInt(prompt("Enter your guess"));
while (guess !== guess_max) {
    if (guess > max)
        guess = parseInt(prompt("Too high!!, Try again!!"));
    else {
        guess = parseInt(prompt("Too Low, Try again!!"));
    }
    count += 1;
}
console.log(`You got right answer with ${count} times`)