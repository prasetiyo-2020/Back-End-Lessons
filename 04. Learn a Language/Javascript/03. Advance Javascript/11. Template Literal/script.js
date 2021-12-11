// Tempalte Literal
/*
"Tempalte literal adalah string literal yang memungkinkan adanya expression dialamnya." -MDN Web Docs

- Menggunakan `` back tick
- Multi-line String
- Embedded Expression
- HTML Fragments
- Expression Interpolaton
- Tagged Template
*/


// String Literal
let nama1 = 'Prasetiyo';
let nama2 = "Ramdani Setiawan";
let nama3 = `Khoirun Nisa`;

// Multi-line String
console.log(`string 1
string 2`);

// Multi-line String(HTML Fragments)
const mhs1 = {
    nama: 'Prasetiyo',
    umur: 23,
    email: 'prasetiyo2020@yahoo.com'
};

let el = `<div class="mhs1>
    <h2>${mhs1.nama}</h2>
    <span class="umur">${mhs1.umur}</span>
</div>`;

console.log(el);

// Embedded Expression
const nama4 = 'Prasetiyo';
let umur4 = 23;
console.log(`Halo, perkenalkan nama saya ${nama4}, saya ${umur4} tahun.`);

// Expression Interpolation
let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);