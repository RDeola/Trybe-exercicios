// 1 - Crie uma função que receba um número e retorne seu fatorial
const fatorial = (fatorar) => fatorar > 1 ? fatorar * fatorial(fatorar - 1) : fatorar;

console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// 4 - Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));