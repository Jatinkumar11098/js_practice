const player1 = document.querySelector('.button-1');
const player2 = document.querySelector('.button-2');
const reset = document.querySelector('.button-3');
const score1 = document.querySelector('#scrOne');
const score2 = document.querySelector('#scrTwo');
const range = document.querySelector('#rangeSelect');
let counter1 = 0;
let counter2 = 0;
let gameOver = false;
let value = 0;


player1.addEventListener('click', () => {
    if (!gameOver) {
        if (counter1 !== value) {
            counter1++;
        }
        else {
            gameOver = true;
            if (value !== 0 && counter1 !== 0) {
                score1.classList.add('text-success');
                score2.classList.add('text-danger');
            }
        }
    }
    score1.textContent = counter1;
})

player2.addEventListener('click', () => {
    if (!gameOver) {
        if (counter2 !== value) {
            counter2++;
        } else {
            gameOver = true;
            if (value !== 0 && counter2 !== 0) {
                score2.classList.add('text-success');
                score1.classList.add('text-danger');
            }

        }
    }
    score2.textContent = counter2;
})

range.addEventListener('change', () => {
    value = parseInt(range.value);
    resetFunc();

});

reset.addEventListener('click', resetFunc)

function resetFunc() {
    counter1 = 0;
    counter2 = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    gameOver = false;
    score2.classList.remove('text-success');
    score1.classList.remove('text-danger');
    score1.classList.remove('text-success');
    score2.classList.remove('text-danger');
}