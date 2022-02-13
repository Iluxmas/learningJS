/* Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
/

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    // 1

    const adv = document.querySelectorAll('.promo__adv img'),
        promoBG = document.querySelector('.promo__bg'),
        promGenr = promoBG.querySelector('.promo__genre'),
        movieList = document.getElementsByClassName('promo__interactive-item'),
        addMov = document.querySelector(".add"),

        addMovText = addMov.querySelector('.adding__input'),
        btn = document.getElementsByTagName('button'),
        loved = document.querySelector('input[type=checkbox]');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promGenr.textContent = "ДРАМА";
        promoBG.style.backgroundImage = "url('img/bg.jpg')";
    };

    function sortMov() {
        let movieList = document.getElementsByClassName('promo__interactive-item');
        movieDB.movies.sort();
        for (let i = 0; i < movieList.length; i++) {
            movieList[i].innerHTML = `№${i+1} ${movieDB.movies[i]} <div class="delete"></div>`;
        }
    }

    makeChanges();
    sortMov();
    deleteAdv(adv);

    const newMovie = (event) => {
        event.preventDefault();
        let a = addMovText.value;
        if (a.length > 21) {
            a = a.slice(0, 21) + '...';
        }
        if (a.length > 3) {
            movieDB.movies.push(a);

            const addLi = document.createElement('li');
            addLi.innerHTML = `<li class="promo__interactive-item"> ${a} <div class = "delete"> </div></li>`;
            movieList[movieList.length - 1].after(addLi);
            sortMov();
            addMovText.value = 'Добавлено!';
            setTimeout(() => {
                addMovText.parentNode.reset();
            }, 1200);

            if (loved.checked) {
                console.log("Добавляем любимый фильм");
            }
        }
    }

    btn[0].addEventListener('click', newMovie);
    const deleteMov = document.querySelectorAll('.delete');
    console.log(deleteMov);

    const deleteElement = (event) => {
        event.currentTarget.parentNode.remove();
    }

    deleteMov.forEach(bin => {
        bin.addEventListener('click', deleteElement)
    });


});