const box = document.querySelector('.box');
const p = document.createElement('p');
const pIsi = document.createTextNode('Hi, Im Here!')
p.appendChild(pIsi);
box.appendChild(p);


box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
}); 