const buttonsContainer = document.querySelector('.buttons-container');

function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// - Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// - Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];

const ulDays = document.getElementById('days');

function populaDays() {
  for (i = 0; i < dezDaysList.length; i += 1) {
    const liDay = document.createElement('li');
    liDay.classList.add('day');

    let filtrado = dezHolidays.filter((valor) => valor === dezDaysList[i]);
    filtrado = Number(filtrado);
    if (filtrado > 0) liDay.classList.add('holiday');

    filtrado = dezFridays.filter((valor) => valor === dezDaysList[i]);
    filtrado = Number(filtrado);
    if (filtrado > 0) liDay.classList.add('friday');

    liDay.innerText = dezDaysList[i];

    ulDays.appendChild(liDay);
  }
}
populaDays();

//Exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//  - Adicione a este botão a ID "btn-holiday".
//  - Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createButton(parent, string, id) {
  const tagButton = document.createElement('button');
  tagButton.innerHTML = string;
  tagButton.id = id;
  parent.appendChild(tagButton);
}
createButton(buttonsContainer, 'Feriados', 'btn-holiday');

//Exercicio 3
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
//  - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
const btnFeriados = document.getElementById('btn-holiday');
btnFeriados.addEventListener('click', function () {
  const holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.background === 'rgb(211, 232, 199)') {
      holidays[i].style.background = 'rgb(238, 238, 238)';
    } else {
      holidays[i].style.background = 'rgb(211, 232, 199)';
    }
  }
});

//Exercicio 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
createButton(buttonsContainer, 'Sexta-feira', 'btn-friday');

// Exercício 5
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
const btnFridays = document.getElementById('btn-friday');
btnFridays.addEventListener('click', function () {
  const fridays = document.getElementsByClassName('friday');
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].style.background === 'rgb(211, 232, 199)') {
      fridays[i].style.background = 'rgb(238, 238, 238)';
    } else {
      fridays[i].style.background = 'rgb(211, 232, 199)';
    }
  }
});

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target
ulDays.addEventListener('mouseover', function (element) {
  if (element.target.classList.contains('day')) {
    element.target.style.fontSize = '30px';
  }
});
ulDays.addEventListener('mouseout', function (element) {
  if (element.target.classList.contains('day')) {
    element.target.style.fontSize = '20px';
  }
});


const tagMyTasks = document.querySelector('.my-tasks');
// Exercicio 7 
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function newTask(task) {
  const tagSpan = document.createElement('span');
  tagSpan.innerHTML = task;
  tagMyTasks.appendChild(tagSpan);
}
newTask('Pular');

// Exercício 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function newLegenda(cor) {
  const tagDiv = document.createElement('div');
  tagDiv.style.background = cor;
  tagDiv.classList.add('task');
  tagMyTasks.appendChild(tagDiv);
}
newLegenda('yellow');

// Exercício 9
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
tagMyTasks.addEventListener('click', function(element) {
  if (element.target.classList.contains('task')) {
    console.log(element.target.classList.contains('selected'));
    if (element.target.classList.contains('selected')) {
      element.target.classList.remove('selected');
    } else {
      element.target.classList.add('selected');
    }
  }
});

