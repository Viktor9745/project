"use strict";

const personalMovieDB = {
    count : 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start:()=>{
        personalMovieDB.count = +prompt("How many films have you seen?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many films have you seen?", "");
        }
    },
    rememberMyFilms:()=>{
        for(let i =0;i<2;i++){
            let movie = prompt("Your last seen film?");
            let rating = prompt("Your rating to that movie?");
            if(movie != null && rating != null && movie != '' && rating !='' && movie.length<50){
                personalMovieDB.movies[movie]=rating;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }
        
        }
    },
    detectPersonalLevel: ()=>{
        if(personalMovieDB.count<10){
            console.log("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count>=30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },
    showMyDB:(hidden)=>{
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: ()=>{
        for(let i=1;i<2;i++){
            // let genre = prompt(`Ваш любимый жанр под ${i+1}`);
            // if(genre === '' || genre == null){
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // }else{
            //     personalMovieDB.genres[i-1] = genre;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if(genres === '' || genres == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB:()=>{
        if(!personalMovieDB.privat){
            personalMovieDB.privat=true;
        }else{
            personalMovieDB.privat=false;
        }
    }
};