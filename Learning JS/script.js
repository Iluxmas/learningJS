'use strict';
// const fruits = "Some fruits";
// console.log(fruits.indexOf("fruits")); //5

// const logg = "Hello world";
// console.log(logg.slice(1, 8)); // ello wo
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const test = '12.5px';
// console.log(parseFloat(test));


// function first() {
//     //do smth
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`YA uchu: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Ya proshel urok');
// }

// learnJS('JScript', done());


// const options = {
//     name: "alex",
//     age: 34,
//     sex: 'male',
//     isGay: true,
//     carColors: {
//         integra: 'yellow',
//         prelude: 'black'
//     },
//     makeTest: function() {
//         console.log("Alex gaylord");
//     }
// };
// const {name, isGay} = options;
// console.log(name + isGay);


// console.log(Object.keys(options).length);
// options.makeTest();

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(i + ': имеет значение ' + options[key][i]);
//             counter++;
//         }
//     } else {
//     console.log(key + ': имеет значение ' + options[key]);
//     counter++;
//     }
// };
// console.log(counter);


// let arr = [0, 1, 1, 2, 3, 5, 8]
// arr.push(13);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let val of arr) {
//     console.log(val);
// }
// arr.forEach(console.log());
// arr = arr.map(el => el * 2);
// console.log(arr);
// // arr.forEach(function(item, i, arr) {
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });

// let obj1 = {
//     a: 1,
//     b: 10,
//     c: 18,
//     d: {
//         z: 14,
//         x: 88
//     }
// };
// let copyObj = Object.assign({}, obj1);
// console.log(copyObj);
// console.log(obj1);

// let trueCopy = JSON.parse(JSON.stringify(obj1));
// trueCopy.d.z += 199;
// console.log(trueCopy);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'allah';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'redtube'],
//     blogs = ['fb', 'insta', 'tiktok'];

//     internet = [...video, ...blogs];
//     console.log(internet);

// // Урок 23, ООП 

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello!');
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100
// // };

// // john.__proto__ = soldier; <-- устаревшая форма

// // Object.setPrototypeOf(john, soldier);

// // console.log(john.armor);
// john.sayHello();


// // Urok 26 dinamich tipizaciya
// //1
// console.log(String(null));
// //2
// console.log(typeof (5 + ''));

// // To number
// console.log(typeof (Number('4')));
// console.log(typeof (+'5'));
// console.log(typeof (parseInt("15px", 10)));

// // To boolean

// // 0, '', null, undefined, NaN; // <- false

// // YPOK 34
// //touchstart
// //touchmove
// //touchend
// //touchenter
// //touchleave
// //touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//         console.log('start');
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//         console.log(e.targetTouches[0].pageX);
//     });

//     // box.addEventListener('touchend', (e) => {
//     //     e.preventDefault();
//     //     console.log('END');
//     // });

// });

// // touches
// // targetTouches
// // changedTouches

// YPOK 028

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'), // psevdomassiv
//     circles = document.getElementsByClassName('circle'), // HTML collection
//     wrapper = document.querySelector('.wrapper'),
//     hearts = wrapper.querySelectorAll('.heart'),
//     oneHeart = wrapper.querySelector('.heart');

// // console.dir(box);
// // box.style.backgroundColor = 'brown';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: pink; width: 600px';

// btns[1].style.borderRadius = '100%';
// circles[2].style.backgroundColor = 'red';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'green';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'purple';
// });

// // YPOK 29

// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');

// div.classList.add('black');
// wrapper.append(div); // добавить элемент  в блок wrapper в конец
// // wrapper.appendChild(div);

// // wrapper.prepend(div); // добавить элемент  в блок wrapper в начало

// // hearts[0].after(div); // добавить после элемента 
// // hearts[0].before(div); // добавить до элемента

// // wrapper.insertBefore(div, hearts[0]);

// // circles[0].remove(); // удалить элемент
// // wrapper.removeChild(hearts[1]);

// // hearts[2].replaceWith(circles[0]);

// // wrapper.replaceChild(circles[0], hearts[1]);
// div.style.width = '300px';

// div.innerHTML = '<h3>SUKA<h3>'

// // div.textContent = '<h3>Hello WORLD!</h3>'; // не работает с html тегами

// div.insertAdjacentHTML('afterend', '<h2> Allabai ne plach</h2>');


// YPOK 31
// const btns = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');

// // btn.onclick = function () {
// //     alert('gaylord');
// // }

// // let i = 0;
// const deleteElement = (event) => {
//     console.log(event.currentTarget);
//     console.log(event.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// }

// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {
//         once: true
//     });
// })

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// })


// YPOK 32
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }

// // YPOK 35

// const p = document.querySelectorAll('p');
// console.log(p);



// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }
// loadScript('test.js');

// YPOK 37 Classlist

// const btns = document.querySelectorAll('button'),
//     wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length);
// // console.log(btns);
// // console.log(btns[0].classList.item(1));
// // console.log(btns[1].classList.add('red', 'allah'));
// // // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));

// // if (btns[1].classList.contains('red')) {
// //     console.log('red est');
// // }
// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches("button")) {
//         console.log('HELLO');
//     }
// });

// // btns.forEach(elem => {
// //     elem.addEventListener('click', () => {
// //         console.log('HELLO');
// //     });

// // });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// YPOK 39

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;


// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;
//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;

// }

// let id = setTimeout(function log() {
//     console.log("hello");
//     id = setTimeout(log, 500);
// }, 500);

// YPOK 40

const now = new Date('2022-02-14');

// new Date.parse('2022-02-14');

console.log(now.setHours(40)); // Year, month и прочее...
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate()); // Get hours, minutes, seconds...
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();
console.log(end - start);