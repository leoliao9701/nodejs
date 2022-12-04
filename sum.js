// var x = 0;
// function sum(x) {
//   var n = 0;
//   while (n < 10) {
//     n++;
//     x += n;
//   }
// }
// console.log(x);

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(10));

console.time('SUM1');
for(let i = 0; i <=10000; i++){
    sum(10000);
    
}
console.timeEnd('SUM1')

function multiply(a, b) {
  return a * b;
}
function square(n) {
  return multiply(n, n);
}
function printSquare(n) {
  let result = square(n);
  console.log(result);
}
printSquare(4);