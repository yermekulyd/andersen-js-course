// First part

Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const resultArray = [];
    const sourceArray = this;

    for (let index = 0; index < sourceArray.length; index++) {
        if (index in sourceArray) {
            const element = sourceArray[index];
            const shouldInclude = callback.call(thisArg, element, index, sourceArray);

            if (shouldInclude) {
                resultArray.push(element);
            }
        }
    }

    return resultArray;
};

// Testing code 1
// const numbers = [1, 2, 3, 4, 5];

// const isEven = (number) => {
//     return number % 2 === 0;
// };

// const evenNumbers = numbers.myFilter(isEven);

// console.log(evenNumbers); // Output: [2, 4]


// Testing code 2
// const numbers = [10, 20, 30, 40, 50];
// const threshold = { limit: 25 };

// const greaterThanLimit = function (number) {
//     return number > this.limit;
// };

// const filteredNumbers = numbers.myFilter(greaterThanLimit, threshold);

// console.log(filteredNumbers); // Output: [30, 40, 50]


// Testing code 3
//
// const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

// languages.myFilter(function (item, index, arr) {
//   console.log("Текущий элемент " + item)
//   console.log("Индекс " + index)
//   console.log("Массив " + arr)

//   return index >= 3
// })


// Second part

[window.alert, window.prompt, window.confirm] = [window.confirm, window.alert, window.prompt];

// This will display a confirmation dialog (originally confirm)
alert('Do you want to proceed?');

// This will display an alert dialog (originally alert)
prompt('This is an important message.');

// This will display a prompt dialog (originally prompt)
confirm('What is your name?');
