// EXECUTION CONTEXT, HOISTING & SCOPE

/*
2 Fase pada Execution Context
    1. Creation
    2. Execution
*/

var nama = 'Prasetiyo';
var username = '@prasetiyo';

function cetakURL(username) {
    var instagramURL = 'http://instagram.com';
    return instagramURL + username;
}

console.log(cetakURL(username));


// http://pythontutor.com/javascript.html#mode=edit