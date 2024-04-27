let arrays = [[1, 2, 3], [4, 5], [6]];
let array = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(array);
// → [1, 2, 3, 4, 5, 6]