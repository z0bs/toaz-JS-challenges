function testdata1() {
  marksBMI = marksWeight1 / marksHeight1 ** 2;
  johnsBMI = johnsWeight1 / johnsHeight1 ** 2;

  if (marksBMI > johnsBMI && marksBMI > 100) {
    markHigherBMI = `Mark's BMI ${marksBMI} is higher than john's! ${marksBMI}`;
    console.log(markHigherBMI);
  } else {
    markHigherBMI = `Mark's BMI ${marksBMI} is Lower than john's! ${marksBMI}`;
    console.log(markHigherBMI);
  }
}


function testdata2() {
  marksBMI = marksWeight2 / marksHeight2 ** 2;
  johnsBMI = johnsWeight2 / johnsHeight2 ** 2;

  if (marksBMI > johnsBMI && marksBMI > 100) {
    markHigherBMI = `Mark's BMI ${marksBMI} is higher than john's! ${marksBMI}`;
    console.log(markHigherBMI);
  } else {
    markHigherBMI = `Mark's BMI ${marksBMI} is Lower than john's! ${marksBMI}`;
    console.log(markHigherBMI);
  }
}

// =====================invoking the functions ===================

testdata1();
testdata2();
