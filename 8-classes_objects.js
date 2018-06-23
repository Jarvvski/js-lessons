/////////////////////
// Classes/Objects //
/////////////////////

class Person {
    constructor(name, age) {
        // create our variables and set them
        this.name = name;
        this.age = age;
    }

    // function to print this persons name
    sayName() {
         console.log("my name is: " + this.name);
    }
}

// create our first person as a variable
var dude1 = new Person("John", 12);

// call the function for the previous variable
dude1.sayName();

// create our second person as a variable
var dude2 = new Person("Ben", 17);

// access their properties
console.log(dude1.name);
console.log(dude1.age);

// change properties
dude1.name = "Adam";
dude1.age = 15;

// show that its changed
console.log(dude1.name);
console.log(dude1.age);
