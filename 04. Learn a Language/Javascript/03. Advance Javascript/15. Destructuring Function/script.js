// Destructuring Function

function penjumlahanPerkalian(a, b) {
    return [a + b, a * b];
}

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);

/* Output :
5
6
*/

function kalkulasi2(a, b) {
    return [a + b, a - b, a * b, a / b];
}

const [jumlah2, kurang2, kali2, bagi2 = 'tidak ada'] = kalkulasi2(2, 3);
console.log(jumlah2);
console.log(kurang2);
console.log(kali2);
console.log(bagi2);


/* Output :
5
-1
6
0.6666666666666666
*/

function kalkulasi3(a, b) {
    return {
        tambah3: a + b,
        kurang3: a - b,
        kali3: a * b,
        bagi3: a / b
    }
}

const {bagi3, tambah3, kali3, kurang3} = kalkulasi3(1, 2);
console.log(kurang3);

/* Output :
-1
*/

// Destructuring function arguments
const mhs1 = {
    nama: 'Prasetiyo',
    umur: 23,
    email: 'prasetiyo2020@yahoo.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

function cetakMhs({nama, umur, nilai : {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));
/* Output :
Halo, nama saya Prasetiyo, saya berumur 23 tahun, dan nilai uas saya adalah 75.
*/