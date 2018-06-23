/////////////////
// conditonals //
/////////////////

var isAlive = true;

// if isAlive = true
if (isAlive) {
    console.log('im alive!');
}

// if NOT isalive = true
if (!isAlive) {
    console.log('im dead!');
}

// else if example
var number = 6;
if (number > 10) {
    console.log('its greater than 10');
} else if (number < 5)
    console.log('its smaller than 5');
else {
    console.log('its not greater than 1, and not smaller than 5');
}

// switch statement
var name = "adam";
switch (name) {
    case "fred":
        console.log('the name is fred!');
        break;
    case "tom":
        console.log('the name is tom!');
        break;
    case "adam":
        console.log('the name is adam!');
        break;
    default:
        console.log('I cant find that name :(');
        break;
}
