// // Object menjadi JSON
// let mahasiswas = {
//     nim: 8040170092,
//     nama: "Prasetiyo",
//     fakultas: "Ilmu Komputer",
//     programStudi: "Sistem Informasi"
// }

// console.log(JSON.stringify(mahasiswas));


// // JSON menjadi Object menggunakan Vanilajs
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswas = JSON.parse(this.responseText);
//         console.log(mahasiswas);
//     }
// }

// xhr.open('GET', 'test.json', true);
// xhr.send();

// JSON menjadi Object menggunakan jQuery
$.getJSON("test.json", function (data) {
    console.log(data);
});