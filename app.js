const reset = document.querySelector('.button-3');
const range = document.querySelector('#rangeSelect');
let gameOver = false;
let value = 0;
const player1 = {
    counter: 0,
    button: document.querySelector('.button-1'),
    display: document.querySelector('#scrOne'),


}
const player2 = {
    counter: 0,
    button: document.querySelector('.button-2'),
    display: document.querySelector('#scrTwo')
}
function updateScore(player, opponent) {
    player.display.textContent = player.counter;
    if (!gameOver) {
        if (player.counter !== value) {
            player.counter++;

        }
        else {
            gameOver = true;
            if (value !== 0 && player.counter !== 0) {
                player.display.classList.add('text-success');
                opponent.display.classList.add('text-danger');
                player.button.classList.add('disabled');
                opponent.button.classList.add('disabled');
            }
        }
    }
}

player1.button.addEventListener('click', () => { updateScore(player1, player2); })

player2.button.addEventListener('click', () => { updateScore(player2, player1); })

range.addEventListener('change', () => {
    value = parseInt(range.value);
    resetFunc();

});

reset.addEventListener('click', resetFunc)

function resetFunc() {
    player1.counter = 0;
    player2.counter = 0;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    gameOver = false;
    player1.display.classList.remove('text-success');
    player1.display.classList.remove('text-danger');
    player2.display.classList.remove('text-success');
    player2.display.classList.remove('text-danger');
    player1.button.classList.remove('disabled');
    player2.button.classList.remove('disabled');
}