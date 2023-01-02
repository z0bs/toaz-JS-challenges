"use strict";
let mass, height, markHigherBMI, marksBMI, johnsBMI;

// ==================Mark's data =============
let marksWeight1 = 78;
let marksHeight1 = 1.69;

let marksWeight2 = 95;
let marksHeight2 = 1.88;

// ==================John's data =============
let johnsWeight1 = 92;
let johnsHeight1 = 1;

let johnsWeight2 = 85;
let johnsHeight2 = 1;

// ====================First test 1==================

function testdata1() {
    marksBMI =  marksWeight1 / (marksHeight1 ** 2)
    johnsBMI = johnsWeight1 / (johnsHeight1 ** 2)

    if ( marksBMI  >  johnsBMI &&  marksBMI  > 100) {
        markHigherBMI = "mark has a higher BMI"
        console.log(markHigherBMI)
    }
    else {
        markHigherBMI = "mark has a lower BMI"
        console.log(markHigherBMI)
    }

}


// ====================test Case 2==================

function testdata2() {
    marksBMI =  marksWeight2 / (marksHeight2 ** 2)
    johnsBMI = johnsWeight2 / (johnsHeight2 ** 2)

    if ( marksBMI >  johnsBMI &&   marksBMI  > 100) {
        markHigherBMI = "mark has a higher BMI"
        console.log(markHigherBMI)
    }
    else {
        markHigherBMI = "mark has a lower BMI"
        console.log(markHigherBMI)
    }

}


// =====================invoking the functions ===================

testdata1()
testdata2()