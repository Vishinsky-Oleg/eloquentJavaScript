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

