"use strict";
//1
const numberOfFilms = +prompt("How many films have you seen?", "");
//2
const personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};
//3
let movie, rating;
for(let i =0;i<2;i++){
    movie = prompt("Your last seen film?");
    rating = prompt("Your rating to that movie?");
    if(movie != null && rating != null && movie != '' && rating !='' && movie.length<50){
        personalMovieDB.movies[movie]=rating;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }

}

if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count>=30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}




console.log(personalMovieDB);