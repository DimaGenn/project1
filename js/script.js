/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('один из просмотренных последних фильмов', ''),
//       b = prompt('на сколько оцените его', ''),
//       c = prompt('один из просмотренных последних фильмов', ''),
//       d = prompt('на сколько оцените его', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


////////////
// написать эту же задачу еще двумя циклами
///////////////////
// while (Object.keys(personalMovieDB.movies).length < 2){
//     const a = prompt('один из просмотренных последних фильмов', ''),
//     b = prompt('на сколько оцените его', '');

//     if (a != null && b != null && a!='' && b!='' && a.length < 50 ){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else {
//         console.error('error');  
//     }
// }
////////////////////
// do {
//     const a = prompt('один из просмотренных последних фильмов', ''),
//     b = prompt('на сколько оцените его', '');

//     if (a != null && b != null && a!='' && b!='' && a.length < 50 ){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else {
//         console.error('error');  
//     }
// }
// while (Object.keys(personalMovieDB.movies).length < 2);
// //////////

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('один из просмотренных последних фильмов', ''),
        b = prompt('на сколько оцените его', '');
    
        if (a != null && b != null && a!='' && b!='' && a.length < 50 ){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.error('error');
            i--;    
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {console.log('Произошла ошибка')};
}

function showMyDB (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres();

