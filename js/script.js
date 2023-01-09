"use strict";
//1
let numberOfFilms;
//2
function start(){
    numberOfFilms = +prompt("How many films have you seen?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you seen?", "");
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

function showMyDB(privat){
    if(!privat){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i=0;i<3;i++){
        const genre = prompt(`Ваш любимый жанр под ${i+1}`);
        personalMovieDB.genres[i]=genre;
    }
}

let movie, rating;


function rememberMyFilms(){
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
}

rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count>=30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();




console.log(personalMovieDB);

