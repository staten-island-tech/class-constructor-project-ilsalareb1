//one class to create the object person, album, movie ***Model
class Movie{
    constructor(title, director, leadActor1, leadActor2, yearReleased, url){
        this.tile = title;
        this.director = director;
        this.leadActor1 = leadActor1;
        this.leadActor2 = leadActor2;
        this.yearReleased = yearReleased;
        this.url = url;
    }
     calculateAge (yearReleased){
        new Date().getFullYear() - this.yearReleased;
    }
}

//UI class with methods
class UI {

    displayMovie(movie){
        if (movie.title == false || movie.director == false || movie.leadActor1 == false || movie.leadActor2 == false || movie.yearReleased == false || movie.url == false){
            alert('Please input all values');
        }else {
        const display = document.querySelector('.display');
        
        let html='<div class="display-movie"><div class="display-title">%title%</div><div class="display-director">%director%</div><div class= "display-leadActor-1"> %leadActor-1%</div><div class="display-leadActor2"> %leadActor-2% </label></div><div class="display-yearReleased">%yearReleased%</div><div class="display-image"><img src="%url%"></div><div class="remove-movie"><p class="remove-movie">Remove Movie &#10006; </p></div></div>';

        let newHtml = html.replace('%title%', movie.title);
        newHtml = html.replace('%director%', movie.director);
        newHtml = html.replace('%leadActor-1%', movie.leadActor1);
        newHtml = html.replace('%leadActor-2%', movie.leadActor2);
        newHtml = html.replace('%yearReleased%', movie.calculateAge(yearReleased));
        newHtml = html.replace('%url%', movie.url);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
        
        }
    }

    //clear methods 
    clearValues(){
        document.getElementById("movie-form").reset();
    }

    //remove object
    removeMovie(target){
        if (target.parentElement.classList.contains('remove-movie')){
            target.parentElement.remove();
        }
    }
}




//event listener controller 
document.getElementById('movie-form').addEventListener('submit', function(e){
    //values
    
    const userTitle = document.getElementById('title').value;
    const userDirector = document.getElementById('director').value;
    const userleadActor1 = document.getElementById('leadActor1').value;
    const userleadActor2 = document.getElementById('leadActor1').value;
    const userYearReleased = document.getElementById('yearReleased').value;
    const userMoviePoster = document.getElementById('image').value;

    //instantiates new class
    const movie = new Movie(userTitle, userDirector, userleadActor1, userleadActor2, userYearReleased, userMoviePoster);

    const ui = new UI();
    console.log(ui);
    
    ui.displayMovie(movie);

    ui.clearValues();

    e.preventDefault(); 

})

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();

    ui.removeMovie(e.target);

   ui.clearValues();

   e.preventDefault(); 
})





