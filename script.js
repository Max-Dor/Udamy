
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');
const a = prompt('Один из последних просмотренных фидьмов ...',''),
        b = prompt('На сколько  оцените его по 10-ти бальной шкале ?',''),
        c = prompt('Один из последних просмотренных фидьмов ...',''),
        d = prompt('На сколько  оцените его по 10-ти бальной шкале ?','');

const personalMoviesDB = {
    count:numberOfFilms ,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false
};
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;


console.log(personalMoviesDB)