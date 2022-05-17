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

//Exercicio 4.4-bonus parte 2-4
function maiorPalavra(valor) {
  let maiorComprimento = 0;
  let maiorPalavra = '';

  for (i = 0; i < valor.length; i += 1) {
    if (valor[i].length > maiorComprimento) {
      maiorComprimento = valor[i].length;
      maiorPalavra = valor[i]
    }
  }
  return maiorPalavra
}

//Exercicio 4.4-bonus parte 2-5
function maisRepete(valor) {
  let number = []
  let countNumber = [];
  let maiorCount = -1;
  let pos = -1;

  for (let i of valor) {
    pos = number.indexOf(i);
    if (pos >= 0) {
      countNumber[pos] += 1;
    } else {
      number.push(i);
      countNumber.push(1);
    }
  }

  for (let i in countNumber) {
    if (countNumber[i] > maiorCount) {
      maiorCount = countNumber[i];
      pos = i;
    }
  }
  return number[pos];
}

//Exercicio 4.4-bonus parte 2-6
function fatorSum(valor) {
  let sum = 0;
  while (valor > 0) {
    sum += valor;
    valor -= 1;
  }
  return sum;
}

/******************************************************************** */
function executar(exercicio) {
  let valor;
  switch (exercicio) {
    case 1:
      valor = 'desenvolvimento';
      console.log(isPalindromo(valor));
      break;
    case 2:
      valor = [2, 3, 6, 7, 10, 1];
      console.log(indiceMaiorValor(valor));
      break;
    case 3:
      valor = [2, 4, 6, 7, 10, 0, -3];
      console.log(indiceMenorValor(valor));
      break;
    case 4:
      valor = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
      console.log(maiorPalavra(valor));
      break;
    case 5:
      valor = [2, 3, 2, 5, 8, 2, 3];
      console.log(maisRepete(valor));
      break;
    case 6:
      valor = 5;
      console.log(fatorSum(valor));
      break;
    default:
      break;
  }
}

executar(6);