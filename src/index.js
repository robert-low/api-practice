require('dotenv').config();

console.log("Hello from src/index.js!");

// GET REQUEST - used to pull information from an API.
// 1. Find the base URL of the API (token is added from .env file)

const baseURL = `http://www.omdbapi.com/?s=firm&apikey=48727053`;

fetch(`${baseURL}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
