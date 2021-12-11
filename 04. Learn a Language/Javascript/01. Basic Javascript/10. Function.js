/*
Function merupakan sebuah variabel yang berisi blok logika. Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.
*/

Example 1(Declaration Function):
// function dan parameter
function multiply(a, b) {
    return a * b;
}
// argument
let result = multiply(10, 2)
console.log(result)

/* output
20
*/

Example 2(Declaration Function):
function greeting() {
    console.log("Good Morning!")
}

greeting();

/* output
Good Morning!
*/

Example 3(Declaration Function):
function greeting(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

Example 4(Expression Function):
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));

/* output
Good Morning Ron!
 */
 
Example 5:
/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
function minimal(a, b) {
    if (a > b) {
        return b; 
    } else if (a < b) {
        return a;
    } else if (a === b) {
        return a;
    }
}

function power(a, b) {
    const hasilKali = (Math.pow(a,b));
    return hasilKali;
}
