// unusual “console log”

console.log(`Bad lieute${+'nant'}t (1992)`);
console.log('b' + 'a' + +'a' + 'a');
console.log('My name is ' + +'a' + 'cy');
console.log('Your test is an' + null + 'ed');

// transform a number into a binary form

let btn = document.getElementById('btn');
let binary = document.querySelector('.binary');
let decimal = document.querySelector('.decimal');

function getNumber () {
    let num = parseInt(prompt('Enter your number'));
    decimal.textContent = num;
    
    let res = '';

    while(num > 0) {
        res = (num % 2) + res;
        num = Math.floor(num / 2);
    }

    binary.textContent = res;
}

getNumber();

btn.addEventListener('click', function () {
    getNumber();
})