//constante para o exercicio 3
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

//objeto para o exercicio 1 ******************************************
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

//Objeto para exercicio 4 *****************************************
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

//Exercicios 4.4 - bonus 1 ******************************************
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

//Exercicios 4.4 - bonus 2 ***************************************
function arrayEven(vector) {
  let result = [];
  for (let vet of vector)
    for (let item of vet) {
      if (item%2 === 0) {
        result.push(item);
      }
    }
  return result;
}

//Exercicios 4.4 - bonus 3 **************************************
function countBasket(vetor) {
  let returnPhrase = '';
  let objBasket = {};
  let filterdBasket = {};

  for (let item of basket) {
    if (!objBasket[item]) {
      objBasket[item] = 0;
    } 
    objBasket[item] += 1;
    
  }
  returnPhrase = 'Sua cesta possui: ';
  
  // filterdBasket = objBasket;
  // if (vetor.length === 0) {
  //   objBasket = filterdBasket;
  // } else {
  //   objBasket =  Object.entries(filterdBasket).filter(element => element in vetor);
  // }

  for (let key = 0; key < Object.entries(objBasket).length; key += 1) {
    returnPhrase += Object.entries(objBasket)[key][1] + ' ' + Object.entries(objBasket)[key][0]; 
    if ( Object.entries(objBasket)[key][1] > 1) {
      returnPhrase += 's';
    }
    if (key === Object.entries(objBasket).length - 1) {
      returnPhrase += '.';
    } else {
      returnPhrase += ', ';
    }
  }
  // Alternativa para montagem da frase
  // utilizando um array para depois
  // juntar à frase usando join
  // const summaries = [];
  // for (fruit in result) {
  //   let message = `${result[fruit]} ${fruit}`;
  //   if (result[fruit] > 1) message += 's';
  //   summaries.push(message);
  // }
  // console.log(`Sua cesta possui: ${summaries.join(', ')}.`);
  
  return returnPhrase;
}

//Exercicios 4.4 - bonus 3 *********************************************
function encontraMorador() {
  let lastResident = {};
  let lastBlock = {}
  let numBlocks = Object.entries(moradores);
  // numResidents = Object.entries(moradores)[numBlocks-1].length;
  for(let block of numBlocks) {
    for (let resident of block) {
      for (let ap of resident) {
        lastResident = ap;  
        lastBlock = block;
      }
    }
  }
  console.log(lastResident.nome);
  console.log(` O morador do ${lastBlock[0]} de nome ${lastResident.nome} ${lastResident.sobrenome} mora no ${lastResident.andar}° andar, apartamento ${lastResident.apartamento}.`);
}

function executar(exercicio) {
  switch (exercicio) {
    case 1:
      console.log(convertRomanos('MMXVIII', 0)[1]);
      console.log(convertRomanos('VI', 0)[1]);
      console.log(convertRomanos('IV', 0)[1]);
      break;
    case 2:
      let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
      console.log(arrayEven(vector));
      break;
    case 3:
      vetor = ['Banana'];
      console.log(countBasket(vetor));
      break;
    case 4:
      console.log(encontraMorador());
      break;
    default:
      break;
  }
}
// tableRomanos.push({simbol:'J',value:2000,level:50});
// console.log(Object.values(tableRomanos));
//console.log(Object.entries(tableRomanos)[0][1]);

//valores aceitáveis para executar
//1, 2, 3, 4
executar(4);
