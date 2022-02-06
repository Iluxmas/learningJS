
'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyfilms: function() {
        for (let i = 0; i < 2; i++) {
            let movieName = prompt('Один из последних просмотренных фильмов?');
            let movieRate = prompt('На сколько оцените его от 1 до 10?');
            if (!movieName || movieName.length > 50 || movieName == '') {
                i--;
            } else {
                    personalMovieDB.movies[movieName] = movieRate;
            }
            }
    },
    detectLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Prosmotreno dovolno malo filmov');
        } else if (personalMovieDB.count < 30) {
            console.log('Vi klassicheskii zritel');
        } else if (personalMovieDB.count >= 30) {
            console.log('Vi kinoman');
        } else {
            console.log('Proizoshla oshibka');
        }
    },
    showMyDB: function () {
        !personalMovieDB.privat ? console.log(personalMovieDB) : 1 + 1; 
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
            };
    },
    toggleVisibleMyDB: function () {
    (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
    };
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);



// console.log(personalMovieDB.movies);
