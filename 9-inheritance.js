/////////////////
// Inheritance //
/////////////////

// our ABSTRACT class
class Animal {

    // setting up the properties
    constructor(name, legs, age, species) {
        this.name    = name;
        this.legs    = legs;
        this.age     = age;
        this.species = species;
    }

    // a function
    speak() {
        console.log('...');
    }

    // another function
    description() {
        console.log('This is a ' + this.age + ' year old ' + this.species + ' called ' + this.name);
        console.log('it has ' + this.legs + ' leg(s)');
    }
}

// our CHILD class
class Cat extends Animal {

    // setting up properties
    constructor(name, age) {

        // we know these, so we don't need to ASK in the code for them
        var legs = 4;
        var species = 'cat';

        // pass them into the PARENT ABSTRACT class
        super(name, legs, age, species);
    }


    // overiding the PARENT ABSTRACT class function
    speak() {
        console.log('meow!');
    }

}

// creating our cat
var myCat = new Cat('Tom', 4);
myCat.speak();
myCat.description();

