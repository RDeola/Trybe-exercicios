//Exercicio 4.4-bonus parte 2-1
function isPalindromo(valor) {
  let repetir = valor.length/2;
  let compara = true;
  for (let indice = 0; indice < repetir; indice += 1) {
    if (valor[indice] !== valor[valor.length - (indice + 1)]) {
      compara = false;
    }
  }
  return compara;  
}

//Exercicio 4.4-bonus parte 2-2
function indiceMaiorValor(valor) {
  let indiceMaior = -Infinity;
  let valorMaior = -Infinity;
  for (let indice in valor) {
    if (valor[indice] > valorMaior) {
      valorMaior = valor[indice];
      indiceMaior = indice;
    }
  }
  return indiceMaior
}

//Exercicio 4.4-bonus parte 2-3
function indiceMenorValor(valor) {
  let indiceMenor = Infinity;
  let valorMenor = Infinity;
  for (let indice in valor) {
    if (valor[indice] < valorMenor) {
      valorMenor = valor[indice];
      indiceMenor = indice;
    }
  }
  return indiceMenor
}

function executar(exercicio, valor) {
  switch (exercicio) {
    case 1:
      console.log(isPalindromo(valor));
      break;
    case 2:
      console.log(indiceMaiorValor(valor));
      break;
    case 3:
      console.log(indiceMenorValor(valor));
      break;
    default:
      break;
  }
}

//executar(1, 'desenvolvimento');
//executar(2,  [2, 3, 6, 7, 10, 1]);
executar(3,  [2, 4, 6, 7, 10, 0, -3]);