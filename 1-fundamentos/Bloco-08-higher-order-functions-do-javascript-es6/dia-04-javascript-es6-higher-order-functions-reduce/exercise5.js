// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA(letter) {
  // escreva seu código aqui
  return names.reduce(
    (acc, name) => acc + (name.toLowerCase().split(letter.toLowerCase()).length - 1),
    0
  );
}
console.log(containsA('a'));
