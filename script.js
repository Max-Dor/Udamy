
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');
    }
};
start();

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

for(let i = 0; i < 2 ; i++){
    const a = prompt('Один из последних просмотренных фидьмов ...',''),
        b = prompt('На сколько  оцените его по 10-ти бальной шкале ?','');
        
    if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMoviesDB.movies[a] = b;
        console.log('Done')
    }else{ i--; }
};

if(personalMoviesDB.count < 10 ){
    console.log('Просмотрено слишком мало фильмов !')
}else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30 ){
    console.log('Вы классический зритель !')
}else if(personalMoviesDB.count >= 30){
    console.log('Вы киноман !')
}else{ 
    console.log('Произошла ошибка !')
};

console.log(personalMoviesDB);
// Проба пера . Проверка клонирования на ноут...