// DOM MANIPULATION METHOD (ELEMENT)

// 1. element.innerHTML()
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Prasetiyo</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'hello world!';

// 2. element.style.<properties>
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';

// 3. mengelola Attribute
// - element.setAttribute()
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'prasetiyo');

// - element.getAttribute()
judul.getAttribute('id');

// - element.removeAttribute()
judul.removeAttribute('id');

// 4. element.classList
// - element.classList.add()
const p2 = document.querySelector('.p2');
p2.classList.add('label');

// - element.classList.remove()
p2.classList.remove('label');

// - element.classList.toggle()
p2.classList.toggle('biru-muda');

// - element.classList.item()
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

p2.classList.item(2);

// - element.classList.contains()
p2.classList.contains('dua');

// - element.classList.replace()
p2.classList.replace('tiga', 'empat');
