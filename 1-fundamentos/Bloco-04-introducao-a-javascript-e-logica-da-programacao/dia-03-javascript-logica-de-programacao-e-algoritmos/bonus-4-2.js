// function quadrado(char, qtd) {
//   //exercicios 4.3 bonus 1
//   for (i = 1; i <= qtd; i += 1) {
//     let linha = ''; 
//     for (j = 1; j <= qtd; j += 1) {
//       linha += char;
//     }
//     console.log(linha);
//   }
//   return ;
// }
// console.log(quadrado('*', 5));

// function triangulo(char, qtd) {
//   //exercicios 4.3 bonus 2
//   let linha = ''; 
//   for (i = 1; i <= qtd; i += 1) {
//     linha += char;
//     console.log(linha);
//   }
//   return ;
// }
// console.log(triangulo('*', 5));

// function trianguloInvertido(char, qtd) {
//   //exercicios 4.3 bonus 3
//   let linhaChar = '';
//   for(i = 1; i <= qtd; i += 1) {
//     let linhaEspaco ='';
//     for (j = qtd - i;j > 0; j -= 1) {
//       linhaEspaco += ' ';
//     }
//     linhaChar += char;
//     console.log(linhaEspaco+linhaChar);
//   }
// }
// console.log(trianguloInvertido('*', 5));

// //função PiramideSolid
// // char = caracter para preenchimento da pirâmide
// // qtd = quantidade de caracteres na base da pirâmide
// function piramideSolid(char, qtd) {
//   //exercicios 4.3 bonus 4
//   let lchar = '';
//   for (i = 1; i <= qtd; i += 1) {
//     let espaco = '';
//     lchar += char;
//     if ((i%2) != 0) {
//       for (j = (qtd-i)/2; j > 0; j -= 1) {
//         espaco += ' ';
//       }
//       console.log(espaco+lchar+espaco);
//     }
//     //console.log();
//   }
// } 
// console.log(piramideSolid('*', 5));

//função montaPonta
//  qtd = total de espaços a retornar
//Adiciona espaços nas laterais da pirâmide qdo necessário
function montaPonta(qtd) {
  let linha ='';
  for (j = 1; j <= qtd; j += 1)
    linha += ' ';
  return linha;
}
//função montaMeio
//  tamanho = tamanho da seção da pirâmide
//  qtd = tamanho da base
function montaMeio(tamanho, qtd){
  let meio = '';
  for (k = 1; k <= tamanho; k += 1) {
    if ((k === 1)||(k === tamanho)||(tamanho === qtd)) {
      meio += '*';
    } else {
      meio += ' ';
    }
  }
  return meio;
}
//função piramideVazada
// char = caracter de preenchimento da pirâmide
// qtd = qtd de caracteres na base da pirâmide
function piramideVazada(char, qtd) {
    //exercicios 4.3 bonus 5
    
    //se a base for par diminui em uma unidade para que seja ímpar
    if ((qtd%2) === 0)
      qtd -= 1;

    let linhaPonta, linhaMeio = '';
    for (i = 1; i <= qtd; i += 1) {
      if ((i%2) != 0) {
        qtdPonta = (qtd-i)/2;
        linhaPonta = montaPonta(qtdPonta);
        linhaMeio = montaMeio(i, qtd)
        console.log(linhaPonta + linhaMeio + linhaPonta);
      }
    }
}
console.log(piramideVazada('*',8));

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
console.log(ehPrimo(47));
