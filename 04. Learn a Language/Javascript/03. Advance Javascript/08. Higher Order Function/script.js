// Higher Order Function

/*
"Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value."
- https://eloquentjavascript.net
"Javascript memperlakukan function sebagai object."
- sitepoint.com
Alasan menggunakan Higher Order Function :
- Abstraksi
Contoh High Order Function
- Array.prototype.map()
- Array.prototype.filter()
- Array.prototype.reduce()
*/

// Contoh 1.
function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(100);

// --

function repeat(n, action) {        //repeat merupakan HOF dan parameter ke dua berupa function
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(10, console.log);
repeat(3, alert); 