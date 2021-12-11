```javascript
function kotak(panjang) {
    let hasil = "";
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            hasil += "* ";
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(segitigaSiku(5))
```
```
* * * * * 
* * * * 
* * * 
* * 
* 
```

```javascript
function segitigaSiku(panjang) {
    let hasil = ""
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += "* ";
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(segitigaSiku(5))
```
```
* 
* * 
* * * 
* * * * 
* * * * *
```
