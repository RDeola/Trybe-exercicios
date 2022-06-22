const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (object, key, value) => (object[key] = value);
addTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keyList = (object) => Object.keys(object);
console.log(keyList(lesson3));

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const size = (object) => Object.keys(object).length;
console.log(size(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valuesList = (object) => Object.values(object);
console.log(valuesList(lesson1));

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
// console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
let total = 0;
Object.values(allLessons).forEach((value) => {
	total += value['numeroEstudantes'];
});
console.log(total);

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const getValueByNumber = (object, indice) => Object.values(object)[indice];
console.log(getValueByNumber(lesson2, 2));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
const verifyPair = (object, key, value) =>
	object[key] === value ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));

// Bônus 1 - 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
total = 0;
Object.values(allLessons).forEach((value) => {
	value['materia'] === 'Matemática'
		? (total += value['numeroEstudantes'])
		: (total += 0);
});
console.log(total);

// Bônus 2 - 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
total = 0;
let materias = [];
function createReport(object, teacher) {
	Object.values(object).forEach((value) => {
		if (value['professor'] === teacher) {
			materias.push(value['materia']);
			total += value['numeroEstudantes'];
		}
	});
	return `professor: ${teacher},
  aulas : [ ${materias} ],
  estudantes: ${total}`;
}
console.log(createReport(allLessons, 'Maria Clara'));
