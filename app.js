///one class to create the object movie ***Model

class Movie{
    constructor(title, director, yearReleased, moviePoster){
        this.tile = title;
        this.director = director;
        this.yearReleased = yearReleased;
        this.moviePoster = moviePoster;
    }
     calculateAge = ()=> new Date().getFullYear() - this.yearReleased;
}


//push into array
function addMovies(title, director, yearReleased, moviePoster ){
    Movie.push(new Movie (title, director, yearReleased, moviePoster) );
}


//display objects on screen 
const form = document.querySelector('#movies-form');
const userTitle = document.querySelector('#title');
const userDirector = document.querySelector('#director');
const userYearReleased = document.querySelector('#yearReleased');
const userMoviePoster = document.querySelector('#moviePoster');

function eventListeners(){
    form.addEventListener('submit', displayMovie);
    display.addEventListener('click', removeMovie);

}


//creates/insert the HTML for the UI display 
function displayMovie(e){
    if (userTitle.value === " "){
        alert('Please input all values');
    }else {
        let html='<'
    }
    
}

//remove object




///controller combines ui and model


///event handler with function
//get values


///instantiate new class *makes new album or movie


///instantiate new UI const ui = new UI ()


///call relevent methods


///separate event handler for removing/deleting 