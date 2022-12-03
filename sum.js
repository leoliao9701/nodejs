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
