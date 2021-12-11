// DOM MANIPULATION METHOD (NODE)

// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()
// etc


const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(teksPBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// -------

const liBaru = document.createElement('li');
const teksBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// -------

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2baru);
sectionB.replaceChild(h2Baru, p4);