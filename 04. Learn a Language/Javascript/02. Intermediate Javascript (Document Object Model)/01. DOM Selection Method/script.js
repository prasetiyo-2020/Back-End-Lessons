// DOM SELECTION METHOD
// getElementById(); => menghasilkan elemen
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Prasetiyo';

// getElemensByTagName(); => menghasilkan HTML Collection
const p = document.getElementsByTagName('p');
p[2].style.backgroundColor = 'lightblue';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

// getElementsByClassName(); => menghasilkan HTML Collection
const p1 = document.getElementsByClassName('p1') [0];
p1.innerHTML = 'ini diubah dari javascript';

// querySelector(); => menghasilkan elemen
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// querySelectorAll(); => menghasilkan Nodes
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p') [0];
p4.style.backgroundColor = 'orange';
