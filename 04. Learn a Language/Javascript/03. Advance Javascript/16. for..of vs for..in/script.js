// for..of
/*
"Creates a loop iterating over iterable object."

Iterable Object :
- String
- Array
- Arguments / NodeList
- TypedArray
- Map
- Set
- User-defined Iterables
*/

// for..of
const mhs = ['Prasetiyo', 'Ramdani', 'Khoirun Nisa'];
for (const m of mhs) {
    console.log(m);
}

/* Output:
Prasetiyo
Ramdani
Khoirun Nisa
*/

// String
const nama = 'Yoso';
for (const n of nama) {
    console.log(n);
}

/* Output:
Y
o
s
o
*/

const mhs2 = ['Prasetiyo', 'Ramdani', 'Khoirun Nisa'];
for (const [i, m] of mhs2.entries()) {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

/* Output:
Prasetiyo adalah mahasiswa ke-1
Ramdani adalah mahasiswa ke-2
Khoirun Nisa adalah mahasiswa ke-3
*/

// Node List
const liNama = document.querySelectorAll('.nama');

for (n of liNama) {
    console.log(n.innerHTML);
}
/* Output:
Prasetiyo
Ramdani
Khoirun Nisa
*/

// Arguments
function jumlahkanAngka() {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1,2,3,4,5));

/* Output :
15
*/

// For..in
/*
"Creates a loop only iterating over enumerable."

Enurable yang dimaksud disini adalah properti pada object
*/

const mhs3 = {
    nama3: 'Prasetiyo',
    umur3 : 23,
    email3: 'prasetiyo2020@yahoo.com'
}

for (m in mhs3) {
    console.log(m);
}

/* Output:
nama3
umur3
email3
*/