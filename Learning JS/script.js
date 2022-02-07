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

// Урок 23, ООП 

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; <-- устаревшая форма

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
john.sayHello()


// Urok 26 dinamich tipizaciya
//1
console.log(String(null));
//2
console.log(typeof(5 + ''));

// To number
console.log(typeof(Number('4')));
console.log(typeof(+'5'));
console.log(typeof(parseInt("15px", 10)));

// To boolean

// 0, '', null, undefined, NaN; // <- false




