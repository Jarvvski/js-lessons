////////////
// Arrays //
////////////

// set it to a variable
var fruits = ['apple', 'pear', 'orange'];
// 0 = apple
// 1 = pear
// 2 = orange

// cheecking the first item
console.log(fruits[0]);

console.log('-----');

// looping through the array
for (var item of fruits) {
    console.log(item);
}

console.log('-----');

// another loop example
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('-----');

// in reverse
// remember: the first item is 0, so the last item is length - 1
for (var i = (fruits.length - 1); i >= 0; i--) {
    console.log(fruits[i]);
}



