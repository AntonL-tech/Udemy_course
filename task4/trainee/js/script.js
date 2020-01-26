var menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    att = document.getElementById('prompt');

    
menu.insertBefore(menuItem[2], menuItem[1]);
var menuEl = document.createElement('li');
menuEl.classList.add('menu-item');
menuEl.textContent = 'Пятый пункт';
menu.appendChild(menuEl);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover';

console.log(title);
title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

var attitude = prompt('Ваше отношение к технике Apple?', '');
console.log(attitude);
att.textContent = attitude;