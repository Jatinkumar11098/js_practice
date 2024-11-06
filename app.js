// const reset = document.querySelector('.button-3');
// const range = document.querySelector('#rangeSelect');
// let gameOver = false;
// let value = 0;
// const player1 = {
//     counter: 0,
//     button: document.querySelector('.button-1'),
//     display: document.querySelector('#scrOne'),
// const fakeCallBackFunction = (url, success, failure) => {
//     const rand = Math.floor(Math.random() * 10) + 1;
//     console.log(rand);
//     setTimeout(() => {
//         if (rand > 4) {
//             failure('Unsuccessful');
//         }
//         else
//             success('Successful');
//     }, 2000)
// }

// fakeCallBackFunction('Books/home', (data) => {
//     console.log("You got the data!!!", data);
// }, (err) => {
//     console.log('Sorry', err);
// })

// const fakeCallBackFunction = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random() * 10) + 1;
//         console.log(rand);
//         setTimeout(() => {
//             if (rand > 4) {
//                 reject('Unsuccessful');
//             }
//             else
//                 resolve('Successful');
//         }, 2000)
//     })

// }

// fakeCallBackFunction('Books/home')
//     .then((data) => {
//         console.log('you got the data !!!', data);
//     })
//     .catch((err) => {
//         console.log('Sorry!!', err);
//     })




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


// const fakePromiseRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random() * 4500) + 1000;
//         console.log(rand);
//         setTimeout(() => {
//             if (rand < 4500) {
//                 console.log('Successful!!');
//                 resolve('Well connected!!');
//             }
//             reject('Sorry, connection lost !!')
//         }, 1000)

//     })
// }

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

// async function fakecall() {
//     try {
//         let req = await fakePromiseRequest('books/page1')
//         let req2 = await fakePromiseRequest('books/page2')
//     } catch (e) {
//         console.log(e);
//     }
// }

// -----------------------------------------------------------------------------------------------------------------



// fetch('https://swapi.dev/api/people/1/') //fetch returns the promise so we r using .then() and data will store the info of the fetched data
//then we r using .json() which returns the promise also so d will have the data for the people 1  
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then(d => {
//         console.log('json done!', d)
//         console.log(d.name)
//     })
//     .catch(e => {
//         console.log(`Error => ${e}`)
//     })

// const movies = async () => {
//     axios.get('https://swapi.dev/api/people/1/')
//         .then((res) => {
//             console.log(res);
//             console.log(res.data)
//         })
// const value = await fetch('https://swapi.dev/api/people/1/')
// const data = await value.json();
// console.log(value);
// console.log(data);
// }

// movies()

//Dad jokes API 
// https://icanhazdadjoke.com/
// const btn = document.querySelector('#btn');
// const container = document.querySelector('#container')
// const dadJokes = async () => {
//     const jokes = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
//     const li = document.createElement('li');
//     li.innerText = jokes.data.joke;
//     container.append(li);
// }
// btn.addEventListener('click', dadJokes);





// API for the TV show search

// https://api.tvmaze.com/search/shows?q=girls

// const form = document.querySelector('#searchForm')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = form.elements.query.value;
//     searchData(value);
// })

// async function searchData(value) {
//     axios.get(`https://api.tvmaze.com/search/shows?q=${value}`)
//         .then((res) => {
//             createImg(res.data);
//         })
// }
// async function createImg(imgUrls) {

//     for (img of imgUrls) {
//         const container = document.querySelector('#container')
//         const imgTag = document.createElement('img');
//         imgTag.src = img.show.image.medium;
//         container.append(imgTag);
//     }
// }
//object prototypes
// const arr = [1, 2, 3];
// Array.prototype.yell = () => {
//     alert('Dont try to comunicate with me!!')
// }

// arr.yell();

// X, Y, Z, X + Y, X + Z, Y + Z, X + Y + Z
// clash of code 

// const arr = [2, 2, 11, 4, 9, 7, 9];
// const [x, y, z] = arr;
// const p = parseInt(z) - (parseInt(x) + parseInt(y));
// console.log(`x = ${x}, y = ${y}, z=${p}`);

// const values = '2 2 11 4 9 7 9';
// console.log(parseInt(values.split('')));

// https://api.tvmaze.com/search/people?q=lauren
// fetch('https://api.tvmaze.com/search/people?q=lauren', { headers: { accept: 'application/json' } })
//     .then((res) => {
//         console.log('Success');
//         console.log(res)
//         res.json()
//             .then((data) => {
//                 console.log('inside .json')
//                 console.log(data)
//             })
//     })


// const NUM = parseInt(readline());
// let s = '';
// for (let i = 3; i <= 3; --i) {
//     for (let j = 0; j < i; j++) {
//         s += '* ';
//         console.log(s);
//     }
//     console.log('\n');
// }


// let i, j, n = 4;

// for (i = 0; i < n; i++) {
//     let s = '';
//     for (j = n; j > i; j--) {
//         s += '* ';
//     }
//     console.log(s)
// }
// let n = 3;
// for (let i = 0; i < n; i++) {
//     let pattern = '';
//     for (let j = 0; j < n; j++) {
//         if (j < i) {
//             pattern += '. ';
//         } else {
//             pattern += '* ';
//         }


//     }
//     console.log(pattern)
// }

// const arr = [];
// let n = 6;
// for (let i = 0; i < 10; i++) {
//     if (n % i === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr.sort((a, b) => b - a));

// let string = 'my name is jatin';
// let res = string.split(' ').map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// });
// console.log(res.join(' '))
// let n = 5;
// let pattern = '';
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (j == i || j == 1 || i == n) {
//             pattern += '* ';
//         } else {
//             pattern += '- ';
//         }

//     }
//     pattern += '\n';
// }
// console.log(pattern);
// function print(sym, string, num) {
//     let pattern = '';
//     for (let i = 1; i <= num; i++) {
//         let r = sym.repeat(num + string.length);
//         console.log(r + '\n');
//     }
//     for (let j = 1; j <= num; j++) {
//         pattern += sym;
//     }
//     pattern += string;
//     for (let j = 1; j <= num; j++) {
//         pattern += sym;
//     }
//     console.log(pattern);
//     for (let i = 1; i <= num; i++) {
//         let r = sym.repeat(num + string.length);
//         console.log(r + '\n');
//     }

// }

// print('$', 'ok', 1);
// print('$', 'white', 1)

// const N = parseInt(readline());
// let N = 5;
// let pattern = '';
// for (let i = 1; i <= N; i++) {
//     for (let j = N; j >= i; j--) {
//         pattern += N;
//     }
//     pattern += '\n';
// }
// console.log(pattern);



// using factory function 

// function color(r, g, b) {

//     const values = {};
//     values.r = r;
//     values.g = g;
//     values.b = b;
//     values.rgb = function () {
//         const { r, g, b } = this;
//         return (`${r},${g},${b}`);
//     }
//     return values;
// }




// using consctructor function
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }
// const color1 = new Color(255, 0, 0);
// const color2 = new Color(255, 255, 0);


// using classes

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRgb() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        return `rgb(${this.innerRgb()})`;
    }
    rgba(a = 1.0) {
        return `rgb(${this.innerRgb()}, ${a})`;
    }
}

const color1 = new Color(255, 255, 255);
const color2 = new Color(255, 0, 0);