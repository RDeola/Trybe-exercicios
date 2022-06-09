const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)
                  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  
}

testingScope(true);