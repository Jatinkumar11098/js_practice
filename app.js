const player1 = document.querySelector('.button-1');
const player2 = document.querySelector('.button-2');
const reset = document.querySelector('.button-3');
const score1 = document.querySelector('#scrOne');
const score2 = document.querySelector('#scrTwo');
const range = document.querySelector('#rangeSelect');
let counter1 = 0;
let counter2 = 0;

range.addEventListener('change', () => {
    let value = parseInt(range.value);
    console.log(typeof (value));
    console.log(value);

})
player1.addEventListener('click', () => {
    counter1++;
    score1.textContent = counter1;
})
player2.addEventListener('click', () => {
    counter2++;
    score2.textContent = counter2;
})

reset.addEventListener('click', () => {
    alert('btn three is clicked');
})
