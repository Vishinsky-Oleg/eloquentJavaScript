let journal = [];

function addEntry(events, squirrel) { //Add event to journal
    journal.push({
        events,
        squirrel
    });
}

let JOURNAL = [{ //Finalized journal
    events: ["carrot", "exercise", "weekend"],
    squirrel: false
},
{
    events: [
        "bread",
        "pudding",
        "brushed teeth",
        "weekend",
        "touched tree",
    ],
    squirrel: false,
},
{
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
},
{
    events: [
        "brussel sprouts",
        "ice cream",
        "brushed teeth",
        "computer",
        "weekend",
    ],
    squirrel: false,
},
{
    events: [
        "potatoes",
        "candy",
        "brushed teeth",
        "exercise",
        "weekend",
        "dentist",
    ],
    squirrel: false,
},
{
    events: [
        "brussel sprouts",
        "pudding",
        "brushed teeth",
        "running",
        "weekend",
    ],
    squirrel: false,
},
{
    events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    squirrel: false,
},
{
    events: ["bread", "beer", "brushed teeth", "cycling", "work"],
    squirrel: false,
},
{
    events: ["cauliflower", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["pizza", "brushed teeth", "cycling", "work"],
    squirrel: false
},
{
    events: ["lasagna", "nachos", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["brushed teeth", "weekend", "touched tree"],
    squirrel: false
},
{
    events: ["lettuce", "brushed teeth", "television", "weekend"],
    squirrel: false,
},
{
    events: ["spaghetti", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["brushed teeth", "computer", "work"],
    squirrel: false
},
{
    events: ["lettuce", "nachos", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["carrot", "brushed teeth", "running", "work"],
    squirrel: false
},
{
    events: ["brushed teeth", "work"],
    squirrel: false
},
{
    events: ["cauliflower", "reading", "weekend"],
    squirrel: false
},
{
    events: ["bread", "brushed teeth", "weekend"],
    squirrel: false
},
{
    events: ["lasagna", "brushed teeth", "exercise", "work"],
    squirrel: false,
},
{
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
},
{
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false,
},
{
    events: ["spaghetti", "nachos", "work"],
    squirrel: false
},
{
    events: [
        "cauliflower",
        "ice cream",
        "brushed teeth",
        "cycling",
        "work",
    ],
    squirrel: false,
},
{
    events: ["spaghetti", "peanuts", "computer", "weekend"],
    squirrel: true
},
{
    events: [
        "potatoes",
        "ice cream",
        "brushed teeth",
        "computer",
        "weekend",
    ],
    squirrel: false,
},
{
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false,
},
{
    events: ["peanuts", "brushed teeth", "running", "work"],
    squirrel: false,
},
{
    events: ["potatoes", "exercise", "work"],
    squirrel: false
},
{
    events: ["pizza", "ice cream", "computer", "work"],
    squirrel: false
},
{
    events: ["lasagna", "ice cream", "work"],
    squirrel: false
},
{
    events: ["cauliflower", "candy", "reading", "weekend"],
    squirrel: false
},
{
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false,
},
{
    events: ["potatoes", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["carrot", "work"],
    squirrel: false
},
{
    events: ["pizza", "beer", "work", "dentist"],
    squirrel: false
},
{
    events: ["lasagna", "pudding", "cycling", "work"],
    squirrel: false
},
{
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
},
{
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false,
},
{
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false,
},
{
    events: ["lasagna", "peanuts", "work"],
    squirrel: true
},
{
    events: ["pizza", "work"],
    squirrel: false
},
{
    events: ["potatoes", "exercise", "work"],
    squirrel: false
},
{
    events: ["brushed teeth", "exercise", "work"],
    squirrel: false
},
{
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false,
},
{
    events: ["pizza", "cycling", "weekend"],
    squirrel: false
},
{
    events: ["carrot", "brushed teeth", "weekend"],
    squirrel: false
},
{
    events: ["carrot", "beer", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["pizza", "peanuts", "candy", "work"],
    squirrel: true
},
{
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false,
},
{
    events: ["potatoes", "peanuts", "brushed teeth", "work"],
    squirrel: false,
},
{
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false,
},
{
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false,
},
{
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
},
{
    events: [
        "cauliflower",
        "peanuts",
        "brushed teeth",
        "computer",
        "work",
        "touched tree",
    ],
    squirrel: false,
},
{
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false,
},
{
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false,
},
{
    events: ["bread", "candy", "work"],
    squirrel: false
},
{
    events: ["potatoes", "nachos", "work"],
    squirrel: false
},
{
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false,
},
{
    events: [
        "carrot",
        "brushed teeth",
        "exercise",
        "weekend",
        "touched tree",
    ],
    squirrel: false,
},
{
    events: ["brussel sprouts", "running", "work"],
    squirrel: false
},
{
    events: ["brushed teeth", "work"],
    squirrel: false
},
{
    events: ["lettuce", "brushed teeth", "running", "work"],
    squirrel: false,
},
{
    events: ["candy", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false,
},
{
    events: ["bread", "brushed teeth", "weekend"],
    squirrel: false
},
{
    events: ["cauliflower", "brushed teeth", "weekend"],
    squirrel: false
},
{
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false,
},
{
    events: ["carrot", "pudding", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["lettuce", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
},
{
    events: ["pizza", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["spaghetti", "peanuts", "exercise", "weekend"],
    squirrel: true
},
{
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false,
},
{
    events: ["brushed teeth", "running", "work"],
    squirrel: false
},
{
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false,
},
{
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false,
},
{
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false,
},
{
    events: ["carrot", "brushed teeth", "running", "work"],
    squirrel: false
},
{
    events: ["carrot", "reading", "weekend"],
    squirrel: false
},
{
    events: ["carrot", "peanuts", "reading", "weekend"],
    squirrel: true
},
{
    events: ["potatoes", "brushed teeth", "running", "work"],
    squirrel: false,
},
{
    events: ["lasagna", "ice cream", "work", "touched tree"],
    squirrel: false,
},
{
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false,
},
{
    events: ["pizza", "brushed teeth", "running", "work"],
    squirrel: false
},
{
    events: ["lettuce", "brushed teeth", "work"],
    squirrel: false
},
{
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false,
},
{
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false,
},
];

function phi(table) { //phi of table
    return (
        (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt(
            (table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2])
        )
    );
}

function phiAdv([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

// console.log(phi([76, 9, 4, 1]));
// console.log(Math.sqrt(5 * 85 * 10 * 80));
// console.log(5 * 85 * 10 * 80);
// console.log(583.09518948453 * 583.09518948453);

function tableFor(event, journal) {  //creating table for event
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        table[index] += 1;
    }
    return table;
}

// console.log(tableFor('pizza', JOURNAL));

function journalEvents(journal) { //Getting every type of events in array
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

// console.log(journalEvents(JOURNAL));

function getCorrelations() { //All correlation
    for (event of journalEvents(JOURNAL)) {
        console.log(event + ':', phi(tableFor(event, JOURNAL)));
    }
}

function filteredCorrelations() { //Filtered >0,1 <-0.1
    for (event of journalEvents(JOURNAL)) {
        let correlation = phi(tableFor(event, JOURNAL));
        if (correlation > 0.1 || correlation < -0.1) {
            console.log(event + ':', correlation);
        }
    }
}

function twoEventsCorrelation() {
    for (let entry of JOURNAL) {
        if (entry.events.includes('peanuts') && !entry.events.includes("brushed teeth")) {
            entry.events.push('peanut teeth');
        }
    }
    console.log(phi(tableFor('peanut teeth', JOURNAL)));
}

