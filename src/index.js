// GET REQUEST - used to pull information from an API.

const unorderedMovieList = document.querySelector("#results");


const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=48727053`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movieResult) => {
        const movieListItem = `<li class="movie-title-poster">
        <img src=${movieResult.Poster}>
        <p>${movieResult.Title}</p>
        </li>`;
        unorderedMovieList.insertAdjacentHTML("beforeend", movieListItem);
      });
    });
};

// 1. fetch the Base URL of the API we want info from.
// 2. Parse this information as a JSON file.
// 3. data is the JSON object retrieved from the API.
// 4. data.Search is the array of the movie results within the data object -->
// { Search: [{movieResult}]}.
// 6. movieResult is an one element (an object) of the array --> {movieResult}
// 7. movieListItem is the HTML string with one object of the array and it's keys Title, Poster -->
// 8. the variable above selects the HTML element in index.HTML by its ID - results.
// 9. it then inserts into it the variable defined above into the DOM, which produces HTML.
