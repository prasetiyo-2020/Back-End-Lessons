
/* ARROW FUNCTION
"Arrow function merupakan bentuk lain yang lebih ringkas dari function expression." -MDN
*/

// Arrow function tanpa parameter
const tampilNama1 = () => `Hello World!`;
console.log(tampilNama1());

// Arrow function
const tampilNama2 = (nama) => { return `Halo, ${nama}`; }
console.log(tampilNama2('Prasetiyo'));

// Implisit return
const tampilNama3 = nama => `Halo, ${nama}`;
console.log('Ramdani Setiawan');

// Menggunakan Map
let mahasiswa1 = ['Prasetiyo', 'Ramdani Setiawan', "Khoirun Nisa"];
let jumlahHuruf1 = mahasiswa1.map(nama => nama.length);
console.log(jumlahHuruf1);

// Petakan sebagai Object
let mahasiswa2 = ['Prasetiyo', 'Ramdani Setiawan', "Khoirun Nisa"];
let jumlahHuruf2 = mahasiswa2.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf2);