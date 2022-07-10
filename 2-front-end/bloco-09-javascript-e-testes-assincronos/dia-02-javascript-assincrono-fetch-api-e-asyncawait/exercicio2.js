// const fetch = require('node-fetch'); // só usar essa linha para testar o .js. Para HTML retirar/comentar
// apiScript.js
const API_URL = 'https://api.coincap.io/v2/assets/';
const usdToBrl_URL =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';

const fetchCoin = async () => {
  let result = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((err) => err.toString());

  const usdToBrl = await fetch(usdToBrl_URL)
    .then((response) => response.json())
    .then((data) => data.brl)
    .catch((err) => err.toString());

  result = result
    .filter((data) => Number(data.rank) <= 10)
    .map(
      (data) =>
        `${data.id} (${data.symbol}): R$${(Number(data.priceUsd) * Number(usdToBrl)).toFixed(2)}`
    );
  // console.log(result);
  const ulCoins = document.getElementById('coinContainer');
  result.forEach((coin) => {
    const liCoin = document.createElement('li');
    liCoin.innerHTML = coin;
    ulCoins.appendChild(liCoin);
  });
};
// fetchCoin();

window.onload = () => fetchCoin();
