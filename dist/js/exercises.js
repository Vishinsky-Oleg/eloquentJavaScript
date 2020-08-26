// Chapter II
// Exercise #1
function loopingATriangle() {
    for (let x = 1, line = "#"; x < 8; x++, line += "#") {
        console.log(line);
    }
}

// Exercise #2
function fizzBuzz() {
    for (let x = 1; x <= 100; x++) {
        if (x % 3 == 0 && x % 5 == 0) {
            console.log("FizzBuzz");
        } else if (x % 3 == 0 && x % 5 != 0) {
            console.log("Fizz");
        } else if (x % 3 != 0 && x % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(x);
        }
    }
}

// Exercise #3
function chessBoard(size) {
    for (let x = 0, line = ""; x < size; x++) {
        line = "";
        for (let y = 0; y < size; y += 2) {
            line += x % 2 == 0 ? " #" : "# ";
        }
        console.log(line);
    }
}

// Chapter III
// Exercise 1
function min(a, b) {
    return a < b ? a : b;
}

// Exercise 2
function isEven(n) {
    if (n == 0) {
        return true;
    } else if ((n == 1 && n >= 0) || (n == -1 && n < 0)) {
        return false;
    } else return n >= 0 ? isEvenn(n - 2) : isEvenn(n + 2);
}

// Exercise 3
function countBs(str) {
    for (var a = 0, count = 0; a < str.length; a++) {
        if (str[a] === "B") {
            ++count;
        }
    }
    return count;
}

// Chapter IV
// Exercise 1
function range(start, end, step) {
    seq = [];
    if (!step && end > start) {
        for (let i = start; i <= end; i++) {
            seq.push(i);
        }
    } else if (step < 0 && start > end) {
        for (let i = start; i >= end; i += step) {
            seq.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            seq.push(i);
        }
    }
    return seq;

}

function sum(array) {
    let final = 0;
    for (let number of array) {
        final += number;
    }
    return final;
}

// console.log(sum(range(1, 10, 2)));
// console.log(range(10, 4, -2));

// Exercise 2
function reverseArray(array) {
    let reversed = [];
    for (let i = 0; i < array.length; i++) {
        reversed.unshift(array[i]);
    }
    return reversed;
}
function reverseArrayInPlace(array) {
    for (let i = 0, locAr = []; i < Math.floor(array.length / 2); i++) {
        locAr.push(array[i]);
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = locAr[i];
    }
    return array;
}

// let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(reverseArray(arrayValue));
// console.log(reverseArrayInPlace(arrayValue));
// console.log(Math.floor(0, 10))

// Exercise 3
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}
// console.log(arrayToList([10, 20]));

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

// Exercise 4
function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}