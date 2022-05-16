//Exercicio 4.4-1
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
  //Exercicio 4.4-3
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

//Exercicio 4.4-2
console.log('A jogadora ' + player.name + ' ' + player.lastName + ', tem ' + player.age + ' anos de idade ');

//Exercicio 4.4-4
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

//Exercicio 4.4-5
console.log('A Jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

console.table(player);