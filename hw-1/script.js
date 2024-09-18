// unusual “console log”

console.log(`Bad lieute${+'nant'}t (1992)`);
console.log('b' + 'a' + +'a' + 'a');
console.log('My name is ' + +'a' + 'cy');
console.log('Your test is an' + null + 'ed');

// transform a number into a binary form

const BTN = document.getElementById('btn');
const BINARY = document.querySelector('.binary');
const DECIMAL = document.querySelector('.decimal');

function getNumber() {
    const input = prompt('Enter a non-negative integer');

    if (input === null || input.trim() === '') {
        return alert('Please enter a valid non-negative integer')
    }

    const num = Number(input);

    if (isNaN(num) || num < 0) {
        alert('Please enter a valid non-negative integer');
        return;
    }

    DECIMAL.textContent = num;
    BINARY.textContent = num.toString(2);
}

// getNumber();

BTN.addEventListener('click', getNumber);