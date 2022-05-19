// Desafio 11
function passTestValores(vetor) {
  let pass = true;
  for (let i = 0; i < vetor.length; i += 1) {
    if ((vetor[i] < 0) || (vetor[i] > 9)) {
      pass = false;
      break;
    }
  }
  return pass;
}
function mapCreator(map, vetor) {
  for (const valor of vetor) {
    if (map[valor]) {
      map[valor] += 1;
    } else {
      map[valor] = 1;
    }
  }
  return map;
}
function passTestRepeat(vetor) {
  let result = true;
  let map = Object.create(null);

  map = mapCreator(map, vetor);
  let counter = Object.values(map);
  for (let key of counter) {
    if (key > 2) {
      result = false;
    }
  }
  return result;
}
function passTest(vetor) {
  let pass = 0;
  if (vetor.length !== 11) {
    pass += 1;
  } else if (!passTestValores(vetor)) {
    pass += 2;
  } else if (!passTestRepeat(vetor)) {
    pass += 2;
  }
  return pass;
}
function generatePhoneNumber(vetor) {
  // seu código aqui
  let result = '';
  let passResult = passTest(vetor);
  if (passResult === 1) {
    result = 'Array com tamanho incorreto.';
  } else if (passResult > 1) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = vetor.join('');
    result = result.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  }
  return result;
}

// Desafio 12
function checkSum(lineA, lineB, lineC) {
  return ((lineA < (lineB + lineC))
       && (lineB < (lineA + lineC))
       && (lineC < (lineB + lineA)));
}
function checkAbs(lineA, lineB, lineC) {
  return ((lineA > Math.abs(lineB - lineC))
       && (lineB > Math.abs(lineA - lineC))
       && (lineC > Math.abs(lineB - lineA)));
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let pass = true;
  pass = checkSum(lineA, lineB, lineC);
  pass = pass && checkAbs(lineA, lineB, lineC);
  return pass;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let sumGlasses = 0;
  let copo = 'copo';
  let vetor = string.match(/\d+/g);
  for (let i = 0; i < vetor.length; i += 1) {
    sumGlasses += parseInt(vetor[i], 10);
  }
  if (sumGlasses > 1) {
    copo += 's';
  }
  return `${sumGlasses} ${copo} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
