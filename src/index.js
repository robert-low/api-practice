// GET REQUEST - used to pull information from an API.
const fs = require('fs');

const err = console.error("there's an error");

const unorderedMovieList = document.querySelector("#results");
const form = document.querySelector("#search-form");

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=48727053`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.Search.forEach((movieResult) => {
        const movieListItem = movieResult.Title;
        fs.writeFile("./test.txt", movieListItem, (err));
        // const movieListItem = `<li class="movie-title-poster">
        // <img src=${movieResult.Poster}>
        // <p>${movieResult.Title}</p>
        // </li>`;
        // unorderedMovieList.insertAdjacentHTML("beforeend", movieListItem);
      });
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector(".form-control");
  unorderedMovieList.innerHTML = "";
  searchMovies(input.value);
});

// 1. fetch the Base URL of the API we want info from.
// 2. Parse this information as a JSON file.
// 3. data is the JSON object retrieved from the API.
// 4. data.Search is the array of the movie results within the data object -->
// { Search: [{movieResult}]}.
// 6. movieResult is an one element (an object) of the array --> {movieResult}
// 7. movieListItem is the HTML string with one object of the array and it's keys Title, Poster -->
// 8. the variable above selects the HTML element in index.HTML by its ID - results.
// 9. it then inserts into it the variable defined above into the DOM, which produces HTML.

// Getting the users input through a form.

// 1. added a search form to the HTML, defined a variable which selects the form HTML.
// 2. listen for when user submits the form --->
// 3. prevent native behaviour of form by stopping refresh after submit
// 4. select the specific form input html from form with class "form-control".
// 6. ensure the results are cleared by setting inner html to null.
// 7. call the searchmovies function with our query of the value assigned to input variable.
// 8. searchMovies function is executed with argument of what is typed in by the user.

// POST request - used to submit data from a user to an API.

// const signUp = (event) => {
//   event.preventDefault();
//   const emailValue = document.getElementById("email").value;
//   const passwordValue = document.getElementById("password").value;
//   fetch("https://reqres.in/api/register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: emailValue, password: passwordValue })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// const emailForm = document.querySelector("#form");
// emailForm.addEventListener("submit", signUp);
