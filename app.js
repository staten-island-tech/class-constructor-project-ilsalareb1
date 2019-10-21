//one class to create the object person, album, movie ***Model
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

//UI class with methods
class UI {

    displayMovie(movie){
        if (userTitle.value == false || userDirector.value == false || userleadActor1.value == false || userleadActor2.value == false || userYearReleased.value == false){
            alert('Please input all values');
        }else {
        const display= document.querySelector('.display');
        
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

    //clear methods 
    clearValues(){
        document.getElementById("movie-form").reset();
    }

    //remove object
    removeMovie(e){
        if (e.parentElement.classList.contains('display-button')){
            e.parentElement.parentElement.remove();
        }
    }
}




//event listener controller 
document.getElementById('form').addEventListener('submit', function(e){
    //values
    const form = document.querySelector('#movies-form');
    const userTitle = document.querySelector('#title');
    const userDirector = document.querySelector('#director');
    const userleadActor1 = document.querySelector('#leadActor1');
    const userleadActor2 = document.querySelector('#leadActor2');
    const userYearReleased = document.querySelector('#yearReleased');
    const userMoviePoster = document.querySelector('#image');

    //instantiates new class
    const Movie = new Movie(userTitle.value, userDirector.value, userleadActor1.value, userleadActor2.value, userYearReleased.value , userMoviePoster.value);
    console.log(Movie);

    const UI = new UI();
    console.log(UI);
    
    ui.displayMovie(movie);

    ui.clearValues();

    ui.removeMovie(e);

    e.preventDefault();

})

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();

    ui.removeMovie(e.target);

    ui.clearValues();

    e.preventDefault();
})





