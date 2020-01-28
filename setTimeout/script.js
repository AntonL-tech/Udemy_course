// let TimerId = setTimeout(sayHello, 3000);
// clearTimeout(TimerId);

// let TimerId = setInterval(sayHello, 3000);
// clearInterval(TimerId);


// function sayHello() {
//     console.log('Hello!');
// }



// let TimerId = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 2000);
// });


let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;


    let timerId = setInterval(frame, 10);

    function frame () {
        if (pos === 300) {
            clearInterval(timerId);
        } else {

            pos++;

            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');


btnBlock.addEventListener('click', function(e) {
    // if (e.target && e.target.tagName === 'BUTTON') {
    //     console.log ('Hello!');
    // }

    // if (e.target && e.target.classList.contains('first')) {
    //     console.log ('Hello!');
    // }



    if (e.target && e.target.matches('button.first')) {
        console.log ('Hello!');
    }
    
});