// Chapter III
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

// Chapter IV
// Exercise 1
function min(a, b) {
    return a < b ? a : b;
}

// Exercise 2
function isEven(n) {
    if (n >= 0) {
        if (n == 0) {
            return true;
        } else if (n == 1) {
            return false;
        } else return isEven(n - 2);
    } else {
        if (n == 0) {
            return true;
        } else if (n == -1) {
            return false;
        } else return isEven(n + 2);
    }
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
