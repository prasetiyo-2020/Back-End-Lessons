const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// for
const newAngka = [];
for ( let i = 0; i < angka.length; i++) {
    if (angka[i] >= 5) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);

// Filter versi 1
const newAngka2 = angka.filter(function (a) {
    return a >= 3;
});
console.log(newAngka2);

// Filter dengan arrow function satu baris
const newAngka3 = angka.filter(a => a >= 3);
console.log(newAngka3);

// Map dengan arrow function satu baris
const newAngka4 = angka.map(a => a * 2);
console.log(newAngka4);

// Reduce
const newAngka5 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // butuh 2 parameter
console.log(newAngka5);

// Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(hasil);