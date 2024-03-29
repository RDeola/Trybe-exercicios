// ARRAY.FOREACH ***********************************************************************************************************************************************

// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList1 = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach((email) => showEmailList1(email)); // minha
emailListInData.forEach(showEmailList1(email)); //gabarito

// 2 - Leia e entenda este exemplo do forEach feito no CodePen.
// Array contendo a lista de emails.
const emailList = ['isa@myemail.com', 'lipe@myemail.com', 'digo@myemail.com', 'greg@myemail.com'];

// Função callback que recebe o array emailList como parâmetro.
// const showEmailList = (list) => {
//   const div = document.querySelector('#email-list');
//   div.innerHTML = '';
//   // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
//   list.forEach((email) => {
//     const p = document.createElement('p');
//     p.innerHTML = `${email} : Enviado com sucesso!`;
//     div.appendChild(p);
//   });
// };

// const btnFilter = document.querySelector('#btn-filter');
// btnFilter.addEventListener('click', () => showEmailList(emailList));

// ARRAY.FIND****************************************************************************************************************************************************

// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const result = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return result;
};

console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((music) => music.id === id);
}

console.log(findMusic('31031685'));

// ARRAY.SOME & ARRAY.EVERY ***************************************************************************************************************************************

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const nameS = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((person) => person === name);
};

console.log(hasName(nameS, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((item) => item.age >= minimumAge);
};

console.log(verifyAges(people, 18));

// ARRAY.SORT *********************************************************************************************************************************************************

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
const peoples = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
peoples.sort((a, b) => a.age - b.age);

console.log(peoples);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
const peopleS = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
peopleS.sort((a, b) => b.age - a.age);

console.log(peopleS);
