let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = []

let maior = 0;

// Exercicio 2
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

// Exercicio 3
// for (let i = 0; i <= numbers.length - 1; i += 1) {
//     if (i === numbers.length - 1) {
//         novoNumbers.push(numbers[i]*2)
//     } else
//      novoNumbers.push(numbers[i] * numbers[i + 1]);
// }

// function returnGreaterThan(vet) {
//   let v1 = 0;
//   let v2 = 0;
//   v1 = vet.pop();
//   if (vet.length > 1) {
//     v2 = returnGreaterThan(vet);
//   } else {
//     v2 = vet[0];
//   } 
//   if (v1 > v2) {
//     return  v1;
//   } else {
//     return  v2;
//   }
// }

// console.log(returnGreaterThan(numbers));