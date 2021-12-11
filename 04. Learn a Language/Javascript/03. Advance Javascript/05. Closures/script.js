/*
"Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut." - MDN

"Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi." - w3school

"Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan." - Code Fellow

"Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain." - Techsith
*/

// Lexical Scope
// function init() {
//     let nama = 'Prasetiyo';     // local variable
//     return function () {     // inner function (closure*)
//         console.log(nama);      // akses ke parent variable
//     }
// }
// let panggilNama = init();
// panggilNama();

/*
Kenapa menggunakan closure?

"Untuk membuat Function Factories." - MDN
"untuk membuat private method." - MDN
*/

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Prasetiyo');


// ---
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
}) (); // Immediately Invoke function

console.log(add());
console.log(add());
console.log(add());