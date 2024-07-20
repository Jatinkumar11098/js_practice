const reset = document.querySelector('.button-3');
const range = document.querySelector('#rangeSelect');
let gameOver = false;
let value = 0;
const player1 = {
    counter1: 0,
    button: document.querySelector('.button-1'),
    display: document.querySelector('#scrOne'),


}
const player2 = {
    counter2: 0,
    button: document.querySelector('.button-2'),
    display: document.querySelector('#scrTwo')
}

player1.button.addEventListener('click', () => {
    player1.display.textContent = player1.counter1;
    if (!gameOver) {
        if (player1.counter1 !== value) {
            player1.counter1++;

        }
        else {
            gameOver = true;
            if (value !== 0 && player1.counter1 !== 0) {
                player1.display.classList.add('text-success');
                player2.display.classList.add('text-danger');
                player1.button.classList.add('disabled');
                player2.button.classList.add('disabled');
            }
        }
    }
})

player2.button.addEventListener('click', () => {
    player2.display.textContent = player2.counter2;
    if (!gameOver) {
        if (player2.counter2 !== value) {
            player2.counter2++;
        } else {
            gameOver = true;
            if (value !== 0 && player2.counter2 !== 0) {
                player1.display.classList.add('text-danger');
                player2.display.classList.add('text-success');
                player2.button.classList.add('disabled');
                player1.button.classList.add('disabled');

            }

        }

    }

})

range.addEventListener('change', () => {
    value = parseInt(range.value);
    resetFunc();

});

reset.addEventListener('click', resetFunc)

function resetFunc() {
    player1.counter1 = 0;
    player2.counter2 = 0;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    gameOver = false;
    score2.classList.remove('text-success');
    score1.classList.remove('text-danger');
    score1.classList.remove('text-success');
    score2.classList.remove('text-danger');
    player1.classList.remove('disabled');
    player2.classList.remove('disabled');
}