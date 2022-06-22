const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAtack = (dragon) => randomBetween(15, dragon.strength);
console.log(`🚀 ~ file: bonusParteI.js ~ line 28 ~ dragonDamage`, dragonAtack(dragon));

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAtack = (warrior) =>
  randomBetween(warrior.strength, warrior.weaponDmg * warrior.strength);
console.log(`🚀 ~ file: bonusParteI.js ~ line 33 ~ warriorDamage`, warriorAtack(warrior));

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageAtack = (mage) => {
  const result = {
    manaSpent: 0,
    damage: 'Não possui mana suficiente',
  };
  if (mage.mana >= 15) {
    result.manaSpent = 15;
    result.damage = randomBetween(mage.intelligence, mage.intelligence * 2);
  }
  return result;
};
console.log(`🚀 ~ file: bonusParteI.js ~ line 44 ~ mageAtack ~ mageAtack`, mageAtack(mage));
