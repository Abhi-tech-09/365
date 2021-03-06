
var slides=document.getElementsByClassName("slides");
var n=slides.length;
var index=0
function plusSlides(direction){
  if(direction==0){
    if(index==0){
      index=n-1;
    }
    else{
      index--;
    }
  }
  else if(direction==1){
    if(index==n-1){
      index=0;
    }
    else{
      index++;
    }
  }
  for(i=0;i<n;i++){
    slides[i].style.display="none";
  }
  slides[index].style.display="block";
}

// Movie javascript 
var movieTitle;
var currentGenre = "Genre";
var index = 0 ; 

function plusSlidesM(dir) {
  var slide = document.getElementsByClassName("slides");
  if (dir > 0){
    index = (index + dir)  ; 
    index = index % slide.length ; 
  }
  else{
    index += dir ; 
    if(index < 0)
      index = slide.length-1 ; 
  }
  for(let i = 0 ; i < slide.length ; i++)
    slide[i].style.display = "none" ; 
  slide[index].style.display = 'block' ; 
}



//Js Search bar 
function updateResults() {
  var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase();
  var counter = 0;

  if (currentGenre == 'All' || currentGenre == 'Genre') {
    movieTitle = document.getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Action') {
    movieTitle = document.getElementsByClassName('movies-action')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Drama') {
    movieTitle = document.getElementsByClassName('movies-drama')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Sci-Fi') {
    movieTitle = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName('movie-title');
  }


  for (var name = 0; name < movieTitle.length; name++) {
    var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();

    if (compareMovieTitles.indexOf(query) === -1) {
      movieTitle[name].closest('div.media-carousel-movies').style.display = "none";
    }
    else {
      movieTitle[name].closest('div.media-carousel-movies').style.display = "block";
    }
  }

}


// JS for Dropdown
function getMediaPosters(selectedGenre) {
  var countMovies = 0;
  var mediaCarouselMovies;
  currentGenre = selectedGenre;
  document.getElementById("genreText").innerHTML = selectedGenre;
  if(selectedGenre == "All")
  document.getElementById("genreText").innerHTML = "Genre";
  slideshow() ; 


  if (selectedGenre == 'All') {
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-drama')[0].style.display = "block";
    document.getElementsByClassName('movies-scifi')[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName("media-carousel-movies");
  }
  if (selectedGenre == 'Action') {
    document.getElementsByClassName('movies-action')[0].style.display = "block";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    mediaCarouselMovies = document.getElementsByClassName('movies-action')[0].getElementsByClassName("media-carousel-movies");
  }
  if (selectedGenre == 'Drama') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "block";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    mediaCarouselMovies = document.getElementsByClassName('movies-drama')[0].getElementsByClassName("media-carousel-movies");
  }
  if (selectedGenre == 'Sci-Fi') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "block";
    mediaCarouselMovies = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName("media-carousel-movies");
  }


  // var mediaCarouselMoviesCount = mediaCarouselMovies.length;

  // for (var count = 0; count < mediaCarouselMoviesCount; count++) {
  //   if (mediaCarouselMovies[count].style.display == "block")
  //     countMovies++;
  // }
  // console.log(countMovies);

  // showNoResultsText(countMovies);
}

function slideshow() {
  var x = document.getElementById("check");
  if (x.style.display === "none") {
  x.style.display = "block";
  }
  else {
  x.style.display = "none";
  }
}