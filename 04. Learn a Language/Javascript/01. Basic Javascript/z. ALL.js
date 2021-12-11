// Cetak "Hello World!"
console.log("Hello World!")

/* Ini merupakan komentar dengan lebih dari satu baris
Teks apapun yang berada disini akan dijadikan komentar.
Ketika menggunakan ini, jangan lupa untuk menutupnya.
*/


// ---------------------------------------- VARIABEL -----------------------------------------------------
// Variabel let cara 1
let lastName;
lastName = "Prasetiyo";
console.log(lastName);

// Variabel let cara 2
let lastName = "Prasetiyo";
console.log(lastName);

// Variable const atau constanta
const lastName = "Prasetiyo";
console.log(lastName);

// ---------------------------------------- OPERASI ------------------------------------------------------
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// ---------------------------------------- TIPE DATA ------------------------------------------------------
// -> Undefined
// -> Numbers -(2^53 - 1) hingga (2^53 - 1)
// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// bigIntbutSmall
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

// String
let greet = "Hello";
console.log(typeof(greet))

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question)

/* output: "What do you think of JavaScript?" he asked */

const answer = '"I think it\'s awesome!" he answered confidently';

// String interpolation
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

// Boolean
let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

/* output: 
boolean
boolean
*/

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

// NULL
let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

// SYMBOL
const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/


/* Increment dan Decrement */
let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */


// ---------------------------------------- OPERATOR ------------------------------------------------------
// Assignment Operator
let x = 10;
let y = 5

x += y;

console.log(x);

/* output
15
*/

let x = 10;
let y = 5;

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

// Comparison Operator
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

// Perbedaan antara “Sama” dan “Identik”
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

// ---------------------------------------- LOGICAL OPERATOR ------------------------------------------------------
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/

// ---------------------------------------- IF/ELSE STATEMENT------------------------------------------------------
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */


// Example
let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

// Example
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/

// Example
// condition ? true expression : false expression

const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

/* output
Anda mendapatkan diskon sebesar 0%
 */


// Truthy & Falsy
let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
 */


// Switch Case Statement
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

/* output
Bonjour!
*/

//FOR LOOP
for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/

// For of loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/

// WHILE
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

// DO-WHILE
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);

// INFINITY LOOP
let i = 1;
 
while (i <= 5) {
    console.log(i);
}

// ----------------------------------------STRUKTUR DATA ------------------------------------------------------
// OBJECT
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

// tanpa dot
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

// Example
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
 */


// memodifikasi property
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

// Menghapus property pada object
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */


// Array

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

/* output:
42.5
*/

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

// memodifikasi isi array, tambah data
const myArray = ["Coklat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Coklat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// memodifikasi isi array, keluarkan data (hapus)
const myArray = ["Orange", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

/* output
[ Orange, 42.5, 22, true ]
*/

// SHIFT dan UNSHIFT
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// Menghapus Array[1]
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

// Menghapus Elemen pada index yang telah dihapus
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/
// SPREAD OPERATOR
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

// Menggabungkan dua array menjadi satu array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

// Menggabungkan dua Object menjadi satu object
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/

// Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);
 
/* output:
John Doe 18
*/

// Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
let firstName = "Dimas";
let age = 20;
 
// menginisialisasi nilai baru melalui object destruction
({firstName, age} = profile);

console.log(firstName);
console.log(age);
 
/* output:
John
18
*/

// Default Values
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
/* output:
John
18
undefined
*/

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale = false} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
/* output:
John
18
false
*/

// Assigning to Different Local Variable Names
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 
/* output:
John
Doe
18
*/


// Destructing Array
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);
 
/* output:
John Doe 18
*/

// Mengambil array ke 4
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood ] = favorites;
 
console.log(thirdFood);
 
/* output:
Nugget
*/

// Destructuring Assignment
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/

// Menukar Nilai
let a = 1;
let b= 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// Default Values
const favorites = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/

// MAP
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

// Example
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
3
England
4
India
 */

// SET
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

// SET add()
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

// Perbandingan Map dan WeakMap
// MAP
let visitsCountMap = new Map(); // Menyimpan daftar user
 
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
 
let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"
 
jonas = null;                    // Data object "Jonas" dihapus
 
console.log(visitsCountMap);
 
/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

// WeakMap
let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

console.log(visitsCountMap);

/* output
WeakMap { <items unknown> }
*/

//FUNCTION

// Parameter
function multiply(a, b) {
    return a * b;
}

// Example
function greeting() {
    console.log("Good Morning!")
}

greeting();

/* output
Good Morning!
*/

// Example 
function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "French");

/* output
Bonjour Harry!
*/

// Example
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

/* output
20
*/

// Example
function greeting(name, language) {
    if(language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

// Argumen
multiply(3, 4);

// EXPRESSION Function
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));

/* output
Good Morning Ron!
 */

// FUNCTION PARAMETER dengan OBJECT
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo Ren
*/

// Default Parameter dengan Argumen lebih sedikit daripada parameternya
function exponentsFormula(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/* output
2^undefined = NaN
*/

// Defaul Parameter dengan menetapkan nilai default pada parameternya
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/* output
3^2 = 9
*/

// REST PARAMETER
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/

// Arrow Function
// Regular Function
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

// Arrow function
// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

// Jika hanya satu parameter
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

/* output
Nama saya Leia
 */

// Jika body function hanya satu baris, maka bisa dibuat seperti ini.
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */

// Variable Scope
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

// gunakan variable pada body fungsi
function multiply(num) {
    const total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)

/* output
400
*/

// Closure
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

/* output
Halo, Obi Wan
 */

// Tanpa Closure
let counter = 0;

let add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */

// Dengan Closure
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */