// IF/ELSE STATEMENT
// Example 1:
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
 
// Example 2:
let x = 50;

if(x > 70) {
console.log(x);
} else {
console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

// Example 3:
let language = "French";
let greeting = "Selamat Pagi";

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

// Example 4:
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log("Anda mendapatkan diskon sebesar " + discount * 100 + "%");
/* output
Anda mendapatkan diskon sebesar 0%
*/


// Truthy & Falsy
/*
    Number 0
    BigInt 0n
    String kosong seperti “” atau ‘’
    null
    undefined
    NaN, atau Not a Number
*/

// Example 5 (Truthy & Falsy):
let name = "";

if (name) {
console.log("Halo, " + name);
} else {
console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
*/



// Example 6:
/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika nilai score lebih atau sama dengan 90
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika nilai score ada di antara 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika nilai score ada di antara 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika nilai score ada di antara 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika nilai score di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
  let result;

	if (score >= 90) {
      result = 'Selamat! Anda mendapatkan nilai A.';
    } else if (score >= 80) {
      result = 'Anda mendapatkan nilai B.';
    } else if (score >= 70) {
      result = 'Anda mendapatkan nilai C.';
    } else if (score >= 60) {
      result = 'Anda mendapatkan nilai D.';
    } else if (score < 60) {
      result = 'Anda mendapatkan nilai E.';
    }
  
  return result;
}
