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

// 1. HTML Fragments
const mhs = {
    nama : 'Prasetiyo',
    umur : 23,
    nim : 8040170092,
    email: 'prasetiyo2020@yahoo.com'
};

const el = `<div class=mhs>
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

// document.body.innerHTML = el;

// 2. Looping
const mhs2 = [
    {
        nama: 'Prasetiyo',
        email: 'praseiyo2020@yahoo.com'
    },
    {
        nama: 'Ramdani Setiawan',
        email: 'Ramdani@yahoo.com'
    },
    {
        nama: 'Khoirun Nisa',
        email: 'Khoirun@yahoo.com'
    },
    {
        nama: 'Renata Alya',
        email: 'Renata@yahoo.com'
    },
    {
        nama: 'Bunga Shavira',
        email: 'Bunga@yahoo.com'
    }
];

const el2 = `<div class="mhs">
    ${mhs2.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    </ul>`).join('')}
</div>`;

// document.body.innerHTML = el2;

// 3. Conditionals
// ternary
const lagu = {
    judul: '21 Guns',
    penyanyi: 'Green Day',
    feat: 'Prasetiyo'
}

const el3 = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`;

// document.body.innerHTML = el3;

// 4. Nested
// HTML Fragments bersarang

const mhs3 = {
    nama: 'Prasetiyo',
    semester: 5,
    mataKuliah: [
        'Rekayasa Perangkat Lunak',
        'Komunikasi Data dan Jaringan',
        'Keamanan Sistem Informasi'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el4 = `<div class="mhs">
    <h2>${mhs3.nama}</h2>
    <span class="semester"> Semester ${mhs3.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs3.mataKuliah)}
</div>`;

document.body.innerHTML = el4;