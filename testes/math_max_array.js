var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// or
var spreadMaximus = Math.max(...arr);
console.log(maximus);
console.log(spreadMaximus);
