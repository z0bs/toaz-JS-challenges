// let avg = score / numberOfTeam;
let dolphinsAvg, koalaAvg;

// ======================Dolphin Data for each three cases =============
let dolphins = {
  testCase1: [44, 23, 71],
  testCase2: [20, 2, 1],
  // testCase2: [85, 54, 41],
};

// ======================Dolphin Data for three test cases =============
let koalas = {
  testCase1: [65, 54, 49],
  testCase2: [23, 34, 27],
};

const calcAverage = (checkWinner) => {
  dolphinsAvg =
    dolphins.testCase2.reduce((prev, next) => {
      return prev + next;
    }) / 3;

  koalaAvg =
    koalas.testCase2.reduce((prev, next) => {
      return prev + next;
    }) / 3;

  checkWinner(dolphinsAvg, koalaAvg);
};

const checkWinner = (dolphinsAvg, koalaAvg) => {
  if (dolphinsAvg > koalaAvg * 2) {
    console.log("The dolphins have gaddamn won the trophy!!!");

  } else if (koalaAvg > dolphinsAvg * 2) {
    console.log("The koala's have won the trophy!!!");

  } else {
    console.log("No winner!");
  }
};


calcAverage(checkWinner);
