// Rest Parameter
/*
"Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array."
*/

function myFunction(a, b, ...myArgs) {
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    return myArgs;
}

console.log(myFunction(1, 2, 3, 4, 5));

/* Output :
[3, 4, 5]
*/

// ---

function jumlahkan(...angka) {
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }
    // return total;

    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5));

/* Output :
15
*/

// Array Destructuring
const kelompok1 = ['Prasetiyo', 'Ramdani', 'Khoirun Nisa', 'Wahyuni', 'Asep'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

/* Output :
["Khoirun Nisa", "Wahyuni", "Asep"]
*/

// Object Destructuring
const team = {
    pm: 'Prasetiyo',
    frontEnd1: 'Ramdani',
    frontEnd2: 'Khoirun Nisa',
    backEnd1: 'Wahyuni',
    backEnd2: 'Asep'
}

const { pm, ...myTeam } = team;
console.log(myTeam);

/* Output :
{frontEnd1: "Ramdani", frontEnd2: "Khoirun Nisa", backEnd1: "Wahyuni", backEnd2: "Asep"}
*/

// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Prasetiyo', false, 10, true, 'Ramdani'));

/* Output :
[1, 2, 10]
*/