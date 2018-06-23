// const is just a `var` that we say is never going to change
// a `const`ant ;)
const courseWeight = 30;
const examWeight   = 70;

var courseMark = 75;
var examMark = 80;

console.log("Course mark = " + courseMark);
console.log("Exam mark = " + examMark);

var courseFinal = (courseMark / 100) * courseWeight;
var examFinal = (examMark / 100) * examWeight;

var finalMark = courseFinal + examFinal;

console.log("They got: " + finalMark + "% overall");


