// First part

const myIterable = {
    from: 1,
    to: 4,
    [Symbol.iterator]() {
        if(typeof this.from !== 'number' || typeof this.to !== 'number') {
            throw new Error('Both "from" and "to" properties must be numbers');
        }

        if(this.to < this.from) {
            throw new Error('"from" property must be less than or equal to "to" property');
        }

        let current = this.from;
        const last = this.to;

        return {
            next() {
                if(current <= last) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let item of myIterable) {
  console.log(item); // 1, 2, 3, 4
}

// Second part

function getPersons(name, age) {
    // using literal notation
    const personLiteral = { name, age };

    // using Object.assign
    const personAssign = Object.assign({}, { name, age });

    // using a constructor function
    function PersonConstructor(name, age) {
        this.name = name;
        this.age = age;
    }
    const personConstructor = new PersonConstructor(name, age);

    // using Object.create with a prototype
    const personPrototype = { name, age };
    const personCreate = Object.create(personPrototype);

    // using class syntax
    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const personClass = new PersonClass(name, age);

    // using Object.defineProperties
    const personDefineProperties = {};
    Object.defineProperties(personDefineProperties, {
        name: { value: name, enumerable: true },
        age: { value: age, enumerable: true }
    });

    // using JSON parsing
    const personJSON = JSON.parse(`{ "name": "${name}", "age": ${age} }`);

    return [
        personLiteral,
        personAssign,
        personConstructor,
        personCreate,
        personClass,
        personDefineProperties,
        personJSON
    ];
}

const persons = getPersons('Alice', 30);

persons.forEach((person, index) => {
    console.log(`Person ${index + 1}:`, person);
    console.log(`Own Properties:`, Object.keys(person));
    console.log(`Name: ${person.name}, Age: ${person.age}`);
    console.log('---');
});
