// OPERATOR
// Pertambahan
(namaVariabel + namaVariabel)

// Pengurangan
(namaVariabel - namaVariabel)

// Perkalian
(namaVariabel * namaVariabel)

// Pembagian
(namaVariabel / namaVariabel)

// Sisa Bagi
(namaVariabel % namaVariabel)

// CONTOH DARI HASIL OPERATOR
let a = 12;
let b = 9;

console.log(a + b) // Output : 21
console.log(a - b) // Output : 3
console.log(a * b) // Output : 108
console.log(a / b) // Output : 1.3333333333333333
console.log(a % b) // Output : 3

// COMPARISON OPERATOR
let a = 10;
let b = 12;

console.log(a < b); // Output : true
console.log(a > b); // Output : false

// Perbedaan antara “Sama” dan “Identik”
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// LOGICAL OPERATOR
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
