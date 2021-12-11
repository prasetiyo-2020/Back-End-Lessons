// Event Handler
// - Inline HTML attribute
// - Element method

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

const p3 = document.querySelector('.p3');
p3.onclick = ubahWarnaP3;

// addEventListener()

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});



/* Catatan
DAFTAR EVENT
- Mouse Event
- Keyboard Event
- Resources Event
- Focus Event
- View Event
- Form Event
- CSS Animation & Transition Event
- Drag & Drop Event
- dll.
*/