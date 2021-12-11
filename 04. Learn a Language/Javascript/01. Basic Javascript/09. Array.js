/*
Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.
*/

// Example 1 - CREATE ARRAY
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

// Example 2 - PICK ARRAY
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

/* output:
42.5
*/

// Example 3 - ARRAY LENGTH
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

// Example 4 - PUSH
const myArray = ["Coklat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Coklat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */
 
 // Example 5 - POP
const myArray = ["Orange", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

/* output
[ Orange, 42.5, 22, true ]
*/

// Example 6 - Shift and Unshift
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// Example 7 - DELETE
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

Example 8(Splice):
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

Example 9:
/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
const evenNumber = [];
for(let i = 1; i <=100; i++) {
    if (i % 2 === 0) {
    evenNumber.push(i);
    }
}
