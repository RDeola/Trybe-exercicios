// Primeira tentativa, sem controlar o tempo de retorno
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// };

// fetchJoke();

// segunda tentativa, agora controlando o tempo de retorno
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// };

// fetchJoke();

// terceira versão. Agora, con tratamento de erro
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// };
// // Algo deu errado :(
// // TypeError: Only absolute URLs are supported
// fetchJoke();

// quarta versão, agora com async e await
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);

  //com o await no fetch, agora o result vai esperar a resposta do fetch antes de continuar o código
  console.log(result);
};

fetchJoke();

// Ou, na quinta versão, código alterado utilizando try/catch para
// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.value);
//   } catch(error) {
//     console.log(`Algo deu errado :( \n${error}`);
//   }
// }

// fetchJoke();
