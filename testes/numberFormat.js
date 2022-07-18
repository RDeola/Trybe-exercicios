const number = 123456.789;

console.log(
  'Euro',
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)
);
// expected output: "123.456,79 €"

// the Japanese yen doesn't use a minor unit
console.log(
  'Yen',
  new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number)
);
// expected output: "￥123,457"

// the Brasilian brl doesn't use a minor unit
console.log(
  'Real',
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
);
// expected output: "R$ 123.456,79"

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// expected output: "1,23,000"

// expected output:
let amount = 3500;

console.log('Milhar padrão', new Intl.NumberFormat('pt-BR').format(amount));

console.log('decimal', new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(amount));
// → '3.500'
console.log('percentual', new Intl.NumberFormat('pt-BR', { style: 'percent' }).format(amount));
// → '350,000%'
console.log(new Intl.NumberFormat('pt-BR', { style: 'unit', unit: 'liter' }).format(amount));
// → '3.500 l'
console.log(
  new Intl.NumberFormat('pt-BR', { style: 'unit', unit: 'liter', unitDisplay: 'long' }).format(
    amount
  )
);
// → '3.500 litros'
console.log(
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'name',
  }).format(amount)
);
// →  '3.500,00 Reais brasileiros'
console.log(
  new Intl.NumberFormat('pt-BR', {
    notation: 'compact',
    compactDisplay: 'long',
  }).format(amount)
);

// formating with an object config
const nf = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

console.log(nf.format(11.29)); // > output: "R$11,30" não consegui o arredondamento
console.log(nf.format(11.25)); // > output: "R$11,25"
console.log(nf.format(11.22)); // > output: "R$11,20"

// showing actual config
var options = Intl.NumberFormat().resolvedOptions();
for (var property in options) {
  console.log(property + ': ' + options[property]);
}
