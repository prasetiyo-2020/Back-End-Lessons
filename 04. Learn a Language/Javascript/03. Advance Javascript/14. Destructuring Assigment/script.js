// Destructuring Assigment
/*
"Expression pada javascript yang membuat kta dapat 'membongkar' nilai dari array atau properti dari object kedalam variabel yang terpisah." - MDN Web Docs
*/

// Desctructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Prasetiyo'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
const [salam, , , nama] = perkenalan;
console.log(nama);

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);
/* Output:
1
2
2
1
*/

// return value pada function
function tes() {
    return [20,30];
}
const [c, d] = tes();
console.log(c);
/* Output:
20
*/

// Rest parameter
const [e, ...values] = [1,2,3,4,5];
console.log(e);
console.log(values);
/* Output:
1
[2,3,4,5]
*/

// Desctructuring Object
const mhs = {
    name1: 'Prasetiyo',
    age: 23
}

const {name1, age} = mhs;
console.log(name1);
/* Output:
Prasetiyo
*/

// Assigment tanpa deklarasi object
({name2, age2} = {name2: 'Prasetiyo', age2: 23});
console.log(name2);
/* Output:
Prasetiyo
*/

// Assign ke variabel baru
const mhs3 = {
    name3: 'Prasetiyo',
    age3: 23
}

const {name3: n, age3: u} = mhs3;
console.log(n);
/* Output:
Prasetiyo
*/

// Memberikan Default Value
const mhs4 = {
    name4: 'Prasetiyo',
    age4: 23
}

const {name4, age4, email4 = 'email@default.com'} = mhs4;
console.log(email4);
/* Output :
email@default.com
*/

// Mengambil field pada object, setelah dikirm sebagai parameter untuk function
const mhs5 = {
    id5: 1000,
    name5: 'Prasetiyo',
    age5: 23
}

function getIdMhs ({id5}) {
    return id5;
}

console.log(getIdMhs(mhs5));
/* Output :
1000
*/