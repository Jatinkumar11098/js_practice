// const reset = document.querySelector('.button-3');
// const range = document.querySelector('#rangeSelect');
// let gameOver = false;
// let value = 0;
// const player1 = {
//     counter: 0,
//     button: document.querySelector('.button-1'),
//     display: document.querySelector('#scrOne'),


// }
// const player2 = {
//     counter: 0,
//     button: document.querySelector('.button-2'),
//     display: document.querySelector('#scrTwo')
// }
// function updateScore(player, opponent) {
//     player.display.textContent = player.counter;
//     if (!gameOver) {
//         if (player.counter !== value) {
//             player.counter++;

//         }
//         else {
//             gameOver = true;
//             if (value !== 0 && player.counter !== 0) {
//                 player.display.classList.add('text-success');
//                 opponent.display.classList.add('text-danger');
//                 player.button.classList.add('disabled');
//                 opponent.button.classList.add('disabled');
//             }
//         }
//     }
// }

// player1.button.addEventListener('click', () => { updateScore(player1, player2); })

// player2.button.addEventListener('click', () => { updateScore(player2, player1); })

// range.addEventListener('change', () => {
//     value = parseInt(range.value);
//     resetFunc();

// });

// reset.addEventListener('click', resetFunc)

// function resetFunc() {
//     player1.counter = 0;
//     player2.counter = 0;
//     player1.display.textContent = 0;
//     player2.display.textContent = 0;
//     gameOver = false;
//     player1.display.classList.remove('text-success');
//     player1.display.classList.remove('text-danger');
//     player2.display.classList.remove('text-success');
//     player2.display.classList.remove('text-danger');
//     player1.button.classList.remove('disabled');
//     player2.button.classList.remove('disabled');
// }

// const movies = (url, success, failure) => {
//     const delayTime = Math.floor(Math.random() * 4000) + 500;
//     console.log(delayTime)
//     if (delayTime > 4000) {
//         failure(url);
//     } else {
//         success(url);
//     }
// }

// movies('books.com', (response) => {
//     console.log(`Congo!! its working, Here is your data from the ${response}`)
// }, (err) => {
//     console.log(`Error!!, Can't fetch your data from the ${err}`)
// })
// const colorDelay = (color, delay, resolve) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         resolve && resolve();
//     }, delay)
// }

// colorDelay('red', 1000, () => {
//     colorDelay('blue', 1000, () => {
//         colorDelay('green', 1000,)
//     })
// })

//Using promise


// const fakePromise = (color, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve('color changed');
//         }, delay)
//     })
// }

// fakePromise('red', 1000)
//     .then(() => {
//         fakePromise('blue', 1000)
//     }
//     )


const fakePromiseRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random() * 4500) + 1000;
        console.log(rand);
        setTimeout(() => {
            if (rand < 4500) {
                console.log('Successful!!');
                resolve('Well connected!!');
            }
            reject('Sorry, connection lost !!')
        }, 1000)

    })
}

// fakePromiseRequest('books/page1')
//     .then(() => {
//         console.log('Page 1 is successfully loaded !!')
//         return fakePromiseRequest('books/page2')
//     })
//     .then(() => {
//         console.log('Page 2 is successfully loaded !!')
//         return fakePromiseRequest('books/page3')
//     })
//     .then(() => {
//         console.log('Page 3 is successfully loaded !!')
//         return fakePromiseRequest('books/page4')
//     })
//     .catch(() => {
//         console.log('request failed!!')
//     })

async function fakecall() {
    try {
        let req = await fakePromiseRequest('books/page1')
        let req2 = await fakePromiseRequest('books/page2')
    } catch (e) {
        console.log(e);
    }
}
