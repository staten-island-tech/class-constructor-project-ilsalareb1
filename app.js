///one class to create the object person, album, movie ***Model
//take arguments 
class Movie{
    constructor(title, director, leadActor1, leadActor2, yearReleased){
        this.tile = title;
        this.director = director;
        this.leadActor1 = leadActor1;
        this.leadActor2 = leadActor2;
        this.yearReleased = yearReleased;
    }
     calculateAge = ()=> new Date().getFullYear() - this.yearReleased;
}

const Movies =[];

/* const JurrasicPark = new Movie('Jurassic Park', 'Steven Speilberg', 'Jeff Goldblum', 'Steven Neil',1993); */


//push into array
function addMovie(title, director, leadActor1, leadActor2, yearReleased, moviePoster) {
    Movie.push(new Movie (title, director, leadActor1, leadActor2, yearReleased, moviePoster) );
}


//display objects on screen 
const form = document.querySelector('#movies-form');
const userTitle = document.querySelector('#title');
const userDirector = document.querySelector('#director');
const userleadActor1 = document.querySelector('#leadActor1');
const userleadActor2 = document.querySelector('#leadActor2');
const userYearReleased = document.querySelector('#yearReleased');
const userMoviePoster = document.querySelector('#image');


function eventListeners(){
    form.addEventListener('submit', displayMovie);
    display.addEventListener('click', removeMovie);

}


//creates/insert the HTML for the UI display 
function displayMovie(e){
    if (userTitle.value == false || userDirector.value == false || userleadActor1.value == false || userleadActor2.value == false || userYearReleased.value == false){
        alert('Please input all values');
    }else {
        let html='<div class="display-movie"><div class="display-title">%title%</div><div class="display-director">%director%</div><div class= "display-leadActor-1"> %leadActor-1%</div><div class="display-leadActor2"> %leadActor-2% </label></div><div class="display-yearReleased">%yearReleased%</div><div class="display-image"><img src="%url%"></div><div class="remove-movie"><p class="remove-movie">Remove Movie &#10006; </p></div></div>';

        let newHtml = html.replace('%title%', userTitle.value);
        newHtml = html.replace('%director%', userDirector.value);
        newHtml = html.replace('%leadActor-1%', userleadActor1.value);
        newHtml = html.replace('%leadActor-2%', userleadActor2.value);
        newHtml = html.replace('%yearReleased%', userYearReleased.value);
        newHtml = html.replace('%url%', userMoviePoster.value);
        display.insertAdjacentHTML('beforeend', newHtml);
        e.preventDefault();


    }
    
}



///separate event handler for removing/deleting 
function removeMovie(e){
    if(e.target.parentElement.classList.contains('remove-movie')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearValues() {
    document.getElementById("movie-form").reset();
}

clearValues();