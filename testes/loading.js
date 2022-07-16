const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = [
  '🕛',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕛',
];

const interval = 125;

// const loadEmojis = (arr) => {
//   setInterval(() => {
//     emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
//     //console.log(Math.floor(Math.random() * arr.length))
//   }, interval);
// };

const position = (arr) => arr.indexOf(emoji.innerText);

const loadEmojis = (arr) => {
  emoji.innerText = arr[0];
  setInterval(() => {
    emoji.innerText = arr[position(arr) >= arr.length ? 0 : position(arr) + 1];
  }, interval);
};

const init = () => {
  loadEmojis(emojis);
};
init();
