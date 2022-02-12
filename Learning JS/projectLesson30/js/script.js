/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
    movieList = document.getElementsByClassName('promo__interactive-item');

adv.forEach(item => {
    item.remove();
});

promGenr.textContent = "ДРАМА";

promoBG.style.backgroundImage = "url('img/bg.jpg')";

movieDB.movies.sort();
for (let i = 0; i < movieList.length; i++) {
    movieList[i].textContent = `№${i+1} ${movieDB.movies[i]}`;
}