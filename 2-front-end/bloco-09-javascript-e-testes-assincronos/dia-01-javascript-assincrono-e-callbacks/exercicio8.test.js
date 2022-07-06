// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function message(messageError, messageOak) {
      expect(messageError).toEqual(expectedError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasau', message);
  });

  it('retorna um pokemon que existe no banco de dados', () => {
    // Escreva aqui seu código
    const expectedMessage =
      'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    function message(messageError, messageOak) {
      expect(messageOak).toEqual(expectedMessage);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', message);
  });
});
