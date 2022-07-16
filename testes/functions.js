const superheroMaker = (a) => {
  return a instanceof Function ? a() : a;
};
console.log(superheroMaker(() => 'Batman'));
console.log(superheroMaker('Superman'));

const myFunc = (str) => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
  }
  return str;
};
console.log(myFunc('Hello world'));
