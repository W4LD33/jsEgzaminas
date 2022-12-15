/* ------------------------------ TASK 2 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function() {
        return this.budget > 100000000;
      }
  }

const movie = new Movie('The Matrix', 'Lana Wachowski', 63000000);
const expensiveMovie = new Movie('Avengers: Endgame', 'Joe Russo', 356000000);

console.log(movie)
console.log(movie.title);
console.log(movie.director);
console.log(movie.budget);
console.log(expensiveMovie.wasExpensive());