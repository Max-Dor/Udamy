
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?','');
// const a = prompt('Один из последних просмотренных фидьмов ...',''),
//         b = prompt('На сколько  оцените его по 10-ти бальной шкале ?',''),
//         c = prompt('Один из последних просмотренных фидьмов ...',''),
//         d = prompt('На сколько  оцените его по 10-ти бальной шкале ?','');

// const personalMoviesDB = {
//     count:numberOfFilms ,
//     movies: {

//     },
//     actors: {

//     },
//     genres: [

//     ],
//     privat: false
// };
// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;


// console.log(personalMoviesDB)



// if(4 == 5){
//     console.log('ok')
// }else{
//     console.log('Равенство не верно')
// }

// const num  = 101;

// if(num < 49){
//     console.log('num  меньше 49 !')
// }else if(num > 100){
//     console.log('num  больше 100')
// }else if(num == 50){
//     console.log('Бинго  num = 50')
// }


// const hungry = true;
// const frenchFrise = 3;
// const hamburger = 3;
// const cola = 0;
// const nuggets = 2;

// if(hamburger === 3 && cola ==2  || frenchFrise == 3 && nuggets){
//     console.log('true')
// }else{
//     console.log('false')
// }
// console.log(hamburger === 3 && cola ==2  || frenchFrise == 3 && nuggets)

//  Циклы .....

// let num = 50;

// while(num <= 60 ){
//     console.log(num);
//     num++;
// } 
// do{
//     console.log(num)
//     num ++;
// }
// while(num <=  65)
// for( let i = 0;  i < 10; i++){
//     if(i === 6){
//         break;
//     }
//     console.log(i)
// }

// Цикл в цикле ...(вложеность)

// for(let i = 0; i <= 5; i++){
//     console.log(i)
//     for(let n = 0; n <= 3; n++){
//         console.log(n)
//     }
// }

let result = '';
const lenght = 7;

for(let i=1; i<lenght; i++){
    for(let j=0; j<i; j++){
        result += '*';
    }
    result += '\n';
}


console.log(result)

first: for(let i = 0; i <= 3; i++){
        console.log(`First level: ${i}`)
        for(let n = 0; n <= 3; n++){
            console.log(`Second level: ${n}`)
            for(let n = 0; n < 5; n++){
                if(n === 2) continue first;
                console.log(`Therd level : ${n}`)
            }
        }
    }
