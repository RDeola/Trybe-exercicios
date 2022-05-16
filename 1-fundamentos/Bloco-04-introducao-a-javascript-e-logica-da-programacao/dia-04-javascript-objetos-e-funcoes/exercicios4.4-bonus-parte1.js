let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  //Exercicio 4.4-bonus parte 1-2
  recorrente: 'Sim'
};

//Exercicio 4.4-bonus parte 1-1
console.log('Bem vinda, ' + info.personagem);

//Exercicio 4.4-bonus parte 1-3
for (let index in info) {
  console.log(index);
}

//Exercicio 4.4-bonus parte 1-4
for (let index in info) {
  console.log(info[index]);
}

//Exercicio 4.4-bonus parte 1-5
let anotherInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let index in info) {
  if (index === 'recorrente') {
    if (info[index] === 'Sim' && anotherInfo[index] === 'Sim') {
      console.log('Ambos recorrentes');
    }
  } else {
    console.log(info[index] + ' e ' + anotherInfo[index]);
  }
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    //Exercicio 4.4-bonus parte 1-7
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};

//Exercicio 4.4-bonus parte 1-6
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

//Exercicio 4.4-bonus parte 1-8
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

