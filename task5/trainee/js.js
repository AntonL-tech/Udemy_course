let btns = document.querySelectorAll('button'),
    link = document.querySelector('a');

console.log(btns);
console.log(link);

btns[0].addEventListener('click', function(event) {
    let target = event.target,
        type = event.type;
    
    console.log(target);
    console.log(type);

    target.style.display = 'none';
});


link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Hello !');
});


btns.forEach(function(item) {
    item.addEventListener('mouseleave', function(event) {
        console.log('You OUT!');
    });
});