// for (let i = 0; i <= 5; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 0; j <= i; j++) {
//         console.log(`   j is ${j}`);
//     }
// }
let count = 0;
let maxGuess = parseInt(prompt("WELCOME! Enter your max number"));
// console.log(typeof (maxGuess))
let random = Math.floor((Math.random() * maxGuess) + 1);
console.log(random)
let firstGuess = prompt("Enter your first guess!!");
// console.log(typeof (firstGuess));
while (maxGuess !== firstGuess) {
    if (firstGuess > maxGuess) {
        prompt("Too high");
    }
    else {
        prompt("Too low");
    }
    console.log('You win ')
}
