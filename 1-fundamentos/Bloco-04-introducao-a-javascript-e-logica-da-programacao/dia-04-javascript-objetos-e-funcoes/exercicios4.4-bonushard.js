let tableRomanos = [{
  simbol: 'I',
  value: 1,
  level: 1
}, {
  simbol: 'V',
  value: 5,
  level: 2
}, {
  simbol: 'X',
  value: 10,
  level: 3
}, {
  simbol: 'L',
  value: 50,
  level: 4
}, {
  simbol: 'C',
  value: 100,
  level: 5
}, {
  simbol: 'D',
  value: 500,
  level: 6
}, {
  simbol: 'M',
  value: 1000,
  level: 7
} ]
//Exercicios 4.4 - bonus 1
function convertRomanos(valor, soma) {
    let anterior = [];
    let atual = valor[0];
    let novo = valor.slice(1, valor.length);
    let resul = []
  if (novo != '')
    anterior = convertRomanos(novo, soma);
  
  let obj = tableRomanos.find(element => element.simbol == atual);
  if (anterior != '') {
    let objAnterior = anterior[0];
    if (obj.level >= objAnterior.level) {
      soma = anterior[1] + obj.value;
    } else {
      soma = anterior[1] - obj.value;
    }

  } else {
    soma += obj.value;
  }
  result = [obj, soma]
  return result;
  
} 

function executar(exercicio) {
  switch (exercicio) {
    case 1:
      console.log(convertRomanos('MMXVIII', 0)[1]);
      console.log(convertRomanos('VI', 0)[1]);
      console.log(convertRomanos('IV', 0)[1]);
      break;
  
    default:
      break;
  }
}


// tableRomanos.push({simbol:'J',value:2000,level:50});
// console.log(Object.values(tableRomanos));
//console.log(Object.entries(tableRomanos)[0][1]);

executar(1);
