'use strict';
// YPOK 028

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'), // psevdomassiv
    circles = document.getElementsByClassName('circle'), // HTML collection
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// console.dir(box);
// box.style.backgroundColor = 'brown';
// box.style.width = '500px';

box.style.cssText = 'background-color: pink; width: 600px';

btns[1].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

// YPOK 29

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');
wrapper.append(div); // добавить элемент  в блок wrapper в конец
// wrapper.appendChild(div);

// wrapper.prepend(div); // добавить элемент  в блок wrapper в начало

// hearts[0].after(div); // добавить после элемента 
// hearts[0].before(div); // добавить до элемента

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove(); // удалить элемент
// wrapper.removeChild(hearts[1]);

// hearts[2].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[1]);
div.style.width = '300px';

div.innerHTML = '<h3>SUKA<h3>'

// div.textContent = '<h3>Hello WORLD!</h3>'; // не работает с html тегами

div.insertAdjacentHTML('afterend', '<h2> Allabai ne plach</h2>');