var number = 0;

const from = document.querySelector('#from');
const to = document.querySelector('#to');
const amount = document.querySelector('#amount');

const start = document.querySelector('.button--state-start');
const cleaner = document.querySelector('.button--state-clean');

const numbers = document.querySelector('.numbers');



const span = document.createElement('SPAN');


start.addEventListener('click', function(e) {
    e.preventDefault();

    min = parseInt(from.value);
    max = parseInt(to.value);
    amoun = parseInt(amount.value);
    
    if (min == 0 || max == 0 || amoun == 0 || isNaN(min) || isNaN(max) || isNaN(amoun)) {
        console.log('No se puede carnal');
        alert('Please, Complete all fields');
    } else {
        show(min, max, amoun);
    }
    
});

cleaner.addEventListener('click', function() {
    clean();
});



function show(number1 = 0, number2 = 0, number3 = 0) {
    span.innerHTML = "";
    
    for (let i = 0; i < number3; i++) {
        number = Math.floor( Math.random() * (number2 - number1 + 1) ) + number1;
        span.innerHTML += `<span>${number}</span>`;
    }
    numbers.append(span);
    
    cleaner.style.display = "inline";
    start.value = "AGAIN";
}

function clean() {
    from.value = "";
    to.value = "";
    amount.value = "";
    
    numbers.removeChild(span);
    cleaner.style.display = "none";
    start.value = "START";
}

function message(message) {
    
}