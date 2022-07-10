// const fetch = require('node-fetch'); // só usar essa linha para testar o .js. Para HTML retirar/c
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const result = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.joke);

  // console.log(result);
  const h2Joke = document.getElementById('jokeContainer');
  h2Joke.innerHTML = result;
};
//  fetchJoke();

window.onload = () => fetchJoke();
