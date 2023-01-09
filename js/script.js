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
let movie = prompt("Your last seen film?","");
let rating = prompt("Your rating to that movie?", "");

personalMovieDB.movies[movie]=rating;
