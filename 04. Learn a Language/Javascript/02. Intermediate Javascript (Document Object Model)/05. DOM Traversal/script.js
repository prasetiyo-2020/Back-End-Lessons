// DOM Traversal Method
// parentNode => menghasilkan node
// parentElement => menghasilkan element
// nextSibling => menghasilkan element
// nextElementSibling => menghasilkan element
// previousSibling => menghasilkan node
// previousElementSibling => menghasilkan element


const close = document.querySelectorAll('.close');

/*
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(e) {
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
    });
}
*/

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
})
