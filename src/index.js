require('dotenv').config();

console.log("Hello from src/index.js!");

// GET REQUEST - used to pull information from an API.
// 1. Find the base URL of the API (token is added from .env file)

const baseURL = `http://www.omdbapi.com/?s=matrix&apikey=48727053`;
const results = document.querySelector("#results");

fetch(`${baseURL}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data.Search);
    data.Search.forEach((result) => {
      console.log(result);
    });
  });
