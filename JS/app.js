//====================================================================================
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let juftlar = sonlar.filter((n) => n % 2 === 0);

console.log(juftlar);

//===================================================

let sum = 0;
for (let i = 0; i < sonlar.length; i++) {
  sum += sonlar[i];
}
console.log(sum);

//===================================================
let kvadratlar = sonlar.map((n) => n ** 2);
console.log(kvadratlar);
