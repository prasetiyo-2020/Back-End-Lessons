// Tagged Template Literal
/*
"Bentuk yang lebih kompleks dari template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function." - MDN Web Docs

Tagged Template digunakan untuk :
- Escaping HTML Tags
- Translation & Internationalization
- Styled Components
*/

// const nama = 'Prasetiyo';
// const umur = 23;

// // function coba(strings, ...values) {
// //     let result = '';
// //     strings.forEach((str, i) => {
// //         result += `${str}${values[i] || ''}`;
// //     });
// //     return result;
// // }

// function coba(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

const nama = 'Prasetiyo';
const umur = 23;
const email = 'prasetiyo2020@yahoo.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}`;
console.log(str);

document.body.innerHTML = str;