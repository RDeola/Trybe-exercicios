// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando uppercase assíncrono, utilizando a palavra casa', (done) => {
  uppercase('casa', (result) => {
    try {
      expect(result).toBe('CASA');
      done();
    } catch (error) {
      done(error);
    }
  });
});
