function minMax() {
    console.log(Math.min(2, 4, 6, 8, 1, 9));
    console.log(Math.max(2, 4, 6, 8, 1, 9));
}

function ifS() {
    let num = Number(prompt("Pick the number"));
    if (!Number.isNaN(num) && num != 15) {
        console.log("Your number is the square root of " + num * num);
    } else if ((num = 15)) {
        console.log("999999999999999999999");
    } else {
        console.log("GTFO");
    }
}

function whileS(times) {
    let num = 0;
    while (num <= times) {
        console.log(num);
        ++num;
    }
}

function doWhileS() {
    let variable;
    do {
        variable = prompt("String: ");
    } while (!variable);
    console.log(variable);
}

function forS() {
    let seq = ["a", "b", "c"];
    for (let x = 0; x < seq.length; x++) {
        console.log(seq[x]);
    }
}

function breakTheLoop() {
    for (let x = 5; ; x++) {
        if (x % 111 == 0) {
            console.log(x);
            break;
        } else if (x % 15 == 0) {
            continue;
        } else {
            console.log(x);
        }
    }
}

function switchS() {
    switch (prompt("String: ")) {
        case "a":
            console.log("One");
            break;
        case "b":
            console.log("Two");
            break;
        default:
            console.log("Three");
            break;
    }
}

/* 
Comment
*/

//  Comment

// Function as value
let valFunc = function () {
    console.log("a");
};

// Declaration notation
function square(x) {
    return x * x;
}

// Arrow function
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// Optional arguments
function minus(a, b) {
    //Second argument is redundant
    if (b === undefined) {
        return -a;
    } else return a - b;
}

function powerWithDefaultValue(base, exponent = 2) {
    //Exponent is default value if it's not given or undefined
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

// Closure
function closure() {
    function multiplier(factor) {
        return (number) => number * factor;
    }
    let thrice = multiplier(3);
    let twice = multiplier(2);
}

// Recursion Example #1
function powerRecursion(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * powerRecursion(base, exponent - 1);
    }
}

// Recursion Example #2
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return (
                find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`)
            );
        }
    }
    return find(1, "1");
}

// Creating object
function object() {
    let obj = {
        //Creating object
        data0: true,
        events: ["one", "two", "three", "four"],
    };
    obj.data1 = false; //Assigning new property
    delete obj.data1; //Deleting property
    Object.keys(obj); //Returning an arrah with values from object
    Object.assign(obj, another_obj); //Copies all prop. from 'another_obj' into 'obj'
}

// let obj = {a:1,b:2,c:3};
// console.log(obj);
// Object.assign(obj, {b:3, d:5});
// console.log(obj);
// console.log(Object.keys(obj));

//Foreach analog
function easyLoopingArray() {
    for (let item of array) {
        return item;
    }
}

//remove index from array
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

//Any number of arguments
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}

function threeDotsNotation() {
    let numbers = [1, 2, 3];
    console.log(max(...numbers)); //passing elements as separate arguments
    //It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2).
    let words = ["never", "fully"];
    console.log(["will", ...words, "understand"]);
    console.log(["will", words, "understand"]);
}

// List
function list() {
    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };
}

//Functions with undetermined value
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
function action() {
    let labels = [];
    repeat(5, i => {
        labels.push(`Unit ${i + 1}`);
    });
    console.log(labels);
}
// action();



// Higher order functions
function greaterThan(n) {
    return m => m > n;
}
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// Functions that changing functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
// noisy(Math.min)(3,2,1);

// Function that provide new types of control flow.
function controlFlow(params) {
    function unless(test, then) {
        if (!test) then();
    }

    repeat(3, n => {
        unless(n % 2 == 1, () => {
            console.log(n, "is even");
        });
    });
}


// forEach method
function foreach() {
    ["a", "b"].forEach(l => console.log(l));
}


// Filtering arrays
var SCRIPTS = [
    {
        name: "Adlam",
        ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
        direction: "rtl",
        year: 1987,
        living: true,
        link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
        name: "Caucasian Albanian",
        ranges: [[66864, 66916], [66927, 66928]],
        direction: "ltr",
        year: 420,
        living: false,
        link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
    },
    {
        name: "Ahom",
        ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
        direction: "ltr",
        year: 1250,
        living: false,
        link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
    }
]

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

//Mapping array
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

//Reducing
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {return count + (to - from);}, 0);
}