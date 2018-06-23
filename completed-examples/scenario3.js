const COURSE_WEIGHT = 30;
const EXAM_WEIGHT   = 70;

class Student {
    constructor(name, examMark, courseMark) {
        this.name       = name;
        this.examMark   = examMark;
        this.courseMark = courseMark;

        // we don't have a final mark yet
        // so we leave it without a value!
        this.finalMark;

        // set a `boolean` up so we can check later
        // if we've calculated the mark yet!
        this.hasCalculatedMark = false;
    }

    calculateMark() {

        // Our student doesn't _need_ these so we
        // use `var` because they wont be part
        // of the `student` object!
        console.log("calculating...");
        var courseFinal = (this.courseMark / 100) * COURSE_WEIGHT;
        var examFinal = (this.examMark / 100) * EXAM_WEIGHT;

        this.finalMark = courseFinal + examFinal;

        // update the calculatedMark `boolean`!
        this.hasCalculatedMark = true;
    }

    printMark() {

        // remember, we're checking if what's between the ()
        // equals true!
        if (this.hasCalculatedMark) {
            console.log(this.name + " got " + this.finalMark + "% overall");
        } else {
            console.log("We haven't calculated " + this.name + "'s Mark yet! Doing it now!");

            // call the calculate function!
            this.calculateMark();

            // now call this same function again to print!
            this.printMark();
        }
    }

}

var student1 = new Student("John", 74.5, 52);
student1.calculateMark();
student1.printMark();


// notice what happens when we run `printMark` without
// doing `calculateMark` first!
var student2 = new Student("Sally", 93.5, 66);
student2.printMark();

// Again, if we don't print it out using `printMark`
// it will never tell us what they got
var student3 = new Student("Bill", 44.2, 45);
student3.calculateMark();

var students = [student1, student2, student3];

// now we can loop over the students! No
// need to use the manual `indexed` for loop here
for (var student of students) {
    student.printMark();
}
