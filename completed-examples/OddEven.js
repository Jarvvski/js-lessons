
function oddEven(number) {
    // use modulus to check remainder
    var remainder = number % 2;

    // if remainder is 0 via division by 2, the number is even
    if (remainder === 0) {
        console.log(number + " is even!");
    } else {
        // if not, it's going to be odd!
        console.log(number + " is odd!");
    }
}

// some quick test runs
oddEven(0);
oddEven(4);
oddEven(7);
oddEven(9);
