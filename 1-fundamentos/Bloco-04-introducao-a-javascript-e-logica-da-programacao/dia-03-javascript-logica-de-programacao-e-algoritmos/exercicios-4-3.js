function fatorial(fatorar) {
  //Exercicio 4.3-1
  let fatorial = 1;

  for (let i = fatorar; i > 0; i -= 1) {
      fatorial *= i;
  }
return fatorial;
}
console.log(fatorial(10));

function inverteString(string) {
  //Exercicio 4.3-2
  let invertida = '';
  
  for (let i = string.length-1; i >= 0; i -= 1)
    invertida += string[i];

  return invertida
}
console.log(inverteString('tryber'));

let array = ['java', 'javascript', 'python', 'html', 'css'];

function maiorPalavra(array) {
  //Exercicio 4.3-3.1
  let maiorComprimento = 0;
  let maiorPalavra = '';

  for (i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorComprimento) {
      maiorComprimento = array[i].length;
      maiorPalavra = array[i]
    }
  }
  return maiorPalavra
}
console.log(maiorPalavra(array));

function menorPalavra(array) {
  //Exercicio 4.3-3.2
  let menorComprimento = 0;
  let menorPalavra = '';

  for (i = 0; i < array.length; i += 1) {
    if ((array[i].length < menorComprimento) || (menorComprimento === 0)) {
      menorComprimento = array[i].length;
      menorPalavra = array[i]
    }
  }
  return menorPalavra
}
console.log(menorPalavra(array));

//função ehPrimo
//  numero = numero a ser avaliado
//retorna True se o numero avaliado for Primo.
function ehPrimo(numero) {
  let divisoes = 0;
  for (j = numero; j > 0; j -= 1) {
    if ((numero%j) === 0) {
      divisoes += 1;
    }
  }
  return (divisoes === 2) 
}
//function maiorPrimo(inicio)
//  inicio - valor inicial para busca.
//A função irá procurar de forma decrescente, a partir de início
//qual o maior número primo 
function maiorPrimo(inicio) {
  for (i = inicio; i > 1; i -= 1) {
    
    if (ehPrimo(i)) {
      return i;
      i = 1;
    }
  }
}

console.log(maiorPrimo(50));