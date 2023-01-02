// let avg = score / numberOfTeam;
let dolphinsAvg, koalaAvg;

// ======================Dolphin Data for each three cases =============
let dolphins = {
    testCase1: [96, 108, 89],
    testCase2: [97, 112, 110],
    testCase3: [97, 112, 101],
};

// ======================Dolphin Data for three test cases =============
let Koalas = {
    testCase1: [88, 91, 110],
    testCase2: [109, 95, 123],
    testCase3: [96, 108, 89],
};

function HighestAvg() {
    dolphinsAvg =
        dolphins.testCase1.reduce((prev, next) => {
            return prev + next;
        }) / 3;

    koalaAvg =
        dolphins.testCase1.reduce((prev, next) => {
            return prev + next;
        }) / 3;

    if (dolphinsAvg > koalaAvg && dolphinsAvg > 100) {
        console.log("The dolphins have won the trophy!!!");

    } else if (koalaAvg > dolphinsAvg && koalaAvg > 100) {
        console.log("The dolphins have won the trophy!!!");

    } else if ((koalaAvg = dolphinsAvg && koalaAvg > 100 && dolphinsAvg > 100)) {
        console.log("It's a Draw!!");
        
    } else {
        console.log("No winner!");
    }
}

HighestAvg();
