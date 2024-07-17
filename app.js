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
    let gameOver = false;

    player1.addEventListener('click', () => {
        if (!gameOver) {
            if (counter1 < value) {
                counter1++;
            }
            else {
                gameOver = true;
                console.log('gameover')
            }
        }
        score1.textContent = counter1;
    })

    player2.addEventListener('click', () => {
        if (!gameOver) {
            if (counter2 < value) {
                counter2++;
            } else {
                gameOver = true;
            }
        }
        score2.textContent = counter2;
    })
})





reset.addEventListener('click', () => {
    counter1 = 0;
    counter2 = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    gameOver = false;


})
