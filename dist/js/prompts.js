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

console.log(findSolution(124));
