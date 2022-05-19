// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function FindHigher(array) {
  let highestNumber = -Infinity;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }
  return highestNumber;
}
function highestCount(array) {
  // seu código aqui
  let highestNumber = -Infinity;
  let highestNumberCount = 0;
  highestNumber = FindHigher(array);
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result = '';
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    result = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    result = 'cat1';
  } else result = 'os gatos trombam e o rato foge';
  return result;
}

// Desafio 8
function isDivisor(value, divisor) {
  if (value % divisor === 0) return (divisor - 2);
}
function generateFizzBuzz(value) {
  let checkPhrase = 0;
  let fizzBuzzS = 'bug!';
  checkPhrase += isDivisor(value, 3);
  if (checkPhrase === 1) fizzBuzzS = 'fizz';

  checkPhrase += isDivisor(value, 5);
  if (checkPhrase === 3) fizzBuzzS = 'buzz';
  if (checkPhrase === 4) fizzBuzzS = 'fizzBuzz';

  return fizzBuzzS;
}
function fizzBuzz(array) {
  // seu código aqui
  let returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    returnArray.push(generateFizzBuzz(array[i]));
  }
  return returnArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  string = string.replace(/a/g, 1).replace(/e/g, 2);
  string = string.replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return string;
}
function decode(string) {
  // seu código aqui
  string = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i');
  string = string.replace(/4/g, 'o').replace(/5/g, 'u');
  return string;
}

// Desafio 10
function checkEmpty(vetor, string) {
  return (vetor === [])
      || (vetor.length === 0)
      || (string === '')
      || (string === undefined);
}
function techList(vetor, string) {
  // seu código aqui
  let newArray = [];
  let result;
  if (checkEmpty(vetor, string)) {
    result = 'Vazio!';
  } else {
    vetor.sort();
    for (let i = 0; i <= vetor.length - 1; i += 1) {
      newArray.push({ tech: vetor[i], name: string });
    }
    result = newArray;
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
