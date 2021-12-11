// Spread Operator
/*
"Memecah (expand / unpack) iterables menjadi single element."

Iterable Object:
- String
- Array
- Arguments / NodeList
- TypedArray
- Map
- Set
- User-defined Iterables
*/

// Menggabung 2 array
const mhs = ['Prasetiyo','Ramdani','Nissa'];
const dosen = ['Azis', 'Rama', 'Angga'];
const orang = [...mhs, 'Rizal', ...dosen];
// const orang = mhs.concat(dosen);
console.log(orang);


// meng-copy array
const mahasiswa = ['Prasetiyo', 'Khoirun', 'Ramdani'];
const mahasiswa1 = [...mhs];
mahasiswa1[0] = 'Fajar';
console.log(mahasiswa1);


// ...
const liMhs = document.querySelectorAll('li');
// const mhsArr = [];
// for (let i = 0; i< liMhs.length; i++) {
//     mhsArr.push(liMhs[i].textContent);
// }
// console.log(mhsArr);
const mhsArr = [...liMhs].map(m => m.textContent);
console.log(mhsArr);


// ...
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;